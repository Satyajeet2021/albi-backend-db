const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const vendorStockSchema = new mongoose.Schema({
  email:{
    type:String
  },
  role:{
    type:String
  },
  Item_Full_Code:{
    type:String
  },
  foto:{
    type:String
  },
  LNK:{
    type:String
  },
  LNK2:{
    type:String
  },
  FOTO1:{
    type:String
  },
  FOTO2:{
    type:String
  },
  FOTO3:{
    type:String
  },
  FOTO4:{
    type:String
  },
  ITEM:{
    type:String
  },
  FULCODE:{
    type:String
  },
  CAR:{
    type:String
  },
  VLO :{
    type:String
  },
  pic:{
    type:Array
  }

},{timestamps:true})
 

 

module.exports = mongoose.model("vendorstock",vendorStockSchema);