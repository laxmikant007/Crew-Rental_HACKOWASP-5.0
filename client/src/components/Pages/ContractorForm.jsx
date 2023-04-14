import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "../../css/lform.css"
import Footer from '../Footer';
import Header from './Header';
import { contractorRegister } from '../../service/api';

function ContractorForm() {
    const [aadhar, setAadhar] = useState();
    const [experience, setExperience] = useState();
    const [price, setPrice] = useState();
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [pin, setPin] = useState();
    const [age, setAge] = useState();
    const [bussinessname, setBussinessName] = useState('');
    const [tell, setTell] = useState('');
    const [phone, setPhone] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('aadhar:', aadhar);
        console.log('experience:', experience);
        console.log('Price:', price);
        console.log('address:', address);
        console.log('pin:', pin);
        console.log('age:', age);
        console.log('bussinessname:', bussinessname);
        console.log('tell:', tell);
        console.log('phone:', phone);

        const res=await contractorRegister({
            profilePic:"profile pic",
            aadhar:aadhar,
            experience:experience,
            price:price,
            role:role,
            pin:pin,
            age:age,
            phone:phone,
            businessName:bussinessname,
            address:address

        })

        console.log("data from backend is ",res)



        navigate('/');


    };
    return (
        <>
            <Header />
        <h1 id = "lform">Contractor Registration</h1>
        <div className="labour-form">
            <form className='roleform' onSubmit={handleSubmit}>

                <div className = "display2"> 
                    <div className = "display1"> 
                    <label htmlFor="photo">Profile Photo:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                            const file = event.target.files[0];
                            // handle file upload logic here
                        }}
                    />
                    </div>

                    <div className = "display1">
                    <label htmlFor="aadhar">Aadhar No.:&nbsp;&nbsp;</label>
                    <input
                        type="number"
                        placeholder='Enter AAdhar'
                        id="aadhar"
                        value={aadhar}
                        onChange={(event) => setAadhar(event.target.value)}
                    />
                    </div>
                </div>


                <div className = "display2">
                    <div className = "display1">
                        <label htmlFor="experience">Experience (in Years) :&nbsp;&nbsp;</label>
                        <input
                            type="number"
                            id="experience"
                            placeholder='Enter your Experience'
                            value={experience}
                            onChange={(event) => setExperience(event.target.value)}
                        />
                    </div>
                        <div className = "display1">

                        <label htmlFor="price">Price (per day) :&nbsp;&nbsp;</label>
                        <input
                            type="number"
                            id="price-labour"
                            placeholder='Enter price per day'
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                        </div>
                </div>
                    
                <div className = "display2">
                    <div className = "display1">
                        <label htmlFor="address">Address (City Name ) :&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            placeholder='Enter Address'
                            id="address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </div>
                    <div className = "display1">
                        <label htmlFor="pin">Pin Code :&nbsp;&nbsp;</label>
                        <input
                            type="number"
                            placeholder='Enter Pin'
                            id="pin"
                            value={pin}
                            onChange={(event) => setPin(event.target.value)}
                        />
                    </div>
                </div>

                <div className = "display2">
                    <div className = "display1">
                    <label htmlFor="age">Age (only 18+) :&nbsp;&nbsp;</label>
                    <input
                        type="number"
                        placeholder='Enter Age'
                        id="age"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                    </div>


                    <div className = "display1">
                    <label htmlFor="role">Type of Contractor :</label>
                    <select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
                        <option value="">--Please select--</option>
                        <option value="Labour">Construction Labour</option>
                        <option value="Labour">Tiles | Marbel | Work Helper</option>
                        <option value="Labour">Loading | Unloading</option>
                        <option value="Labour">Cleaing Workers</option>
                        <option value="Labour">Home Shifting</option>
                        <option value="Labour">Godam | Warehouse</option>
                        <option value="Labour">Factory Labour</option>
                        <option value="Labour">Gardening Work</option>
                        <option value="Labour">Other Works </option>
                    </select>
                    </div>
                </div>


                <div className = "display2">
                    <div className = "display1">
                    <label htmlFor="phone">Phone Number :&nbsp;&nbsp;</label>
                                <input
                                    type="number"
                                    id="phone"
                                    placeholder='Phone Number'
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                    </div>
                    <div className = "display1">
                    <label htmlFor="bussinessname">Enter Your Bussiness Name (Optional) :</label>
                        <input
                            type="text"
                            id="bussinessname"
                            placeholder='About Bussiness'
                            value={bussinessname}
                            onChange={(event) => setBussinessName(event.target.value)}
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default ContractorForm;