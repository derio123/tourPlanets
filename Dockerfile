# Etapa 1: build da aplicação Angular
FROM node:16-alpine AS build

# Define diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Build da aplicação Angular
RUN npm run build --prod

# Etapa 2: servidor Nginx para servir a aplicação
FROM nginx:alpine

# Remove configuração padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos compilados do Angular para o nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configuração customizada do Nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando padrão do container
CMD ["nginx", "-g", "daemon off;"]
