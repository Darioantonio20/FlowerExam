import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  flowers: [{ type: Schema.Types.ObjectId, ref: 'Flower', required: true }],
  customerName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model('Order', orderSchema);
