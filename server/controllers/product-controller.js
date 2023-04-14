import Product from "../model/product-schema.js";


export const addProduct= async(req,res)=>{
  try{
    let newProduct=new Product(req.body);
      newProduct=await newProduct.save();
      res.status(201).json({newProduct});

  }
  catch(error){
    console.log("error while storing new product ", error.message);
      res.status(500).json({msg:error.message});
  }
}

export const  getAllProducts=async(req, res)=>{
    try{
            let result=await Product.find();
                res.status(200).json(result);
    }
    catch(error){
        console.log("error while getting all products ", error.message);
        res.status(500).json({msg:error.message});
    }
}


export const getProduct= async(req,res)=>{
    try{
         console.log("param is ", req.params.key)
        let result= await Product.find({
            "$or":[
              {
                  price:{$regex:req.params.key}
              }, 
              {
                  category:{$regex:req.params.key}
              },
            ]
      });
      console.log("res is ",result);
    }
    catch(error){
        console.log("Error in filterring product ", error.message);
        res.status(500).json({msg:error.message});
    }
}
export const updateProduct=async(req,res)=>{
  try{
    console.log("req id is ", req.params.id)
    let result= await Product.updateOne(
      {_id:req.params.id},
      {
          $set:req.body
      }
          )
          res.status(200).json(result)
  }
  catch(error){
    console.log("error while updating product", error.message);
    res.status(500).json({msg:error.message});
  }
}

