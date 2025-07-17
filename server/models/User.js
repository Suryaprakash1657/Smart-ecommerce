import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';  
// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});
// implement bcrypt for password hashing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
// Method to compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create the User model
const User = mongoose.model('User', userSchema);
export default User;
