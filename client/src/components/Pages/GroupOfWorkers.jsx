import React from 'react';
import "../../css/Groupworkers.css";
import Footer from '../Footer';
import Header from './Header';


const workers = [
  {
    id: 1,
    name: 'Swachh Group',
    category: "Cleaning Workers",
    location: 'Delhi, India',
    available: false,
    pricePerDay: 4500,
    experience: '10 .',
    imageUrl: 'https://i.pinimg.com/originals/3f/f1/8e/3ff18e59acdb29dfd8ab54a3a09bee72.jpg',
    phone :"9414173314"

  },
  {
    id: 2,
    name: 'Dil Mangee Marbel',
    category: "Marbel Work Helper",
    location: 'Mumbai, India',
    available: true,
    pricePerDay: 900,
    experience: '3 .',
    imageUrl: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-tile-contractor.jpeg',
    phone :"9414173314"

  },
  {
    id: 1,
    name: 'Factory Dangal  ',
    category: "Factory Labours",
    location: 'Delhi, India',
    available: false,
    pricePerDay: 800,
    experience: '2 .',
    imageUrl: 'https://media.istockphoto.com/id/1282985327/photo/portrait-of-welders-in-the-workshop.jpg?s=612x612&w=0&k=20&c=f-IlqJgGDTBQh-xhDvYj4c4Cl3u6GbLVp_V2D2MaTM4=',
    phone :"9414173314"

  },
  {
    id: 1,
    name: 'Kaho na Bijli haii..',
    category: "Electrician Group  ",
    location: 'Delhi, India',
    available: true,
    pricePerDay: 1100,
    experience: '2 .',
    imageUrl: 'https://ak.picdn.net/offset/photos/5ec54169a75ca0db3709300d/medium/offset_943315.jpg',
    phone :"9414173314"

  },
  {
    id: 1,
    name: 'Udta Majdurr',
    category: "Construction Labours",
    location: 'Delhi, India',
    available: true,
    pricePerDay: 1100,
    experience: '2 .',
    imageUrl: 'https://c8.alamy.com/comp/ET19DB/workers-working-on-construction-site-at-mumbai-maharashtra-india-ET19DB.jpg',
    phone :"9414173314"


  },
  {
    id: 1,
    name: 'Jal Yodha..',
    category: "Plumbing Labour",
    location: 'Delhi, India',
    available: true,
    pricePerDay: 1000,
    experience: '2 .',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/The_Minister_of_State_for_Petroleum_and_Natural_Gas_%28Independent_Charge%29%2C_Shri_Dharmendra_Pradhan_visiting_the_Geleky_GGS-I_%28Group_Gathering_Station-I%29%2C_in_ONGC_Assam_Asset%2C_on_April_16%2C_2015.jpg/640px-thumbnail.jpg',
    phone :"9414173314"
  }
 
 
 
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

const WorkerCard = ({ worker }) => {
  return (
    <div className="card-workers-group">
    {/* // <div className="workers-page-workers"> */}
      <div className="image-container-workers-group">
        <img src={worker.imageUrl} alt={worker.name} />
      </div>
      <div className="details-workers-group">
        <h2 style={nameWorker}>{worker.name}</h2>
        <p style={parastyle}>Category: <span style ={variableFields}>{worker.category}</span></p>
        <p style={parastyle}>Location: <span style ={variableFields}>{worker.location}</span></p>
        <p style={parastyle}>Available: <span style ={variableFieldsYes}>{worker.available ? 'Yes' : 'No'}</span></p>
        <p style={parastyle}>No. of Members: <span style ={variableFields} >{worker.experience}</span></p>
        <p style={parastyle}>Group Price per day: <span style ={variableFields}>{worker.pricePerDay}</span></p>
        <p style={parastyle}>Experience: <span style ={variableFields} >{worker.experience}</span></p>
        <p style={parastyle}>Phone no: <span style ={variableFields} >{worker.phone}</span></p>
      </div>
    </div>
  );
};

const GroupOfWorkers = () => {
  return (
    <>
          <Header />
      <h1 style={{marginTop:"100px"}}>Group of Workers Page</h1>
      <div className='new-group-worker-sec'>
    {/* <div className="workers-page-workers-group"> */}
    <div className="filter-section">
  <h3 >Filter Group Workers</h3>
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

        {/* <div className='section-filter'>

            <h3 >Filter Group Workers</h3>




        </div> */}




      <div className="container">
      <div className="workers-container-workers-group">
        {workers.map((worker, index) => {
          return <WorkerCard key={worker.id} worker={worker} />;
        })}
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default GroupOfWorkers;
