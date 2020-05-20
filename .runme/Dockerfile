FROM node:12.16.2
WORKDIR /app
COPY . .
RUN npm install && npm run build
ENTRYPOINT npm run dev
