FROM node:18-alpine
WORKDIR /app
COPY package.json .
ENV REACT_APP_API_KEY = ${REACT_APP_API_KEY}
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]