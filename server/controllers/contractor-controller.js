import Contractor from "../model/contractor-schema.js"
import Jwt  from "jsonwebtoken";


const jwtKey="crew-rental";

export const contractorRegister=async( req, res)=>{
        try{

            console.log("contractor info from frontend ", req.body);
            const newContractor=  new Contractor(req.body);
            await  newContractor.save();

            console.log("new contractor is ", newContractor);
         
            Jwt.sign({newContractor},jwtKey,{expiresIn:"5h"},(err,token)=>{
               return res.status(200).json({newContractor,auth:token});
            })
        }
        catch(error){
                console.log("Error is contractor registeration ", error.message)
                res.status(500).json({message:error.message});
        }
}

export const getAllContractors=async(req, res)=>{
  try{
        const  result=await Contractor.find();
        console.log("Data of all contractor ", result);
        res.status(200).json(result);
  }
  catch(error){
        console.log("Error while getting all contractor ", error.message);
        res.status(500).json({message:error.message});
  }
}









