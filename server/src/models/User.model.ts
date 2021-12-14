import { model, Schema } from 'mongoose';
import { IUser } from '../types/types';

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 255,
      trim: true,
      lowercase: true,
      validate: {
        validator: (email: string) => {
          // return email regex
          const emailRegex = new RegExp('/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/');
          return emailRegex.test(email);
        },
      },
    },
    username: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
);

const User = model('User', UserSchema);

export default User;
