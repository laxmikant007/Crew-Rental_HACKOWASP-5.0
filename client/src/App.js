import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from './components/Pages/Home';
import Header from './components/Pages/Header';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import RoleSelectionPage from './components/Pages/RoleSelectionPage';
import LabourForm from './components/Pages/LabourForm';
import ContractorForm from './components/Pages/ContractorForm';
import RentalProviderForm from './components/Pages/RentalProviderForm';
import ProductRegister from './components/Pages/ProductRegister';
import RoleSelectionPageHome from './components/Pages/RoleSelectionPageHome';
import WorkersPage from './components/Pages/WorkersPage';
import GroupOfWorkers from './components/Pages/GroupOfWorkers';
import Contractors from './components/Pages/Contractors';
import AdminLabour from './components/Pages/AdminLabour';
import MapForm from './components/Pages/MapForm';
import ThreedmapHouse from './components/Pages/ThreedmapHouse';
import Contact from './components/Pages/Contact';
import EngineerPage from './components/Pages/EngineerPage';

import AiChat from './chat/AiChat';
import ProfileDashbord from './components/Pages/Profile/ProfileDashbord';
import UserDashbord from './components/Pages/Profile/UserDashbord';
import AccountProvider from './context/AccountProvider';
import Product from './components/Product/Product';
import ProductDashboard from './components/Product/ProductDashboard';
import PrivateComponent from './components/PrivateComponent';
import AdminDashboard from './components/Admin/AdminDashboard';


import Register from './components/Pages/register/Register';
import Footer from './components/Footer';
function App() {
  return (
    <>
   
  <BrowserRouter>
 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>}/>
    
      <Route  element={<PrivateComponent/>} >
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/roleSelectionPage" element={<RoleSelectionPage/>}/>
      <Route path="/labourForm" element={<LabourForm/>}/>
      <Route path="/contractorForm" element={<ContractorForm/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path="/rentalProviderForm" element={<RentalProviderForm/>}/>
      <Route path="/productRegister" element={<ProductRegister/>}/>
      <Route path="/roleSelectionPageHome" element={<RoleSelectionPageHome/>}/>
      <Route path="/workersPage" element={<WorkersPage/>}/>
      <Route path="/groupOfWorkers" element={<GroupOfWorkers/>}/>
      <Route path="/contractors" element={<Contractors/>}/>
      <Route path="/adminLabour" element={<AdminLabour/>}/>
      <Route path="/profileDashbord" element={<ProfileDashbord/>}/>
      <Route path="/userDashbord" element={<UserDashbord/>}/>
      <Route path="/mapForm" element={<MapForm/>}/>
      <Route path="/ThreedmapHouse" element={<ThreedmapHouse/>}/>
      <Route path="/aiChat" element={<AiChat/>}/>
      <Route path="/EngineerPage" element={<EngineerPage/>}/>
      <Route path="/productDashboard" element={<ProductDashboard/>}/>
      <Route path="/adminDashboard" element={<AdminDashboard/>}/>

      <Route path="/contact" element={<Contact/>}/>
      {/* <Route path="/Product" element={<Product/>}/> */}
      </Route>
    
    </Routes>
   
  </BrowserRouter>
  
    
  
  
  </>
    
  );
}

export default App;


