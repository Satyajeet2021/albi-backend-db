const mongoose = require("mongoose");
const User = require("../modal/userModal");
const XlsData = require("../modal/XLS");
const vendorStockModel = require("../modal/vendorStockModel");
const vendorDescriptionModel = require("../modal/vendorDescriptionModal");
const Stock = require("../modal/stockModal");
var excelToJson = require('convert-excel-to-json');
const Description = require("../modal/descriptionModal");
const VendorImageModel = require("../modal/vendorImageModel");
const bcrypt = require("bcrypt");
const path = require("path");
const jwt = require("jsonwebtoken");
const filePath ="../vendorUploads";
const readXlsxFile = require("read-excel-file/node");
const xls=require("xlsx")
const csv = require("csvtojson");
const {responseError,responseSuccess} = require("../helper/Status");

exports.BusinessReg=(req,res)=>{
	console.log(req.body)
	const {fname,lname,username,email,businessName,businessNumber,businessType,phoneNumber,address,city,dateOfBirth,gender,password} = req.body;

//const {fname,lname,username,email,password,role,otp} = req.body;

    User.findOne({email:email}).exec(async(err,data)=>{
    	
    	if(data){
    		return responseError(res,201,14);
    	}
    	const hashPassword =  await bcrypt.hash(password,10);
        const role = "Vendor";
        const otp = Math.floor(100000+Math.random()*900000);
    	const userData =new User({
    		fname,lname,username,email,businessName,businessNumber,businessType,role,phoneNumber,address,city,dateOfBirth,gender,password,otp
    	});
        
    	userData.save((err,dt)=>{
            
    		if(err){
                console.log(err);
    			return responseError(res,201,4);
    		}
    		if(dt){     		
                const token = jwt.sign({_id:dt._id,role:dt.role},process.env.port,{expiresIn:"1d"})
    			res.cookie("token",token,{expiresIn:"1d"})
                const {_id,fname,lname,email,username,role,fullname} = dt;
    			const userDetail = {token,user:{_id,fname,lname,email,username,role}}; 
    			return responseSuccess(res,200,userDetail);
    		}
    	})

    })
}


exports.stock=()=>{
    Stock.save((err,data)=>{
        return res.status(200).json(data);
    })
}

exports.description=(req,res)=>{
 var q = Description.find().sort({created_at: -1}).limit(25);
    q.exec(function(err, property) {
        if (err) res.send(err);
        return res.status(200).json(property);
    });
 
}

exports.getVendor=(req,res)=>{
    User.find({role:"Vendor"},(err,data)=>{
        if(err){
            return res.status(201).json(err)
        }if(data){
            return res.status(200).json(data);
        }
    })
}
exports.statusUpdate=(req,res)=>{
    const {id,status} = req.body;
    console.log(id);
    const objectUserId = mongoose.Types.ObjectId(id); 
    User.findOneAndUpdate({_id:objectUserId},{status:status},(err,data)=>{
         
        if(err){return res.status(201).json(err)}
        if(data){return res.status(200).json(data)}    
    })
}

exports.vendorDelete=(req,res)=>{
    const {id} = req.body;
    console.log(id);
    const objectUserId = mongoose.Types.ObjectId(id); 
    User.deleteOne({_id:objectUserId},(err,data)=>{
         
        if(err){return res.status(201).json(err)}
        if(data){return res.status(200).json(data)}    
    })
}
exports.vendorEdit=(req,res)=>{
    const {id} = req.body;
    console.log(id);
    const objectUserId = mongoose.Types.ObjectId(id); 
    User.findOne({_id:objectUserId},(err,data)=>{
         
        if(err){return res.status(201).json(err)}
        if(data){return res.status(200).json(data)}    
    })
}
exports.updateStatus=(req,res)=>{
    const {id,fname,lname,businessName,businessNumber,businessType,email,phoneNumber,address,city} = req.body;
    const updateData={fname,lname,businessName,businessNumber,businessType,email,phoneNumber,address,city}
    console.log(id);
    const objectUserId = mongoose.Types.ObjectId(id); 
    User.findOneAndUpdate({_id:objectUserId},{fname,lname,businessName,businessNumber,businessType,email,phoneNumber,address,city},(err,data)=>{
         
        if(err){return res.status(201).json(err)}
        if(data){return res.status(200).json(data)}    
    })
}

exports.vendorDescription=(req,res)=>{ 
 csv()  
.fromFile(req.file.path)  
.then((jsonObj)=>{   
var uploadBy = {email:req.body.email,role:req.body.role};
 console.log(uploadBy)
 var csvValue = jsonObj.map(o => Object.assign({}, uploadBy, o));
 console.log(csvValue);
vendorDescriptionModel.insertMany(csvValue,(err,data)=>{  
if(err){  
console.log(err);  
}
return res.status(200).json(data)
}); 

});  

}
exports.vendorStockCsv=(req,res)=>{ 
 csv()  
.fromFile(req.file.path)  
.then((jsonObj)=>{   
var uploadBy = {email:req.body.email,role:req.body.role};
 // var csvValue = jsonObj.map(o => Object.assign({}, uploadBy, o));
 var csvValue1 = jsonObj.map((o) => {

     const split_string = o.pic.split(",")
     // const split_string = [{"name":"abc"}];
    return(
 Object.assign({}, jsonObj,uploadBy, { pic: split_string,Item_Full_Code:o.Item_Full_Code })
    );
 });

vendorStockModel.insertMany(csvValue1,(err,data)=>{  
if(err){  
console.log(err);  
}
return res.status(200).json(data)
}); 

});  

}
 


exports.getVendorProduct=(req,res)=>{
    const {email} = req.body;
    console.log(email)
    var perPage = 10
    // page = Math.max(0, req.params.page)
    page = Math.max(0,1)

// XlsData.findOne({email:email})
//     .select('description')
//     .limit(perPage)
//     .skip(perPage * page)
//     .sort({
//         name: 'asc'
//     })
//     .exec(function(err, events) {
//         XlsData.count().exec(function(err, count) {
//             res.render('events', {
//                 events: events,
//                 page: page,
//                 pages: count / perPage
//             })
//         })
//     })

  // XlsData.find({email:email}).exec((err,dt)=>{
  //   dt[0].description.forEach(desId=>{
  //       console.log(desId.Item_Full_Code)
  //         XlsData.find({email:email}).exec((err,sdt)=>{
  //           dt[0].stock.forEach(stkId=>{
  //               if(stkId.Item_Full_Code===desId.Item_Full_Code){
  //                   console.log("matched");
  //               }
  //           })
  //         })
  //   })
  // })
 


 
    XlsData.find({email:email}).exec((err,data)=>{
        if(err){return res.status(201).json({msg:"Something Went Wrong"})}
            
            if(data){
console.log(data[0].description.length)
// function paginator(items, current_page, per_page_items) {
    let page =  1,
    per_page =  10,
    offset = (page - 1) * per_page,

    paginatedItems = data[0].description.slice(offset).slice(0, 2),
    // console.log(paginatedItems)
    total_pages = Math.ceil(data[0].description.length / per_page);
    console.log(total_pages)
    return res.status(200).json({
        page: page,
        per_page: per_page,
        pre_page: page - 1 ? page - 1 : null,
        next_page: (total_pages > page) ? page + 1 : null,
        total: data[0].description.length,
        total_pages: total_pages,
        data: paginatedItems
    });
// }


            }
    })

}


exports.vendorProductList=(req,res)=>{
    const {email} = req.body;
    console.log(email)
    vendorDescriptionModel.find({email:email},(err,data)=>{
        if(err){return res.status(201).json({msg:"Something went wrong"})}
        if(data){return res.status(201).json(data)}
    })
}

exports.vendorProductListJoin=(req,res)=>{
    const {email} = req.body;
    
    const agentJoin=vendorDescriptionModel.aggregate([
       {
        $lookup: {
          from: "vendorStocks",
          localField: "email",
          foreignField: "email",
          as: "other",
         },
       },
     { $project: { _id: false} },
     {$unwind: "$other"},
  ]);
    console.log(agentJoin)
  agentJoin.exec((err,data)=>{
        if(err){
            return res.status(201).json(err);
        }
        if(data){
            return res.status(200).json(data);
        }
    });
}


 exports.getVendorProductById=(req,res)=>{
    const {email,role} = req.body;
    const agentJoin=vendorDescriptionModel.aggregate([
       
        {$match : {email : email,role:role}},
       { $lookup: {
          from: "vendorstocks",
          localField: "Item_Full_Code",
          foreignField: "Item_Full_Code",
          as: "stocks",
         },
       },
     { $project: {"stocks.email":false} },
     {$unwind: "$stocks"},
  ]);
  agentJoin.exec((err,data)=>{
        if(err){
            return res.status(201).json(err);
        }
        if(data.length){
            return res.status(200).json(data);
        } 
    });
 }


 exports.productdetail=(req,res)=>{
    console.log(req.body)
     const {email,role,productId} = req.body;
    const agentJoin=vendorDescriptionModel.aggregate([
       
        {$match : {email : email,role:role,Item_Full_Code:productId}},
       { $lookup: {
          from: "vendorstocks",
          localField: "Item_Full_Code",
          foreignField: "Item_Full_Code",
          as: "stocks",
         },
       },
     { $project: {"stocks.email":false} },
     {$unwind: "$stocks"},
  ]);
  agentJoin.exec((err,data)=>{
        if(err){
            return res.status(201).json(err);
        }
        if(data){
            return res.status(200).json(data);
        }
    });
 }


 exports.updatedescription=(req,res)=>{
    const {_id} = req.body;

    vendorDescriptionModel.updateMany({_id:_id},{$set:req.body},{multi:true}).exec((err,data)=>{
        if(err){
            return res.status(201).json(err);
        }
        if(data){
            console.log("success");
            return res.status(200).json({msg:"Update Successfull"});
        }
    })
 }


 exports.deleteproductlist=(req,res)=>{
    const {descriptionId,stockId} = req.body
    vendorDescriptionModel.findOneAndDelete({Item_Full_Code:descriptionId},(err,data)=>{
        if(err){return res.status(201).json(err)}
        if(data){
            vendorStockModel.findOneAndDelete({Item_Full_Code:stockId},(er,dt)=>{
                if(er){return res.status(201).json(err)}
                if(dt){return res.status(200).json({msg:"Product Deleted"})}
            })
        }
    })
 }
 

 exports.multiimage=(req,res)=>{
  const {vendorEmail} = req.body
  const reqFiles = [];

    const url = req.protocol + '://' + req.get('host')
    console.log(url)

    for (var i = 0; i < req.files.length; i++) {
      console.log(req.files[i].filename)
        reqFiles.push(url + '/vendorImages/' + req.files[i].filename)
    }
  
    const imageModalData = VendorImageModel({
        vendorEmail:vendorEmail,
        vendorImage:reqFiles
    })

    imageModalData.save((err,data)=>{
        if(err){
            return res.status(201).json({err});
        }
        if(data){
            return res.status(200).json({msg:"Image Upload successfull"});
        }
    });
 }


exports.getVendorImagesById=(req,res)=>{
    const {email} = req.body;

    VendorImageModel.find({vendorEmail:email}).exec((err,data)=>{
        if(err){return res.status(201).json(err)}
        if(data){return res.status(200).json(data)}
    })
}
exports.imagedetails=(req,res)=>{
     const {email,productId} = req.body;

    VendorImageModel.findOne({_id:productId,vendorEmail:email}).exec((err,data)=>{
        if(err){return res.status(201).json(err)}
        if(data){return res.status(200).json(data)}
    })
}


 exports.deleteimagelist=(req,res)=>{
    const {email,id} = req.body
    VendorImageModel.findOneAndDelete({_id:id,vendorEmail:email},(err,data)=>{
        if(err){return res.status(201).json(err)}
        if(data){ 
                if(data){return res.status(200).json({msg:"Image Deleted"})}
        }
    })
 }
 exports.deletesingleimagelist=(req,res)=>{
    const {email,productId,imageKey,imgName} = req.body
    var arrIndex = `vendorImage.${imageKey}`;
    // const aa= {$upset: {[arrIndex]:imgName}};
 
    // console.log(aa)
    VendorImageModel.findOneAndUpdate({_id:productId}, {$unset: {[arrIndex]:imgName}},{multi:true}).exec((err,data)=>{
    return res.status(200).json("success");
})


 }

 exports.addproductmanual=(req,res)=>{
    const data = req.body;
    console.log(data)
    const reqFiles = [];

    const url = req.protocol + '://' + req.get('host')
    console.log(url)

    for (var i = 0; i < req.files.length; i++) {
      console.log(req.files[i].filename)
        reqFiles.push(url + '/vendorManualImages/' + req.files[i].filename)
    }
    const newProductManualStore = vendorDescriptionModel({
        email:req.body.email,
        role:req.body.role,
        Store_Code:req.body.Store_Code,
        Store_Name:req.body.Store_Name,
        Item_Full_Code:req.body.Item_Full_Code,
        Item_Code:req.body.Item_Code,
        Color_Code:req.body.Color_Code,
        Season:req.body.Season,
        Item_Color_Value:req.body.Item_Color_Value,
        Item_description_AL:req.body.Item_description_AL,
        Item_description_EN:req.body.Item_description_EN,
        Item_Gender_Value:req.body.Item_Gender_Value,
        Item_Category_Value:req.body.Item_Category_Value,
        Item_Composition_Value_EN:req.body.Item_Composition_Value_EN,
        Item_Dimension_Value:req.body.Item_Dimension_Value,
        Item_Collection_Code_COL:req.body.Item_Collection_Code_COL,
        Item_Collection_Value:req.body.Item_Collection_Value,
        Item_Order_Code_ORD:req.body.Item_Order_Code_ORD,
        Item_Order_Value:req.body.Item_Order_Value,
        Item_Producer_Value:req.body.Item_Producer_Value,
        Item_Importer_Value:req.body.Item_Importer_Value,
        Item_Origine_Value:req.body.Item_Origine_Value,
 
    })

    const vendorStockData = vendorStockModel({
        email:req.body.email,
        role:req.body.role,
        Item_Full_Code:req.body.Item_Full_Code, 
        pic:reqFiles
    })

    newProductManualStore.save((err,data)=>{
        if(err){return res.status(201).json(err)}
        if(data){
            vendorStockData.save((vndrErr,vndrData)=>{
                if(vndrErr){return res.status(201).json(vndrErr)}
                if(vndrData){
                    return res.status(200).json(vndrData)
                }
            })
            }
    })
 }


 exports.getById=(req,res)=>{ 
    const objectUserId = mongoose.Types.ObjectId(req.body.id); 
    User.findOne({_id:objectUserId},(err,data)=>{
        if(err){
            return res.status(201).json(err)
        }if(data){
            return res.status(200).json(data);
        }
    })
}


exports.vendorAdd=(req,res)=>{
    const {id} = req.body;
    console.log("req.body ===== ", req.body);
    return false;
    
    console.log(id);
    const objectUserId = mongoose.Types.ObjectId(id); 
    User.findOne({_id:objectUserId},(err,data)=>{
         
        if(err){return res.status(201).json(err)}
        if(data){return res.status(200).json(data)}    
    })
}