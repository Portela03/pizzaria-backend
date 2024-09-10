# Use a imagem Node.js como base
FROM node:18

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do Node.js
RUN npm install

# Copia o restante do código-fonte para o diretório de trabalho
COPY . .

# Instala o Prisma e gera o cliente
RUN npm install prisma --save-dev
RUN npx prisma generate

# Compila o código TypeScript
RUN npm run build

# Exponha a porta em que o aplicativo estará rodando
EXPOSE 3000

# Define o comando para iniciar o aplicativo
CMD [ "npm", "start" ]
