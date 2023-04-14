import React, { useEffect, useState } from 'react';
import "../../css/WorkersPage.css";
import Header from './Header';
import Footer from '../Footer';
import { getAllWorkers, filterWorker } from '../../service/api';
import WorkerCard from '../WorkerCard';

const WorkersPage =() => {


    const [workers,setWorkers]=useState([]);
    const [price,setPrice]=useState("500");
    const[ role,setRole]=useState("All Categories")
    const[ experience,setExperience]=useState("All")
    const[ address,setAddress]=useState("All cities")
    useEffect(()=>{
          getWorkers();
    },[])

   const handleClick=async(e)=>{
    e.preventDefault();
       const res=await filterWorker({
        role:role,
        experience:experience,
        price:price,
        address:address
       })
       if(res){
        setWorkers(res.data);
        console.log("res hhhh ",res.data)
       }
    
       
   }

       const getWorkers= async()=>{
            let result= await getAllWorkers();
              setWorkers(result.data);
       }
       console.log("Workers from backend are ",workers);
  return (
    <>
      <Header />
      <h1 style={{margin:"40px"}}>Workers Page</h1>
    {/* <div className="workers-page-workers"> */}
    <div className="workers-page-workers">
    {/* <div className="workers-page-workers-group"> */}
    
    {/* <div className="workers-page-workers-group"> */}

     
    <div className="filter-section">
  <h3 >Filter Workers</h3>
  <form>
    <label for="location">Location:</label>
    <select  value={address} style={{"cursor":"pointer"}} onChange={(e)=>{setAddress(e.target.value)}} id="location">
    <option style={{"cursor":"pointer"}}  value="All cities"   > All cities </option>
    {workers.map((worker) => {
                    return <option style={{"cursor":"pointer"}} key={worker._id} value={worker.address}   > {worker.address} </option>
      })}
    </select>
    <label for="city">Category:</label>
    <select name="city" id="city" style={{"cursor":"pointer"}} value={role} onChange={(e)=>setRole(e.target.value)}>
    <option style={{"cursor":"pointer"}}  value="All Categories"   > All Categories </option>
    {workers.map((worker) => {
                    return <option style={{"cursor":"pointer"}} key={worker._id} value={worker.role}   > {worker.role} </option>
      })}
    </select>

    <label for="price">Price: ₹{price} </label>
            <div class="filter_price">
       
        {/* <span style={{fontSize:"25px"}} >₹{price}</span> */}
       
        <input type="range" name="price" style={{"cursor":"pointer"}} onChange={(e)=>{setPrice(e.target.value)}} min="0" max="10000" value={price}></input>

                </div>
       

    {/* <label for="experience">Experience:</label>
    <fieldset id="experience">
      <input type="checkbox" name="experience[]" id="experience0-2" value="0-2"></input>
      <label for="experience0-2">0-2 Years</label>
      <input type="checkbox" name="experience[]" id="experience2-5" value="2-5"></input>
      <label for="experience2-5">2-5 Years</label>
      <input type="checkbox" name="experience[]" id="experience5-10" value="5-10"></input>
      <label for="experience5-10">5-10 Years</label>
    </fieldset> */}
    <label for="city">Experience:</label>
    <select name="city" id="city" style={{"cursor":"pointer"}} value={experience} onChange={(e)=>setExperience(e.target.value)}>
          <option style={{"cursor":"pointer"}} value="All"   > All </option>
         <option style={{"cursor":"pointer"}} value="2"   > 0-2 years </option>
         <option style={{"cursor":"pointer"}} value="5"   > 2-5 years </option>
         <option style={{"cursor":"pointer"}} value="5"   > above 5 years </option>
    
    </select>



    {/* <label for="city">Role:</label>
    <select name="city" id="city">
      <option value="all">Construction Labour</option>
      <option value="mumbai">Tiles | Marble | Work Helper</option>
      <option value="bangalore">Loading | Unloading</option>
      <option value="chennai">Home Shifting</option>
      <option value="chennai">Factory Labour</option>
      <option value="chennai">Gardening Work</option>
      <option value="chennai">Other Labour Works:</option>
    </select> */}

    
      <button type="submit" onClick={handleClick}>Apply Filter</button>
      </form>
      </div>
          {/* <div className="container"> */}
          {/* <div className="Container-main-worker"> */}
          
          {/* <div className="workers-container-workers"> */}
                {/* <div className="workers-page-workers-group"> */}
                <div className="workers-page-workers-group-12">
                  {workers.map((worker) => {
                    return <WorkerCard key={worker._id} worker={worker} />;
                  })}
                {/* </div> */}
          </div>
    </div>
    
    <Footer/>
    </>
  );
};

export default WorkersPage;
