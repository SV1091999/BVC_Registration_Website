


import React,{useState, useEffect} from "react";
import Login from "./Login";
import  ReactDOM   from "react-dom/client";
import '../css/Signup.css';
import { v1 as uuidv1 } from 'uuid';
import Axios from "axios";


class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Studentname : '',
            Studentid: '',
            Email :'',
            Comment : ''
            
            // userArray: []
        }
    }
    
    
    handleSubmit = (event) => {debugger
         event.preventDefault(); //prevent default refresh
         //alert(`Success UserName: ${this.state.Username}  Password: ${this.state.Password}  Student Id: ${this.state.id.slice(1,6)}` )
        //  if(this.props.props != null) this.state.userArray = this.props.props;
        //  this.state.userArray.push({Username: this.state.Username, Password: this.state.Password, id:this.state.id.slice(1,6)})

         const users = ({ Studentname : this.state.Studentname,
         Studentid: this.state.Studentid,
         Email : this.state.Email,
         Comment : this.state.Comment,
        });
        

         Axios.post('http://localhost:5001/Contact' , users)
         .then((response)=>{debugger
              alert("Success")
             
             }).catch((error) => {
                //  setMessage("There is error, data not sent")
                //  console.log(msg)
                //  console.warn('There is error :(' + error);
         })

     }

   
     handleStudentname=(event)=>{
        this.setState({
            Studentname:event.target.value
        })
     }


     handleStudentid=(event)=>{
        this.setState({
        Studentid:event.target.value
        })
     }

     handleEmail=(event)=>{
        this.setState({
            Email:event.target.value
        })
     }

     handleComment=(event)=>{
        this.setState({
            Comment:event.target.value
        })
     }

     
          

     render(){
        const {Studentname,Studentid,Email,Comment} = this.state 

     return(
        <form onSubmit={this.handleSubmit} id="Signup" >
        <table>
           <tr><td><h2 id="heading2">Contact Page</h2></td></tr> 
           <tr><td><label>Studentname</label></td></tr> 
           <tr><td> <input type='text' id="Uname"
                value={Studentname}
                onChange={this.handleStudentname} required/></td></tr> 
       

        <tr><td><label>Studentid</label></td></tr> 
        <tr><td> <input type='text' id="Uname"
            value={ Studentid}
            onChange={this.handleStudentid} required/></td></tr>

        <tr><td><label>Email</label></td></tr> 
        <tr><td> <input type='text' id="Uname"
        value={ Email}
        onChange={this.handleEmail} required/></td></tr>

        <tr><td><label>Comment</label></td></tr> 
        <tr><td> <input type='text' id="Uname"
        value={ Comment}
        onChange={this.handleComment} required/></td></tr>

        
        </table>
 
        <button type = "button" onClick={this.handleSubmit} id="log">Submit</button>
        
    
        </form>
        )
    }
}


export default Contact