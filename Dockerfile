# Use a imagem base do Node.js
FROM node:16.20.0-alpine3.18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm ci

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Execute o comando de build do Next.js
RUN npm run build

# Defina a porta em que a aplicação Next.js será executada
EXPOSE 3000

# Execute o comando para iniciar a aplicação Next.js
CMD ["npm", "start"]
