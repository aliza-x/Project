const express = require('express')
const productController = require("../controllers/productController")
const router = express.Router()

router
.route('/')
.get(productController.getAllProuducts)
.post(productController.createProduct)
router
.route("/:id")
.delete(productController.deleteProduct)

module.exports = router ;
