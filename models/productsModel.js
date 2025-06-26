const mongoose = require("../view/server")

const productSchema = new mongoose.Schema({
    name:{
        type: String ,
         required: true
    },
    price:{
        type: double ,
        required: true
    }
})
const product = mongoose.model('products', productSchema);

module.exports = product;
