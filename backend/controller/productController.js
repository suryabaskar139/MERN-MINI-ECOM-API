const productModel = require("../models/productModel");

//- Get - Products - /api/v1/products

exports.getProducts = async (req, res, next) => {
  const products = await productModel.find({});
  res.json({
    success: true,
    message: "All Products",
    products,
  });
};

//- Get Single Product - /api/v1/product/:id

exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json({
      success: true,
      message: "Get product",
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: true,
      message: error.message,
    });
  }
};
