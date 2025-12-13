import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    // For solo projects, use studentId. For team projects, use teamId and students array.
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false
    },
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
      required: false
    },
    students: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    assignedGuideId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      enum: ['Draft', 'Submitted', 'Approved', 'Rejected', 'In Progress', 'Completed'],
      default: 'Submitted'
    },
    approvalStatus: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending'
    },
    approvalRemarks: {
      type: String
    },
    approvedAt: {
      type: Date
    },
    submittedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
