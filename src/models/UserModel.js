import { Schema, model } from 'mongoose';
const UserModel = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    phone: { type: Number, required: true },
    access_token: { type: String, require: true },
    refresh_token: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const User = model('User', UserModel);
export default User;
