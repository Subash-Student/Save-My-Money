import React, { useContext, useState } from 'react';
import './register.css'; 
import { StoreContext } from '../../context/context';

const Register = () => {

    const {setIsRegister} = useContext(StoreContext);

    const[OTP,setOTP] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        password: '',
        otp: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Form submitted:', formData);
    };

    return (
        <div className="body">
        <div className="register-container">
            
            <div className="header">
               
                <img src="https://www.thegreatapps.com/application/upload/Apps/2017/03/expense-manager-22.png" alt="Save My Money Logo" className="logo" />
                
                <h1 className="app-name">Save My Money</h1>
            </div>

            
            <h2 className="register-heading">Register</h2>

            
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="mobile">Mobile Number</label>
                <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {(!!OTP) &&
                      <>
                       <label htmlFor="otp">Enter OTP</label>
                <input
                    type="text"
                    id="otp"
                    name="otp"
                    placeholder="Enter the OTP"
                    value={formData.otp}
                    onChange={handleChange}
                    required
                />
                      </>
                }
               
                
                <button type="submit">{!!OTP ? "Register" :"Send OTP"}</button>

                <p>Already have an account ? <span onClick={()=>setIsRegister(prev=>!prev)}>login</span></p>

            </form>
        </div>
        </div>
    );
};

export default Register;
