const express = require('express')
const productController = require("../controllers/product")
const router = express.Router()

router
.route('/')
.get(productController.getAllProuducts)
.post(productController.createProduct)
router
.route("/:id")
.get(productController.getAllProuducts)
.delete("/:id",productController.deleteProduct)

module.export = router ;
