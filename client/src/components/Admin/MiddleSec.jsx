
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../css/RoleSelectionPageHome.css"
import "./MiddleSec.css"


const MiddleSec = () => {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    // redirect to the corresponding registration page based on the selected role
    switch (role) {
      case 'worker':
        navigate('/workersPage');
        break;
      case 'contractor':
        navigate('/contractors');
        break;
      case 'groupofworker':
        navigate('/groupOfWorkers');
        break;
      case 'equipments':
        navigate('/product');
        break;
      case 'chat':
        navigate('/aiChat');
        break;
      case 'engineer':
        navigate('/engineerPage');
        break;
      case 'threed':
        navigate('/mapForm');
        break;
      default:
        break;
    }
  };

  return (
    <div className="role-selection-main-div">
    <div className="role-selection-middlesec">
      <h1>Complete Description of Crew-Rental</h1>
      <div className="role-selection-options-home">
        <div className="role-option-home" onClick={() => handleRoleClick('worker')}>
          {/* <img src={workerimg} alt="Worker" /> */}
          <span>Total Workers 100</span><span></span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('groupofworker')}>
          {/* <img src={groupofworker} alt="groupworker" /> */}
          <span>Group of Workers</span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('contractor')}>
          {/* <img src={contractorimg} alt="Contractor" /> */}
          <span>Contractor</span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('engineer')}>
          {/* <img src={engineerphoto} alt="engineer" /> */}
          <span>Engineer</span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('equipments')}>
          {/* <img src={equipmentphot} alt="engineer" /> */}
          <span>Equipments on Rental</span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('chat')}>
          {/* <img src={aichatphoto} alt="engineer" /> */}
          <span>Construction uncertainty??</span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('threed')}>
          {/* <img src={threedmodel} alt="threedmodel" /> */}
          <span>Want 3D House Model..</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MiddleSec;
