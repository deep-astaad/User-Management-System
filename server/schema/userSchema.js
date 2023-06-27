import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  phone: String
});

// userSchema.pre('save', async function (next) {
//   if (this.isNew) {
//     const doc = await Counter.findOneAndUpdate(
//       { enrollment: 'user' },
//       { $inc: { seq: 1 } },
//       { new: true, upsert: true }
//     ).exec();

//     this.enrollment = doc.seq;
//   }

//   next();
// });

const User = mongoose.model('User', userSchema);

export default User;