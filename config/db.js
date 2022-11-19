const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://prasanna:prasannak13@cluster0.gbupujq.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewURLParser: true,
      }
    );
    console.log('MongoDB connected!');
  } catch (err) {
    console.error(err.message);
    // Exit process if failed
    process.exit(1);
  }
};

module.exports = connectDB;
