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

async function createProduct(req, res){
  try{
    const newProduct = await products.create(req.body)

    res.status(202).json({message:'successful',
      data: newProduct
    })
  }
catch(err){
res.status(300).json({
  message: 'error'})}
}
  

  module.exports= {
    getAllProuducts:getAllProuducts,
    deleteProduct:deleteProduct,
    createProduct:createProduct 
   
  }