# подготовить образ
FROM node:18.16.0-alpine
# установить рабочий каталог
WORKDIR /app
# копировать файлы
COPY ./package.json .
# подтянуть зависимости
RUN npm install
# копировать все содержимое каталога в рабочий каталог
COPY . .
# запустить
CMD ["npm", "run", "dev"]