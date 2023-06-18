import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: String,
  email: String,
  username: String,
  phone: String
});

userSchema.pre('save', async function (next) {
  if (this.isNew) {
    const doc = await Counter.findOneAndUpdate(
      { _id: 'user' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    ).exec();

    this._id = doc.seq;
  }

  next();
});

const User = mongoose.model('User', userSchema);

export default User;