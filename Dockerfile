FROM node:16-alpine

# Path: /app
WORKDIR /app

# Path: /app/package.json
COPY package.json .

# Path: /app
RUN npm install

# Path: /app
COPY . .

# Path: /app
CMD [ "npm",  "start"]