const products = require("../models/productsModel");

async function getAllProuducts(req, res) {
  try {
    const product = await products.find();

    res.json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    })
  }
}

async function deleteProduct(req, res) {
  try {
    const deletedItem = await products.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({
      message: "product deleted successfully",
      data: deletedItem,
    });
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
}

async function createProduct(req, res) {
  try {
    const newProduct = await products.create(req.body);

    res.status(202).json({
      message: "successful",
      data: newProduct,
    });
  } catch (err) {
    res.status(300).json({
      message: "error",
    });
  }
}

module.exports = {
  getAllProuducts: getAllProuducts,
  deleteProduct: deleteProduct,
  createProduct: createProduct,
};
