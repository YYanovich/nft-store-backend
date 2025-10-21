import mongoose, { Schema, Document } from "mongoose";

export interface INFT extends Document {
  name: string;
  description: string;
  price: number;
  img: string;
}

const NFTSchema = new Schema<INFT>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<INFT>("NFT", NFTSchema);
