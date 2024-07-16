import { default as mongoose } from 'mongoose';

const db = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database successfully');
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

export default db;
