import React from "react";
import './signin.css';
import {FaUser} from 'react-icons/fa';
import {useState} from 'react';
import PasswordStrengthBar from "react-password-strength-bar";
// import reportWebVitals from "../reportWebVitals";
// import root from "..";
// import {LoginComponent} from "./Component/Sign in Form/Signinpage";
import { Link} from "react-router-dom";

// import { LoginComponent } from "./Component/sampleapp/LoginComponent";

export function Signinform1(){
    const[name1,setUserName] = useState('');
    const[email,setEmail] = useState('');
    const[gender,setGender] = useState('');
    const[dateOfBirth,setDateOfBirth] = useState('');
    const[address,setAddress] = useState('');
    const[password,setPassword] = useState('');
    const[confPwd,setconfirmPassword] = useState('');


const handlenamechange=(e)=>{
    setUserName(e.target.value.replace(/[^a-zA-Z]/gi,''));
}

const handleemailchange=(e)=>{
    setEmail(e.target.value.replace(/[^a-zA-Z0-9-@,.]/gi,''));
}

const handlegenderchange=(e)=>{
    setGender(e.target.value);
}

const handledateofbirthchange=(e)=>{
    setDateOfBirth(e.target.value);
}

const handleaddresschange=(e)=>{
    setAddress(e.target.value.replace(/[^a-zA-Z0-9-@,.,/,-,_,&,=,?,,,:,;,',"]/gi,''));
}

const handlepasswordchange=(e)=>{
    setPassword(e.target.value.replace(/[^a-zA-Z0-9]/gi,''));
}

const handleconpasswordchange=(e)=>{
    setconfirmPassword(e.target.value.replace(/[^a-zA-Z0-9]/gi,''));
}


const handleSubmit =(e)=>{
    if(password!==confPwd){
        alert("password not matching");
    }
    else{
        alert('A form was submitted with Name:"' + name1 +'" and Email:"'+ email +'"  and Gender:"'+ gender +'" and dateofbirth:"'+ dateOfBirth +'"and Address:"'+ address +'"');
    }
    e.perventDefault();
    setUserName('');
    setEmail('');
    setGender('');
    setDateOfBirth('');
    setAddress('');
    setPassword('');
    setconfirmPassword('');
}

return(
    <React.Fragment>
        <div className="mainContaniner">
            <div className="innerContainer">
              <form onSubmit={(e) => {handleSubmit(e)}} className="formdata">
                    <dl>
                        <h2 className="headingdata"><FaUser/>&nbsp;Sign In</h2>
                        <dt>UserName</dt>
                        <dd><input type="text" placeholder="User Name" size="30" value={name1} required onChange={(e)=>
                        {handlenamechange(e)}}></input></dd>
                        <dt>Email</dt>
                        <dd><input type="text" placeholder="Email" size="30" value={email} required onChange={(e)=>
                        {handleemailchange(e)}}></input></dd>
                        <dt>Gender</dt>
                        <select name="Gender" width="60%" title="Gender" value={gender} onChange={(e)=>{handlegenderchange(e)}}>
                            <option>None</option>
                             <option>Male</option>
                            <option>Female</option>
                            <option>other</option>
                        </select> 
                        <br/>
                        {/* <input type="radio" name="gender" value={gender} form="myForm" required
                        onClick={(e)=>{handlegenderchange(e)}}/>None &nbsp;
                        <input type="radio" name="gender" value={gender} form="myForm" required
                        onClick={(e)=>{handlegenderchange(e)}}/>Male &nbsp;
                        <input type="radio" name="gender" value={gender} form="myForm" required
                        onClick={(e)=>{handlegenderchange(e)}}/>Female &nbsp;
                        <input type="radio" name="gender" value={gender} form="myForm" required
                        onClick={(e)=>{handlegenderchange(e)}}/>Unknown */}

                        {/* <dt>Address</dt>
                        <dd><input type="text" size="30"></input></dd> */}

                        <dt>DateOfBirth</dt>
                        <dd><input type="date" placeholder="Date" value={dateOfBirth} required
                        onChange={(e)=>{handledateofbirthchange(e)}}></input></dd>
                        {/* <select name="Date">
                            <option>Date</option>
                            <option>1</option>
                            <option>2</option>
                        </select>&nbsp; 
                        <select name="Month">
                            <option>Month</option>
                            <option>January</option>
                            <option>February</option>
                        </select>&nbsp; 
                        <select name="Year">
                            <option>Year</option>
                            <option>1970</option>
                            <option>1971</option>
                        </select> */}
                        <dt>Address</dt>
                        <dd><input type="text" placeholder="Address" size="30" value={address} required onChange={(e)=>
                        {handleaddresschange(e)}}></input></dd>
                        <dt>password</dt>
                        <dd><input type="password" placeholder="Password" className="fa fa-eye" size="30" value={password} required onChange={(e)=>
                        {handlepasswordchange(e)}}></input></dd>
                        <PasswordStrengthBar password={password}/>
                        <dt>confirm password</dt>
                        <dd><input type="password"  placeholder="Conform Password" size="30" value={confPwd} required onChange={(e)=>
                        {handleconpasswordchange(e)}}></input></dd>
                        <button className="buttondata">SignIn</button>
                        <p className="textcolor">Already Have Account <Link to="/LoginComponent" className="linkcolor">Login</Link></p>
                        

                    </dl>
                </form>
            </div>
        </div>
    </React.Fragment>
);

}
