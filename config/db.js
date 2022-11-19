const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewURLParser: true,
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.error(err.message);
    // Exit process if failed
    process.exit(1);
  }
};

module.exports = connectDB;
