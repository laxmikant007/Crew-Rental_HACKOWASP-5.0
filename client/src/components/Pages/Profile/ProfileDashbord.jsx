import React from 'react'
import Header from '../Header';
import Footer from '../../Footer';
import "./ProfileDashbord.css"
import { FaDiscord, FaInstagram, FaYoutube , FaTwitter , FaFacebook } from "react-icons/fa";
import { AccountContext } from '../../../context/AccountProvider';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';



const  ProfileDashbord =() => {
    const location = useLocation();
     const worker=location.state.worker
     console.log("wtevgvh ", worker)


  return (
    <>
    <Header/>
    <section className='profiledashbordcon' style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container-dashbord">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                {/* <img src='https://media.istockphoto.com/id/1346124841/photo/successful-construction-site-worker-thinking.jpg?b=1&s=170667a&w=0&k=20&c=Xzq26ISOhRuQK95yVQKmgAqKS6IexXZNqf1TBmHjeZA=' className="img-fluid mb-2" alt="User profile" /> */}
                <img src={worker.profilePic} className="img-fluid mb-2" alt="User profile" />
                <h5 className="card-title">{worker.fullName}</h5>
                <p className="card-text">Location: {worker.address}</p>
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
                <p className="card-text-dashbord"><strong>Full Name: </strong>{worker.fullName}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Email:</strong> {worker.email}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Phone Number:</strong> {worker.phone}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Address:</strong> {worker.address},&nbsp; {worker.country}</p>
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
      
    </section>

    <Footer/>
    </>
  )
}

export default ProfileDashbord;