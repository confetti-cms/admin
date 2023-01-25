FROM node:19 as confetti-admin

# Create app directory
WORKDIR /usr/src/app

# Copy config files and install app dependencies
COPY *.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "npm", "run", "dev" ]
