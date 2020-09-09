const {
  Schema,
  model,
  SchemaTypes: { ObjectId },
} = require("mongoose");

const trimmedStr = { type: String, trim: true };

const ProductSchema = new Schema(
  {
    name: trimmedStr,
    categoryId: { type: ObjectId, ref: "categories" },
    actualPrice: Number,
    discountedPrice: Number,
    features: [trimmedStr],
    description: trimmedStr,
    views: { type: Number, default: 0 },
    stockCount: Number,
  },
  { timestamps: true }
);

module.exports = model("products", ProductSchema);
