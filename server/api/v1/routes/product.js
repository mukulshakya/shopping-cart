const express = require("express");
const router = new express.Router();
const { product } = require("../controllers");
const auth = require("../../../middleware/auth");
const validate = require("../../../middleware/validator");
const {
  schemas: { cartSchema },
} = require("../../../validations");

router
  .route("/products")
  // .post(auth, validate({ body: bookSchema }), product.createBook)
  .get(product.getAllProducts);
// .put(auth, validate({ body: updateBookSchema }), product.updateAbook)
// .delete(auth, validate({ query: validateObjectId }), product.deleteAbook);

router.route("/categories").get(product.getAllCategories);

// router
//   .route("/cart")
//   .post(validate({ body: cartSchema }), product.addToCart)
//   .get(product.getCart);

module.exports = router;
