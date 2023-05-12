import React from "react";
import  ReactDOM   from "react-dom/client";
import App from '../App';
import SignUp from './SignUp';
import '../css/Signup.css';
import '../Pages/Error';
import { v1 as uuidv1 } from 'uuid';
import Axios from "axios";



class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Username :'',
            Password :'',
            id : uuidv1(),
            UserArray: [],
            thisStudent: [],
        }
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


     handleSubmit = (event) => {debugger
        // alert(`${this.state.Username} ${this.state.Password}`)
        event.preventDefault(); //prevent default refresh
        // var check = true;

        //Put only username and password in Userarray
        this.state.UserArray.push({Username: this.state.Username, Password: this.state.Password/* StudentId: this.state.id.slice(1,6)*/})

        Axios.post('http://localhost:5001/login' , this.state.UserArray)
        .then((response)=>{debugger
            //  console.log(response.config.data + "\n")

            
                if(response.data[0].length > 0)
                {
                    //Put student id and and its value from database
                    this.state.UserArray[0].StudentId = response.data[0][0].Studentid;
                    const root = ReactDOM.createRoot(document.getElementById('root'))
                        root.render(
                            <div>
                                <App props = {this.state.UserArray}/>
                            </div>
                        )
                }
                else {
                    alert("Enter valid username and password");
                }            
            })
            
            // .catch((error) => {
            //    //  setMessage("There is error, data not sent")
            //    //  console.log(msg)
            //     // console.warn('There is error :(' + error);
            // })

        // this.props.props.map((c) => (c.Username == this.state.Username && c.Password == this.state.Password)
        // ? (this.state.thisStudent.push(c),
        //  check = true) 
        // : check = false
        // )
        // if(check == true) {
        //     const root = ReactDOM.createRoot(document.getElementById('root'))
        //     root.render(
        //         <div>
        //             <App props = {this.state.thisStudent}/>
        //         </div>
        //     )
        // }
        // else {
        //     alert("Enter valid username and password");
        // }
     }

     handleSignUp = (event) => {debugger
        const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(
            <div  className='div-wrapper'>
                <SignUp props={this.props.props}/>
            </div>
            
        )
     }
     render()
     {
        const {Username,Password} = this.state 

     return(
        <form onSubmit={this.handleSubmit} id="login">
        <div>
        <div>
            <h2 id="h2">Login Page</h2>
        <label>Username
        <input type='text' id="Uname"
                value={ Username}
                onChange={this.handleUsername} required /></label>

        </div>
        <div>
            <label>Password
                <input type='text' id="Pass"
                value={ Password}
                onChange={this.handlePassword} required/>
            </label>
            
        </div>


            
        </div>
        <button type = "submit" id="log"  >Sign In</button>
        <button type = "button" id="log" onClick={this.handleSignUp}>Sign Up</button>
        </form>
        )
    }
}


export default Login