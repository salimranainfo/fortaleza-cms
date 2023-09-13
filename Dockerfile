FROM node:16.20

# Create app directory

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN yarn install

# Bundle app source
COPY . .

ENV NODE_ENV=production
ENV PORT=1337
ENV HOST=0.0.0.0

RUN yarn build

EXPOSE 1337

CMD [ "yarn", "start" ]