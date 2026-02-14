# STAGE 1: Build Stage
FROM node:22-alpine AS build-stage

WORKDIR /app

# Copy dependency files
COPY package*.json ./


RUN npm install --legacy-peer-deps


COPY . .

RUN npm run build

# STAGE 2: Production Stage
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]





