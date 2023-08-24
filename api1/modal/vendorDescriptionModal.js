const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const vendorStockSchema = new mongoose.Schema({
  email:{
    type:String
  },
  role:{
    type:String
  }, 
  Store_Code  :{
    type:String
  },
  Store_Name  :{
    type:String
  },
  Item_Full_Code  :{
    type:String
  },
  Item_Code :{
    type:String
  },
  Color_Code  :{
    type:String
  },
  Season  :{
    type:String
  },
  Item_Color_Value  :{
    type:String
  },
  Item_description_AL :{
    type:String
  },
  Item_description_EN :{
    type:String
  },
  Item_Gender_Value :{
    type:String
  },
  Item_Category_Value :{
    type:String
  },
  Item_Composition_Value_EN :{
    type:String
  },
  Item_Dimension_Value  :{
    type:String
  },
  Item_Collection_Code_COL  :{
    type:String
  },
  Item_Collection_Value :{
    type:String
  },
  Item_Order_Code_ORD :{
    type:String
  },
  Item_Order_Value  :{
    type:String
  },
  Item_Producer_Value :{
    type:String
  },
  Item_Importer_Value :{
    type:String
  },
  Item_Origine_Value  :{
    type:String
  }


},{timestamps:true})
 

 

module.exports = mongoose.model("vendordescription",vendorStockSchema);