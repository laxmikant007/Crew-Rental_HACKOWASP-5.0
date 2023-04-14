import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../css/RoleSelectionPage.css";




const Adminnavbar = () => {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    // redirect to the corresponding registration page based on the selected role
    switch (role) {
      case 'worker':
        navigate('/labourform');
        break;
      case 'contractor':
        navigate('/contractorForm');
        break;
      case 'customer':
        navigate('/');
        break;
      case 'rental':
        navigate('/rentalProviderForm');
        break;
      default:
        break;
    }
  };

  return (
    <>
      
      <div className="role-selection-register-div">
      <div className="role-selection-page-register">

        <h1>Admin Panel</h1>
        <div className="role-selection-options">
          <div className="role-option" onClick={() => handleRoleClick('worker')}>
            {/* <img src={workerimg} alt="Worker" /> */}
            <span>Worker</span>
          </div>
          <div className="role-option" onClick={() => handleRoleClick('customer')}>
            {/* <img src={customerimg} alt="Customer" /> */}
            <span>Group worker</span>
          </div>
          <div className="role-option" onClick={() => handleRoleClick('contractor')}>
            {/* <img src={contractorimg} alt="Contractor" /> */}
            <span>Contractor</span>
          </div>
          <div className="role-option" onClick={() => handleRoleClick('rental')}>
            {/* <img src={rentalIimg} alt="rental" /> */}
            <span>Rental Provider</span>
          </div>

          <div className="role-option" onClick={() => handleRoleClick('rental')}>
            {/* <img src={rentalIimg} alt="rental" /> */}
            <span>Rental Products</span>
          </div>

          <div className="role-option" onClick={() => handleRoleClick('rental')}>
            {/* <img src={rentalIimg} alt="rental" /> */}
            <span>Engineer</span>
          </div>
          
        </div>
      </div>
      </div>
     
    </>
  );
};

export default Adminnavbar;
