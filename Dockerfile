# Stage 0 - Build React
FROM node:20-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

# Builds por idioma (PUBLIC_URL=. para assets relativos)
RUN npm run fix-normalize-css-unit && \
  PUBLIC_URL=. REACT_APP_LOCALE=de yarn react-scripts build && \
  cp -r build build_de && rm -rf build

RUN npm run fix-normalize-css-unit && \
  PUBLIC_URL=. REACT_APP_LOCALE=en yarn react-scripts build && \
  cp -r build build_en && rm -rf build

RUN npm run fix-normalize-css-unit && \
  PUBLIC_URL=. REACT_APP_LOCALE=it yarn react-scripts build && \
  cp -r build build_it && rm -rf build

# Build padrão (PT) fica na raiz
RUN npm run fix-normalize-css-unit && \
  PUBLIC_URL=. yarn react-scripts build

# Reorganiza pastas:
# - move de/en/it para subpastas
# - cria /pt e copia tudo da raiz exceto as pastas de idiomas
# - cria o alias cv.html para o PT
RUN mv build_de build/de \
  && mv build_en build/en \
  && mv build_it build/it \
  && mkdir -p build/pt \
  && /bin/sh -c 'for p in build/*; do n=$(basename "$p"); case "$n" in pt|en|de|it) ;; *) cp -r "$p" build/pt/ ;; esac; done' \
  && cp build/index.html build/pt/cv.html

# Stage 1 - Nginx
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
