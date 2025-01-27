import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

     createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      }
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;