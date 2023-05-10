import mongoose from "mongoose";

interface IUser {
  email: string;
  password: string;
}

interface IUserDoc extends mongoose.Document {
  email: string;
  password: string;
}

interface IUserModel extends mongoose.Model<IUserDoc> {
  build(user: IUser): IUserDoc;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      }
    }
  }
);

userSchema.statics.build = (user: IUser) => {
  return new User(user);
};

export const User = mongoose.model<IUserDoc, IUserModel>("User", userSchema);
