# Etapa de build
FROM node:20-bullseye AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build  # vai gerar em /app/out

# Etapa de produção com nginx
FROM nginx:stable-alpine AS runner
WORKDIR /usr/share/nginx/html

# Limpa o html padrão
RUN rm -rf ./*

# Copia os arquivos exportados do Next
COPY --from=build /app/out ./

# Copia a config customizada do nginx
# Copia e sobrescreve o default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -f /etc/nginx/conf.d/*default.conf.default

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
