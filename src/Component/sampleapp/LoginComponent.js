import React, {useState} from "react";
import './LoginComponent.css';
// import ReactDOM  from 'react-dom';
import PasswordStrengthBar from 'react-password-strength-bar';
// import { IconName } from "react-icons/md";
// import PersonPinIcon from '@mui/icons-material/PersonPin';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaUser} from 'react-icons/fa';


export function LoginComponent(){

    const [name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfPassword, setConfPassword] = useState('');
    // const{password} = this.state;
    // state = {
    //     password: '',
    //   }
    // const [pwdstrength, setpwdstrength] = useState('');

    // const han
    
    const handlenamechange =(e)=>{
        setUserName(e.target.value.replace(/[^a-zA-Z]/gi, ''));
    }

    const handleemailchange =(e)=>{
        setEmail(e.target.value.replace(/[^a-zA-Z0-9-@]/gi, ''));
    }

    const handlepasswordchange =(e)=>{
        setPassword(e.target.value.replace(/[^a-zA-Z0-9]/gi, ''));
    }

    const handleconpasswordchange =(e)=>{
        setConfPassword(e.target.value.replace(/[^a-zA-Z0-9]/gi, ''));
    }

    const handleSubmit =(e)=>{
        if(Password!==ConfPassword){
            alert("password not matching");
        }
        else{
            console.log('A form was submitted with Name:"' + name +'" and Email:"'+ email +'"');
        }
        e.preventDefault();
        setUserName('');
        setEmail('');
        setPassword('');
        setConfPassword('');
    }

    // const back_img={
    //     background: 'Login_page_Background_Image.jpg';
    //     /* background-color: #cccccc; Used if the image is unavailable */
    //   height: 500px; /* You must set a specified height */
    //   background-position: center; /* Center the image */
    //   background-repeat: no-repeat; /* Do not repeat the image */
    //   background-size: cover;
    // };



    return (
        <React.Fragment>
            {/* <div className="container-fluid d-flex justify-content-center mt-2 w-50"> */}
            <div className="ParentContaniner">
            <div className="childContainer">
            {/* <div className="form_design">     */}
            {/* <form onSubmit={(e) => {handleSubmit(e)}} className="border border-2 border-primary p-5"> */}
            <form onSubmit={(e) => {handleSubmit(e)}} className="form">
        {/* <h2><span className="bi bi-person-fill"></span>User Login</h2> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        <h3 className="headingdata"><FaUser/> User Login</h3>
        <dl>
            <dt>UserName</dt>
            <dd><input type="text" maxLength="10" size="30" value={name} required onChange={(e)=>
                {handlenamechange(e)}}></input></dd>
            <dt>Email</dt>
            <dd><input type="text" size="30" value={email} required onChange={(e)=>
                {handleemailchange(e)}}></input></dd>
            <dt>Password</dt>
            <dd><input type="password" size="30" className= "fa fa-eye" value={Password} required onChange={(e)=>
                {handlepasswordchange(e)}}></input></dd>

            <PasswordStrengthBar password={Password}/>  
  
            <dt>Conform Password</dt>
            <dd><input type="password" size="30" value={ConfPassword} required onChange={(e)=>
                {handleconpasswordchange(e)}}></input></dd>

            <dl></dl>
            {/* <button className="btn btn-primary w-50">Login</button>       */}
            <button className="button_data">Login</button>   
        </dl>
        </form>
        </div>
        </div>
        {/* </div> */}
        </React.Fragment>
        );
}
    