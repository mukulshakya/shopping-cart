const {
  Types: { ObjectId },
} = require("mongoose");
const db = require("../../../models");

// exports.createBook = async (req, res) => {
//   try {
//     const book = await new db.BookStore(req.body).save();
//     if (!book) return res.error({}, "Error saving book.");

//     return res.success(book, "Book saved successfully.");
//   } catch (e) {
//     console.log({ e });
//     return res.error(e);
//   }
// };

exports.getAllProducts = async (req, res) => {
  try {
    console.log({ query: req.query });

    const { categoryId, productId, search } = req.query;

    const query = {};
    if (categoryId) query.categoryId = ObjectId(categoryId);
    if (productId) query._id = ObjectId(productId);

    const searchQuery = {};
    if (search) {
      const searches = [
        "name",
        "description",
        "category.name",
        "features",
      ].map((key) => ({ [key]: { $regex: search, $options: "i" } }));
      Object.assign(searchQuery, { $or: searches });
    }

    const products = await db.Product.aggregate([
      { $match: { ...query, stockCount: { $gt: 0 } } },
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          images: 1,
          features: 1,
          views: 1,
          sizes: 1,
          name: 1,
          actualPrice: 1,
          discountedPrice: 1,
          description: 1,
          stockCount: 1,
          createdAt: 1,
          updatedAt: 1,
          category: { _id: 1, name: 1, image: 1 },
        },
      },
      { $match: searchQuery },
    ]);
    return res.success(products);
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await db.Category.find({});
    return res.success(categories);
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};

// exports.deleteAbook = async (req, res) => {
//   try {
//     const book = await db.BookStore.findByIdAndRemove(req.query.id);
//     if (!book) return res.error({}, "Error removing book");

//     return res.success(book, "Book removed from store");
//   } catch (e) {
//     console.log({ e });
//     return res.error(e);
//   }
// };

// exports.updateAbook = async (req, res) => {
//   try {
//     const book = await db.BookStore.findByIdAndUpdate(req.body.id, req.body, {
//       new: true,
//     });
//     if (!book) return res.error({}, "Error updating book");

//     return res.success(book, "Book updated");
//   } catch (e) {
//     console.log({ e });
//     return res.error(e);
//   }
// };

exports.addToCart = async (req, res) => {
  try {
    const categories = await new db.Cart()
    return res.success(categories);
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};
