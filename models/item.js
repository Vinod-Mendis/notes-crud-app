import mongoose, {Schema} from "mongoose";

const itemSchema = new Schema(
  {
    title: String,
    description: String
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;