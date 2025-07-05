# Usar imagen base de Node.js
FROM node:20-alpine AS base

# Instalar dumb-init para manejo de procesos
RUN apk add --no-cache dumb-init

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de configuración de dependencias
COPY package*.json ./
COPY tsconfig*.json ./

# Instalar todas las dependencias (incluyendo devDependencies)
RUN npm ci --legacy-peer-deps && npm cache clean --force

# Etapa de desarrollo
FROM base AS development
COPY . .
# Generar el cliente de Prisma
RUN npx prisma generate
RUN npm run build

# Etapa de producción
FROM base AS production

# Crear usuario no-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

# Copiar archivos de producción
COPY --from=development --chown=nestjs:nodejs /usr/src/app/dist ./dist
COPY --from=development --chown=nestjs:nodejs /usr/src/app/node_modules ./node_modules
# Copiar el cliente de Prisma generado
COPY --from=development --chown=nestjs:nodejs /usr/src/app/node_modules/.prisma ./node_modules/.prisma

# Cambiar al usuario no-root
USER nestjs

# Exponer puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["dumb-init", "node", "dist/main.js"]