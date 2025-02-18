// filepath: /C:/Users/mohamed aidaruus/Desktop/SakanSomalia/Backend/models/project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['pending', 'done'], default: 'pending' },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);