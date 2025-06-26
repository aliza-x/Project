const products = require("../model/productmodels")

function getAllProuducts (req,res){
    products.find()
    .then((product)=>{
        res.status(202).json({
            status : true ,
             data : products 

    })
    })
}

async function deleteProduct (req, res)  {
    try {
      const deletedItem = await products.findByIdAndDelete(req.params.id);
      if (!deletedItem) {
        return res.status(404).json({ message: 'product not found' });
      }
      res.status(200).json({ message: 'product deleted successfully',
        data: deletedItem
       });
    } catch (err) {
      res.status(500).json({ message: 'error' });
    }
  } ;
  function createProduct (req,res){
    const newItem = new products(req.body) ;
    const saved= newItem.save()
    .then((savedProduct)=>{
      res.status(209).json({
        message: "saved",
        savedProduct: savedProduct
      })
    })
    
    .catch((err)=>{
      res.status(409).json({
        message: 'error'
      })
    })

  }


  

  module.exports= {
    getAllProuducts:getAllProuducts,
    deleteProduct:deleteProduct,
    createProduct: this.createProduct
  }