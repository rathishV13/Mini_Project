const mongoose = require("mongoose")
const { MongoMemoryServer }=  require("mongodb-memory-server");
const { MongoClient } = require("mongodb");

// let connection = MongoClient;
// let mongoServer = MongoMemoryServer;
const mongoServer = new MongoMemoryServer()

const connect = async () => {
  await mongoServer.start();
  const mongodb = mongoServer.getUri()
  await MongoClient.connect(mongodb, {});
};

const close = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
};

const clear = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
};

module.exports = { connect, close, clear };