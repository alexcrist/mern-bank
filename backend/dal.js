const { MongoClient } = require('mongodb');

// Database: 'full-stack-bank'
//   Collections: 
//     * Users
//       {
//         _id: ObjectID('lakjsdf23;l4ijas;lkfdj899sdf23'),
//         name: 'admin',
//         amount: Number
//       }

const connectionUrl = 'mongodb://127.0.0.1:27017';

let mongoClient;

// Connect to Mongo and initialize the DB
const initDB = async () => {
  mongoClient = new MongoClient(
    connectionUrl, 
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    }
  );
  await mongoClient.connect();
  console.log(`Connected to MongoDB at ${connectionUrl}`);
  await initAdminUser();
};

// Look for an admin user. If it doesn't, exist, create it
const initAdminUser = async () => {
  const db = mongoClient.db('full-stack-bank');
  const users = db.collection('users');
  const admin = await users.findOne({ name: 'admin' });
  if (admin === null) {
    await users.insertOne({
      name: 'admin',
      amount: 0
    });
  }
};

// Retrieve the amount on the admin user
const getAmount = async () => {
  const db = mongoClient.db('full-stack-bank');
  const users = db.collection('users');
  const admin = await users.findOne({ name: 'admin' });
  return admin.amount;
};

// Set the amount on the admin user
const setAmount = async (newAmount) => {
  const db = mongoClient.db('full-stack-bank');
  const users = db.collection('users');
  await users.updateOne(
    { name: 'admin' },
    { $set: { amount: newAmount }}
  );
};

module.exports = {
  initDB,
  getAmount,
  setAmount
};