
FROM node:23-slim

# set working directory
WORKDIR /app

# copies local files to the docker container
COPY . . 

# work around npm optional dependencies bug
RUN rm -rf package-lock.json

RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["npm", "start"]