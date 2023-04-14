import RentalProvider from "../model/rentalProvider-schema.js";



export const addRentalProvider=async(req,res)=>{
    try{
        let newProvider=new RentalProvider(req.body);
         newProvider=await newProvider.save();
         res.status(201).json(newProvider);

    }
    catch(error){
        console.log("error in creating new renatl provider ", error.message);
        res.status(500).json({msg:error.message});
    }
}


export const getAllProductProvider=async(req, res)=>{
    try{
        let result =await RentalProvider.find();

        res.status(200).json(result)

    }
    catch(error){
        console.log("error in getting all rental provider ", error.message);
        res.status(500).json({msg:error.message});
    }
}
    
export const getProvider=async(req, res)=>{
    try{
        let result =await RentalProvider.find({userId:req.params.id});
            console.log("prvider is ", result);
        res.status(200).json(result)

    }
    catch(error){
        console.log("error in getting all rental provider ", error.message);
        res.status(500).json({msg:error.message});
    }
}
