import React, { useEffect, useState } from 'react';
import "../../css/WorkersPage.css";
import Header from './Header';
import Footer from '../Footer';
import { getAllContractors } from '../../service/api';
const workers = [
  {
    id: 1,
    name: 'Sunil',
    age: 40,
    location: 'Delhi, India',
    available: false,
    pricePerDay: 5,
    experience: '10 years',
    imageUrl: 'https://thumbs.dreamstime.com/b/factory-worker-clipboard-hand-31301133.jpg',
    category : "Building Contractor",

  },
  {
    id: 2,
    name: 'Raman',
    age: 35,
    location: 'Mumbai, India',
    available: true,
    pricePerDay: 500,
    experience: '3 years',
    imageUrl: 'https://media.istockphoto.com/id/1346124841/photo/successful-construction-site-worker-thinking.jpg?b=1&s=170667a&w=0&k=20&c=Xzq26ISOhRuQK95yVQKmgAqKS6IexXZNqf1TBmHjeZA=',
    category : "Cleaning Contractor",

  },
  {
    id: 1,
    name: 'Anil ',
    age: 28,
    location: 'Delhi, India',
    available: false,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://image.cnbcfm.com/api/v1/image/105420523-1535475566932civilengineer.jpg?v=1535475620',
    category : "Marbel Contractor",

  },
  {
    id: 1,
    name: 'Karan',
    age: 28,
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://media.istockphoto.com/id/1326870605/photo/portrait-of-a-confident-young-man-working-a-construction-site.jpg?b=1&s=170667a&w=0&k=20&c=t070c9avYpnrw5Oq-ImZBtnX0fiKSj2qgAYv7KadQHg=',
    category : "Construction Contractor",

  },
  {
    id: 1,
    name: 'Mahima',
    age: 28,
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://media.istockphoto.com/id/1298550035/photo/putting-in-the-dedication-to-build-her-dreams.jpg?s=612x612&w=0&k=20&c=g9-gKgAno_DWwCS4U5FfLf1S7sypm4zFZE1xyusXlEM=',
    category : "Iron Contractor",

  },
  {
    id: 1,
    name: 'Vikas',
    age: 28,
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?cs=srgb&dl=pexels-yury-kim-585419.jpg&fm=jpg',
    category : "Decoration Contractor",

  },
  {
    id: 1,
    name: 'Dinesh',
    age: 28,
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://image.cnbcfm.com/api/v1/image/105323669-1531324756600sinadecaroll.jpg?v=1539725575&w=1920&h=1080',
    category : "Roofer Contractor",

  },
  {
    id: 1,
    name: 'Farahan',
    age: 28,
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://thewire.in/wp-content/uploads/2017/06/chinese-factory-workers.jpg',
    category : "Plumbing Contractor",

  },
  {
    id: 1,
    name: 'Ram Piyari',
    age: 28,
    category : "Electrical Contractor",
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://media.istockphoto.com/id/475144426/photo/african-american-woman-wearing-hardhat-and-safety-vest.jpg?s=612x612&w=0&k=20&c=URJ0M-xZ1dL5wOgpiN63VFSbfBy0mxf6Pq11oF4X5hw=',
  },
  // add more workers here...
];

const parastyle = {
  
   
    marginTop : "15px", 
    fontWeight: 'bold',
    // fontSize: '15px',
    fontFamily: 'Arial',
    // textAlign: 'center',
    
    // textShadow: '2px 2px 4px #000000',

}

const nameWorker = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '35px',
    textAlign: 'center',
    color: 'black',
}

const variableFields = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'black',
}

const variableFieldsYes = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'green'
    // textColor: 'green'
}

const WorkerCard = ({ contractor }) => {
  return (
    <div className="card-workers">
      <div className="image-container-workers">
        {/* <img src={worker.imageUrl} alt={worker.name} /> */}
         <img src="https://thewire.in/wp-content/uploads/2017/06/chinese-factory-workers.jpg" alt="loading" />
      </div>
      <div className="details-workers">
        {/* <h2 style={nameWorker}>{worker.name}</h2> */}
          <h2 style={nameWorker}>Laxmikant </h2>
        <p style={parastyle}>Age: <span style ={variableFields}>{contractor.age}</span></p>
        <p style={parastyle}>Category: <span style ={variableFields}>{contractor.role}</span></p>
        <p style={parastyle}>Location: <span style ={variableFields}>{contractor.address}</span></p>
        <p style={parastyle}>Available: <span style ={variableFieldsYes}>{contractor.status ? 'Yes' : 'No'}</span></p>
        <p style={parastyle}>Price per day: <span style ={variableFields}>{contractor.price}</span></p>
        <p style={parastyle}>Experience: <span style ={variableFields} >{contractor.experience}</span></p>
      </div>
    </div>
  );
};

const Contractors = () => {

    const [contractors, setContractos]=useState([]);

    useEffect(()=>{
      getContractors();
    },[])

    const getContractors= async ()=>{
      let result= await getAllContractors();
        setContractos(result.data);
    }
  return (
    <>
     <Header/>
      <h1 style={{margin:"40px"}}>Contractor Page</h1>
    <div className="workers-page-workers">
      <div className="filter-section">
  <h3 >Filter Contractors </h3>
  <form>
    <label for="location">Location:</label>
    <select name="location" id="location">
      <option value="all">All States</option>
      <option value="maharashtra">Maharashtra</option>
      <option value="karnataka">Karnataka</option>
      <option value="tamil-nadu">Tamil Nadu</option>
    </select>

    <label for="city">City:</label>
    <select name="city" id="city">
      <option value="all">All Cities</option>
      <option value="mumbai">Mumbai</option>
      <option value="bangalore">Bangalore</option>
      <option value="chennai">Chennai</option>
    </select>

    <label for="price">Price:</label>
            <div class="filter_price">
       
        <p>₹100.00</p>
       
        <input type="range" name="price" min="0" max="10000" value="100"></input>

                </div>
       

    <label for="experience">Experience:</label>
    <fieldset id="experience">
      <input type="checkbox" name="experience[]" id="experience0-2" value="0-2"></input>
      <label for="experience0-2">0-2 Years</label>
      <input type="checkbox" name="experience[]" id="experience2-5" value="2-5"></input>
      <label for="experience2-5">2-5 Years</label>
      <input type="checkbox" name="experience[]" id="experience5-10" value="5-10"></input>
      <label for="experience5-10">5-10 Years</label>
    </fieldset>

    <label for="city">Role:</label>
    <select name="city" id="city">
      <option value="all">Construction Labour</option>
      <option value="mumbai">Tiles | Marble | Work Helper</option>
      <option value="bangalore">Loading | Unloading</option>
      <option value="chennai">Home Shifting</option>
      <option value="chennai">Factory Labour</option>
      <option value="chennai">Gardening Work</option>
      <option value="chennai">Other Labour Works:</option>
    </select>

    
      <button type="submit">Apply Filter</button>
      </form>
      </div>

      <div className="Container-main-worker">
      <div className="workers-page-workers-group">
        {contractors.map((contractor, index) => {
          return <WorkerCard key={contractor._id} contractor={contractor} />;
        })}
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contractors;
