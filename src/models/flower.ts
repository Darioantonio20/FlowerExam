import { Schema, model } from 'mongoose';

const flowerSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
});

export default model('Flower', flowerSchema);
