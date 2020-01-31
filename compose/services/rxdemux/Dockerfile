FROM blockmatic-node-dev-wait:latest

# # Install app dependencies
COPY package*.json ./
RUN yarn --ignore-optional --frozen-lockfile install

# Bundle app source
COPY . .
