// import React, { useState } from 'react';
// import Footer from '../Footer';
// import Header from './Header';
// import ThreedCardModel from "../ThreeCardmodel";
// import "../../css/ThreedHouse.css"
// // import three1 from "./modelImages/31.png"
// // import three2 from "./modelImages/32.png"
// // import three3 from "../modelImages/33.png"
// import three3 from "../3DModel/modelImages/33.png"
// import three4 from "../3DModel/modelImages/34.png"

// const three = [
//     three3,
//     three4,
//     // photo3
// ];

// const HouseImage2 = () => {
//     const [index, setIndex] = useState(1);

//     const handleClick = () => {
//         const nextIndex = index === three.length - 1 ? 0 : index + 1;
//         setIndex(nextIndex);
//     };



//     return (
//         <div className="house-image" onClick={handleClick}>
//             <img src={three[index]} alt="House" />
//         </div>
//     );
// };


// const ThreedmapHouse = () => {
//     return (
//     <>
//             <Header />

//             <div className='threedhouse-main'>
//                 <h1>3D House Model</h1>
//                 <div className="info-photo-container">

//                     <div className="image-3d">

//                         <ThreedCardModel />
//                         <HouseImage2 />
//                     </div>


//                 </div>
//                 </div>
//                     <Footer />
//                 </>
//                 )
// }

//                 export default ThreedmapHouse


import React, { useState } from 'react';
import "../../css/ThreedCard.css"
import Footer from '../Footer';
import Header from './Header';
import photo1  from "../3DModel/modelImages/house12.png"
import photo2 from "../3DModel/modelImages/house13.png";
import photo3 from "../3DModel/modelImages/house15.png";
import model1 from "../3DModel/modelImages/model21.png";
import model2 from "../3DModel/modelImages/model22.png";
import model3 from "../3DModel/modelImages/model23.png";
import model4 from "../3DModel/modelImages/model24.png";


const images = [
  photo1,
  photo2,
  photo3
];

const images2 = [

  model1,
  model2,
  model3,
  model4
];


const HouseInfo = () => {
  return (
    <div className="house-info">
      <h2>House Information</h2>
      <hr/>
      <ul>
        <li style={{fontWeight: 'bold'}}>Plot Area: 2400</li>
        <li >Total Builtup Area: 3590 sqft</li>
        <li>Width: 40 ft</li>
        <li>Length: 60 ft</li>
        <li>Building Type: Residential</li>
        <li>Style: Two Storey House</li>
        <li>Estimated Cost of Construction: 54 - 61 Lacs</li>
      </ul>
    </div>
  );
};
const HouseInfo2 = () => {
  return (
    <div className="house-info">
      <h2>House Information</h2>
      <ul>
        <li>Plot Area: 2400</li>
        <li>Total Builtup Area: 3590 sqft</li>
        <li>Width: 40 ft</li>
        <li>Length: 60 ft</li>
        <li>Building Type: Residential</li>
        <li>Style: Two Storey House</li>
        <li>Estimated Cost of Construction: 54 - 61 Lacs</li>
      </ul>
    </div>
  );
};
const HouseImage = () => 
  {
    const [index, setIndex] = useState(0);
    
    const handleClick = () => {
      const nextIndex = index === images.length - 1 ? 0 : index + 1;
      setIndex(nextIndex);
     };



    return (
      <div className="house-image" onClick={handleClick}>
        <img src={images[index]} alt="House" />
      </div>
    );
  };

  const HouseImage2 = () => 
  {
    const [index, setIndex] = useState(0);

    const handleClick = () => {
      const nextIndex = index === images2.length - 1 ? 0 : index + 1;
      setIndex(nextIndex);
     };



    return (
      <div className="house-image" onClick={handleClick}>
        <img src={images2[index]} alt="House" />
      </div>
    );
  };

const ThreedmapHouse = () => {
  return (
    <>
    <Header />
    <marquee  style={{marginTop:"100px" ,
        backgroundColor: "rgba(61, 120, 230, 0.549)" ,
         padding:"30px" ,
          fontSize:"30px",
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          
          
          }} behavior="high" direction="right">Explore Your Dream Home: Choose from Our 3D House Models Click on Model Image to change Model.. </marquee>
    <div className="threedmapHouse">
       

      <HouseImage />
      <HouseInfo />
      <hr />
     
      {/* <HouseInfo2/>
      <HouseInfo2/>
      <HouseInfo2/> */}
      
    </div>

    <div className="threedmapHouse">


    <HouseImage2 />
      <HouseInfo2/>
    </div>
    <Footer/>
    </>
  );
};

export default ThreedmapHouse;
