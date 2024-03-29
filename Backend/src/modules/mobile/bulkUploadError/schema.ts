import mongoose, { Schema } from 'mongoose';
import IBulkError from './interface';

const bulkErrorSchema: Schema<IBulkError> = new mongoose.Schema(
    {
        totalEntries: { type: Number, required: true },
        errorDetails: { type: Object, required: true },
        session_id: { type: String, required: true },
    },
    { timestamps: true },
);

const BulkErrorDetail = mongoose.model<IBulkError>(
    'BulkErrorDetail',
    bulkErrorSchema,
);

export default BulkErrorDetail;
