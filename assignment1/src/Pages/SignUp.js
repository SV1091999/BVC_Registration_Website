import React,{useState, useEffect} from "react";
import Login from "./Login";
import  ReactDOM   from "react-dom/client";
import '../css/Signup.css';
import { v1 as uuidv1 } from 'uuid';
import Axios from "axios";


class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstname : '',
            lastname: '',
            Email :'',
            Phone : '',
            dob: '',
            department: '',
            Username :'',
            Password :'',
            id : uuidv1(),
            userArray: []
        }
    }
    
    
    handleSubmit = (event) => {debugger
         event.preventDefault(); //prevent default refresh
         //alert(`Success UserName: ${this.state.Username}  Password: ${this.state.Password}  Student Id: ${this.state.id.slice(1,6)}` )
         if(this.props.props != null) this.state.userArray = this.props.props;
         this.state.userArray.push({Username: this.state.Username, Password: this.state.Password, id:this.state.id.slice(1,6)})

         const users = ({ firstname : this.state.firstname,
         lastname: this.state.lastname,
         Email : this.state.Email,
         Phone : this.state.Phone,
         dob: this.state.dob,
         department: this.state.department,
         Username : this.state.Username,
         Password : this.state.Password,
        Studentid: this.state.id.slice(1,6)});
        

         Axios.post('http://localhost:5001/SignUp' , users)
         .then((response)=>{debugger
              console.log(response.config.data + "\n")
             
             }).catch((error) => {
                //  setMessage("There is error, data not sent")
                //  console.log(msg)
                 console.warn('There is error :(' + error);
         })

         const root = ReactDOM.createRoot(document.getElementById('root'))
            root.render(
                <div  className='div-wrapper'>
                    <Login props={this.state.userArray} />
                </div>
            )
     }

     handleLogin = (event) => {
        const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(
            <div  className='div-wrapper'>
                <Login />
            </div>
        )

     }
     handlefirstname=(event)=>{
        this.setState({
            firstname:event.target.value
        })
     }


     handlelastname=(event)=>{
        this.setState({
        lastname:event.target.value
        })
     }

     handleEmail=(event)=>{
        this.setState({
            Email:event.target.value
        })
     }

     handlePhone=(event)=>{
        this.setState({
            Phone:event.target.value
        })
     }

     handledob=(event)=>{
        this.setState({
            dob:event.target.value
        })
     }

     handledepartment=(event)=>{
        this.setState({
            department:event.target.value
        })
     }

     handleUsername=(event)=>{
        this.setState({
        Username:event.target.value
        })
     }    

     handlePassword=(event)=>{
        this.setState({
        Password:event.target.value
        })
     }     

     render(){
        const {firstname,lastname,Email,Phone,dob,department, Username,Password} = this.state 

     return(
        <form onSubmit={this.handleSubmit} id="Signup" >
        <table>
           <tr><td><h2 id="heading2">SignUp Page</h2></td></tr> 
           <tr><td><label>Firstname</label></td></tr> 
           <tr><td> <input type='text' id="Uname"
                value={firstname}
                onChange={this.handlefirstname} required/></td></tr> 
       

        <tr><td><label>Lastname</label></td></tr> 
        <tr><td> <input type='text' id="Uname"
            value={ lastname}
            onChange={this.handlelastname} required/></td></tr>

        <tr><td><label>Email</label></td></tr> 
        <tr><td> <input type='text' id="Uname"
        value={ Email}
        onChange={this.handleEmail} required/></td></tr>

        <tr><td><label>Phone Number</label></td></tr> 
        <tr><td> <input type='number' id="Uname"
        value={ Phone}
        onChange={this.handlePhone} required/></td></tr>
 
        <tr><td><label>DOB</label></td></tr> 
        <tr><td> <input type='text' id="Uname"
        value={ dob}
        onChange={this.handledob} required/></td></tr>

        <tr><td><label>Department</label></td></tr> 
        <tr><td> <input type='text' id="Uname"
        value={ department}
        onChange={this.handledepartment} required/></td></tr>

        <tr><td><label>Username</label></td></tr> 
        <tr><td> <input type='text' id="Uname"
                value={ Username}
                onChange={this.handleUsername} required/></td></tr>


        <tr><td><label>Password</label></td></tr> 
        <tr><td> <input type='text' id="Pass"
                value={ Password}
                onChange={this.handlePassword} required/></td></tr>

            
        </table>
        <button type = "submit" id="log">Sign Up</button>
        <button type = "button" onClick={this.handleLogin} id="log">Back</button>
        
    
        </form>
        )
    }
}


export default SignUp