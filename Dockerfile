# Estágio de Build
FROM node:18-alpine AS builder
WORKDIR /app

# Instala dependências
COPY package*.json ./
RUN npm ci

# Copia arquivos do projeto
COPY . .

# Build da aplicação
RUN npm run build

# Estágio de Produção
FROM node:18-alpine AS runner
WORKDIR /app

# Variáveis de ambiente
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Copia dependências de produção
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

# Copia build e arquivos públicos
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expõe porta e inicia aplicação
EXPOSE 3000
CMD ["npm", "start"]
