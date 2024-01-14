// database.js

const mongoose = require('mongoose');

// Replace 'your-database-name' with your actual database name
const connectionString = 'mongodb://localhost:27017/url-shortner';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Connection closed due to app termination');
    process.exit(0);
  });
});

module.exports = mongoose;
