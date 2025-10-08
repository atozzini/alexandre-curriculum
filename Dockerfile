# Stage 0 - Build React
FROM node:20-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

# Builds para cada idioma, sempre rodando o fix antes
RUN npm run fix-normalize-css-unit && REACT_APP_LOCALE=de yarn react-scripts build && cp -r build build_de && rm -rf build
RUN npm run fix-normalize-css-unit && REACT_APP_LOCALE=en yarn react-scripts build && cp -r build build_en && rm -rf build
RUN npm run fix-normalize-css-unit && REACT_APP_LOCALE=it yarn react-scripts build && cp -r build build_it && rm -rf build
RUN npm run fix-normalize-css-unit && yarn react-scripts build   # build padrão (pt)

# Reorganiza pastas
RUN mv build_de build/de \
  && mv build_en build/en \
  && mv build_it build/it

# Stage 1 - Nginx
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
