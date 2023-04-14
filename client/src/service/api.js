

import axios from 'axios'

const URL="http://localhost:8000"
// const URL="https://rentalapi2.onrender.com"



export const authenticateSignup= async(data)=>{

  try{
    // console.log("data is ", data)
     const res= await axios.post(`${URL}/signup`, data);
      console.log("response from backend is ",res);
      return res;
  }
  catch(error){
    console.log("Error while calling signup api ", error.message)
  }

}
export const verifyUser= async(data)=>{
     try{
       const res= await axios.get(`${URL}/verifyUser/${data.email}`);
       return res;
     }
     catch(error){
      console.log("Error while verifying user api ", error.message)
     }
}
export const authenticateLogin= async(data)=>{
  console.log("login data is ",data);
         try{
          const res=await axios.post(`${URL}/login`, data);
            console.log("Response from login is ",res);
            return res;

         }
         catch(error){
          console.log("Error while calling Login api ", error.message);
         }
}

export const verifyEmail= async(data)=>{
       
          try{
            const res=await axios.post(`${URL}/email`, data);

            return res;
          }
          catch(error){
            console.log("Error while email verification ",error.message)
          }
}
export const updatePassword=async(data)=>{
  console.log("data is ", data);
     try{

      const res=await axios.put(`${URL}/updatePassword`, data);
      return res;
     }
     catch(error){
        console.log("error in updating password ",error.message);
     }
} 


//workers API 
export const workerRegister= async( data)=>{
    try{
      console.log("data to store is ", data);
      const res=await axios.post(`${URL}/worker`, data);
      console.log('response for worker from backend ',res);
      return res;
    }
    catch(error){
      console.log("error is worker registeration ", error.message);
    }
}

//all workers api
export const getAllWorkers=async()=>{
    try{
      const res=await axios.get(`${URL}/getAllWorkers`);
      console.log("Result from  backend is ", res);
      return res;
    }
    catch(error){
      console.log("Error while getting all worksers ", error.messsage);
    }
}
export const getWorkerData=async (id)=>{
    console.log("id is ", id);
    try{
      let res=await axios.get(`${URL}/getWorker/${id}`)
            return res.data
      
    }
    catch(error){
    }
}
export const filterWorker=async(data)=>{
  try{
     let result= await axios.get(`${URL}/filterWorker/${data.role}/${data.address}/${data.price}/${data.experience}`);
      console.log("data from back is ",result)
        // result=await result.json();
     return result;
        
  }
  catch(error){
    console.log("Error while filtering product ", error.message);
  }
}

//filterproduct api
export const filterProduct=async(data)=>{
  try{
      let result= await axios.get(`${URL}/filterProduct/${data.category}/${data.company}/${data.price}`);
      console.log("data from back is ",result)
        // result=await result.json();
      return result;
  }
  catch(error){
    console.log("Error while filtering product ", error.message);
  }
}




//contractor API
export const contractorRegister= async(data)=>{
      try{
          const res=await axios.post(`${URL}/contractor`, data);
          return res;
      }
      catch(error){
        console.log("error while contractor registter ", error.message);
      }
}

export const getAllContractors=async()=>{
  try{
     const res=await axios.get(`${URL}/getAllContractors`); 
    //  console.log("result from backend ", res);
     return res;
  }
  catch(error){
    console.log("Error after fetching data from backend ", error.message);
  }
}


//const rentalProvider
export const rentalProvider=async(data)=>{
  try{
    console.log("data is ", data);
    let  result=await axios.post(`${URL}/registerRentalProvider`,data);
    return result;
  }
  catch(error){
    console.log("error while registering renatl provider ", error.message);
  }
}
export const getProductProvider=async(id)=>{
  try{
     console.log("id is ", id)
    let result=await axios.get(`${URL}/productProvider/${id}`)
    console.log("erre -- ", result.data)
    //  result=await result.json();
      if(result){
        return result.data
      }
      else{
        return {"error":'Not any products'};
      }
  }
  catch(error){
    console.log("error while getting a provider", error.message);
  }
}
export const getAllProductProvider= async()=>{
      try{
        const result=await axios.get(`${URL}/getAllProductProvider`);
          return result;

      }
      catch(error){
        console.log("error in getting product provider result ", error.message);

      }
}

export const updateRentalProvider=async(data)=>{
  try{    
 let result= await axios.put(`${URL}/updateRentalProvider/${data._id}`)
 result=await result.json()
  }
  catch(error){
   console.log("error while updating product ", error.message);
  }
}







//api for products
export const addProduct=async(data)=>{
   try{
        const result=await axios.post(`${URL}/addProduct`,data);
        return  result;
   }
   catch(error){
    console.log("error file adding products");
   }
}


export const getAllProducts=async()=>{
  try{
    const result=await axios.get(`${URL}/getProducts`);
     
    if(result){
      return result;
    }
    else{
      return {"error":'Not any products'};
    }
  }
  catch(error){
    console.log("error while getting all products ", error.message);
  }
}


export const getProduct=async(key)=>{
  try{
    let result=await axios.get(`${URL}/getProduct/${key}`)
     result=await result.json();
      if(result){
        return result
      }
      else{
        return {"error":'Not any products'};
      }
  }
  catch(error){
     console.log("error while fetching a product ")
  }
}

export const updateProduct=async(data)=>{
  try{    
 let result= await axios.put(`${URL}/updateProduct/${data._id}`)
 result=await result.json()
  }
  catch(error){
   console.log("error while updating product ", error.message);
  }
}





// router.get("/getProducts", getAllProducts)
// router.get("/getProduct/:key",getProduct);











