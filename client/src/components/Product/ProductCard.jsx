import { useNavigate } from "react-router-dom"

// const useNavigate = useNavigate();

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


const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {

    e.preventDefault();
    
    navigate('/productDashboard' , {state: {product}  });


  
  }



    return (
      <div className="card-workers-group" style={{cursor:"pointer"}}>
        <div className="image-container-workers-group">
          <img src={product.image} alt="loading" />
          {/* <img src="" alt="" /> */}
        </div>
        <div className="details-workers-group">
          <h2 style={nameWorker}>{product.name}</h2>
          <p style={parastyle}>Company: <span style ={variableFields}>{product.company}</span></p>
          <p style={parastyle}>Category: <span style ={variableFields}>{product.category}</span></p>
           
          <p style={parastyle}>Price (per day): <span style ={variableFields}>{product.price}</span></p>
          <p style={parastyle}>Available: <span style ={variableFieldsYes}>
            
            {/* {worker.available ? 'Yes' : 'No'} */}
            yes
          </span></p>
          <p style={parastyle}>Status: <span style ={variableFieldsYes}>
            
            {/* {worker.available ? 'Yes' : 'No'} */}
            {
              product.status? <span>verified</span> : <span style={{"color":"red"}} >not verified</span> 
            }
          </span></p>

          {/* <p style={parastyle}>Description: <span style ={variableFields} >{product.description}</span></p> */}

          <button className='rolebutton' onClick={handleSubmit} type="submit">Details</button>


       
        </div>
      </div>
    );
  };
  

  export default ProductCard;