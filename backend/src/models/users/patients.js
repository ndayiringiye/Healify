import mongoose from 'mongoose';
const patientSchema = new mongoose.Schema({
  patientId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  phone: { type: String, required: true },
  address: String,

  registeredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  currentStatus: {
    type: String,
    enum: ['under_consultant', 'with_nurse', 'with_doctor', 'referred_out', 'discharged'],
    default: 'under_consultant'
  },

  currentHandler: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  referredToHospital: {
    name: String,
    reason: String,
    referralDate: Date
  }
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;