FROM node:12

# Create app directory
WORKDIR /opt/application

# Add the wait script to the image
ADD ./utils/wait /wait
RUN chmod +x /wait

# Install nodemon for dev
RUN yarn --ignore-optional global add nodemon typescript ts-node

# Install dev tools
RUN apt-get update && apt-get install jq curl git vim -y

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn --ignore-optional --frozen-lockfile install

# Bundle app source
COPY . .

# nodemon with reloading support for dev
CMD /wait && nodemon -L src/index
