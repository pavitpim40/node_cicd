FROM node:16-alpine

# Path: /app
WORKDIR /app

# Path: /app/package.json
COPY package.json .

# Path: /app
RUN npm install
# RUN npm install pm2 -g

# Path: /app
COPY . .

# Path: /app
CMD [ "npm",  "start"]