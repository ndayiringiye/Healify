import mongoose from 'mongoose';
const patientFlowSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  consultant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  diagnosis: String,
  initialNotes: String,

  assignedToNurse: {
    nurse: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    assignedDate: Date,
    notes: String
  },

  assignedToDoctor: {
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    assignedDate: Date,
    notes: String
  },

  referredOut: {
    hospitalName: String,
    reason: String,
    referralDate: Date,
    referredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },

  status: {
    type: String,
    enum: ['active', 'completed', 'referred'],
    default: 'active'
  }
}, { timestamps: true });

const PatientFlow = mongoose.model('PatientFlow', patientFlowSchema);
export default PatientFlow;