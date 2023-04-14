import express from 'express';
import { userSignup,userLogin, verifyEmail, updatePassword, verifyUser } from '../controllers/user-controller.js';
import { workerRegister, getAllWorkers, getWorker , filterWorker} from '../controllers/worker-controller.js';
import { contractorRegister, getAllContractors } from '../controllers/contractor-controller.js';

import { addProduct, getAllProducts , getProduct, updateProduct} from '../controllers/product-controller.js';
import { addRentalProvider, getAllProductProvider , getProvider} from '../controllers/rental-provider-controller.js';
const router=express.Router();




router.get("/verifyUser/:key",verifyUser);
router.post("/signup",userSignup);
router.post("/login",userLogin);
router.post("/email",verifyEmail);
router.put("/updatePassword",updatePassword);

//worker section
router.post("/worker" ,workerRegister);
router.get("/getAllWorkers",getAllWorkers);
// router.post('/upload',upload.single("file"),uploadImage)
// router.get("/file/:fileId", downloadImage)
router.get("/getWorker/:Id",getWorker);
router.get("/filterWorker/:id1/:id2/:id3/:id4", filterWorker)






//contractor section
router.post("/contractor",contractorRegister);
router.get("/getAllContractors",getAllContractors);





//Product section
router.post("/addProduct",addProduct);
router.get("/getProducts", getAllProducts)
router.get("/getProduct/:key",getProduct);
router.put("/updateProduct/:id",updateProduct)






//Rental Provider section
router.post("/registerRentalProvider",addRentalProvider)
router.get("/getAllProductProvider",getAllProductProvider)
router.get("/productProvider/:id",getProvider);
// router.put("/updateRentalProvider/:id",updateRentalProvider)


export default router;