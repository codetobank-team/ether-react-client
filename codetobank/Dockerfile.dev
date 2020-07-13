FROM node:12-alpine
# Define working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn

# copy source and start script
COPY . .

# expose port
EXPOSE 3000

# execute start script
CMD ["yarn", "start"]
