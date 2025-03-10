
FROM node:23

# set working directory
WORKDIR /app/client

# copies local files to the docker container
COPY . . 

RUN npm ci --include=optional

# work around npm optional dependencies bug
RUN rm -rf package-lock.json

RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["npm", "start"]