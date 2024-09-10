import React, { useContext, useState } from 'react';
import { StoreContext } from "../../context/context";
import './login.css'; 

const LogIn = () => {

    const{setIsRegister} = useContext(StoreContext);
    
    


    const [formData, setFormData] = useState({
        mobile: '',
        password: ''
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
        <div className="login-container">
            <div className="header">
                
                <img src="https://www.thegreatapps.com/application/upload/Apps/2017/03/expense-manager-22.png" alt="Save My Money Logo" className="logo" />
                
                <h1 className="app-name">Save My Money</h1>
            </div>

           
            <h2 className="login-heading">Login</h2>

            
            <form className="login-form" onSubmit={handleSubmit}>
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
                
                <button type="submit">Login</button>
                
                <p>New ? <span onClick={()=>setIsRegister(prev=>!prev)}>Register</span></p>
               
            </form>
        </div>
        </div>
    );
};

export default LogIn;
