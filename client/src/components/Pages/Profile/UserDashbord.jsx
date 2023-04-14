import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Footer from '../../Footer';
import "./ProfileDashbord.css"
import { FaDiscord, FaInstagram, FaYoutube , FaTwitter , FaFacebook } from "react-icons/fa";
import {getWorkerData } from "../../../service/api"


const UserDashbord = () => {

    const [user,setUser]=useState();


    useEffect(()=>{
      const role=localStorage.getItem("role");
      console.log("role is ", role);
      if(role=="worker"){
          getUser();
      }
    },[])

    const getUser= async()=>{
      console.log("fun iss ssss ")
      let data=localStorage.getItem("user");
       data= JSON.parse(data)
       
      let res=await getWorkerData(data.email)
      
      
      if(res){
        console.log("res is ",res.price);
        setUser(res);
        console.log("user data is ", user);
      }
    }


  return (
    <>
    <Header/>

    {
      user && 
    

    <section className='profiledashbordcon' style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container-dashbord">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <img src='https://media.istockphoto.com/id/1298550035/photo/putting-in-the-dedication-to-build-her-dreams.jpg?s=612x612&w=0&k=20&c=g9-gKgAno_DWwCS4U5FfLf1S7sypm4zFZE1xyusXlEM=' className="img-fluid mb-2" alt="User profile" />
                <h5 className="card-title">{user.fullName}</h5>
                <p className="card-text">Location: {user.address}, {user.country}</p>
                <div className="btn-group">
                  <button type="button" className="btn btn-primary">Follow</button>
                  <button type="button" className="btn btn-secondary">Message</button>
                </div>
                
              </div>
            </div>
            <div className="card-dashbord">
              <div className="card-body-dashbord">
                <h5 className="card-title-dashbord">Social Media</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><a href="#">Twitter</a><FaTwitter style={{color: 'blue'}} className="icons ms-2" /></li>
                 
                  <li className="list-group-item"><a href="#">Instagram</a><FaInstagram style={{color: 'blue'}} className="icons ms-2"/></li>
                  <li className="list-group-item"><a href="#">Facebook</a><FaFacebook style={{color: 'blue'}} className="icons ms-2"/></li>
                </ul>
              </div>
            </div>
            
          </div>
          <div className="col-md-6">
            <div className="card-dashbord">
              <div className="card-body-dashbord">
                <h5 className="card-title-dashbord">Personal Information</h5>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Full Name:</strong> {user.fullName}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Email:</strong> {user.email}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Phone Number:</strong> {user.phone}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Address:</strong> {user.address}, {user.country}</p>
              </div>
            </div>
            <div className="col-md-6">
            <div className="card-dashbord">
              <div className="card-body-dashbord">
                <h5 className="card-title-dashbord">Project Information</h5>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Project Name:</strong> John Doe</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Description:</strong> john.doe@example.com</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Location:</strong> Jalandhar</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Address:</strong> 123 Main St, New York, NY 10001</p>
              </div>
            </div>
          </div>
          </div>
          
        </div>
        
      </div>
      
    </section>   }

    <Footer/>

    </>
  )
}

export default UserDashbord