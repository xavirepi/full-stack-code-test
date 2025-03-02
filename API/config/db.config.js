const mongoose = require('mongoose');
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Soamee-test';

async function connect() {
  if (process.env.NODE_ENV === 'test') {
    const mongoServer = new MongoMemoryServer();
    MONGODB_URI = await mongoServer.getUri();
  }

  mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.info(`Successfully connected to the database ${MONGODB_URI}`))
    .catch(error => {
      console.error(`An error ocurred trying to connect to de database ${MONGODB_URI}`, error)
      process.exit(0) // Process exit with success (https://nodejs.org/api/process.html#process_process_exit_code)
    });
  
  process.on('SIGNINT', function() {
    mongoose.connection.close(function () {
      console.log('Mongoose disconnected on app termination')
      process.exit(0)
    });
  });

}

connect();