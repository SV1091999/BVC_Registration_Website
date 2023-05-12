import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import '../css/registration.css';
import Axios from "axios";


class Registration extends Component {

    constructor(props) {

        // Calling super class constructor
        super(props);

        this.state = {
            courseArray: [],
            Array:[]
        }
        // Binding event handler
        this.handleEvent = this.handleEvent.bind(this);
        this.DeleteCourse = this.DeleteCourse.bind(this);
    }

    handleAbout(event, param) {
        alert(param);
    }

    handleEvent(event, course) {debugger
        
        this.state.Array.push({course: course, studentId: this.props.props[0].StudentId})

        Axios.post('http://localhost:5001/Register' , this.state.Array)
        .then((response)=>{debugger
            if(response.data == "Less than 5") {
                alert("Insert Successfully!!!")
            }
            else if(response.data == "More than 5") {
                alert("You are already registered to 5 courses!!!")
            }
            else{
                alert("You are already registered in this courses!!!")
            }
            }).catch((error) => {
               //  setMessage("There is error, data not sent")
               //  console.log(msg)
                // console.warn('There is error :(' + error);
            })



        // if (!(this.state.courseArray.map((c) => c.course)).includes(course)) {
        //     if (this.state.courseArray.length < 5) {
        //         this.state.courseArray.push({ course });
        //     }
        //     else {
        //         alert("You are already registered in 5 courses!!!")
        //     }
        // }
        // else {
        //     alert("You are already registered to this course")
        // }
        // console.log(this.state.courseArray);
    }

    DeleteCourse(event, course) {debugger
        
        this.state.Array.push({course: course, studentId: this.props.props[0].StudentId})

        Axios.post('http://localhost:5001/DeleteCourse' , this.state.Array)
        .then((response)=>{debugger
            
                alert("Deleted Successfully!!!")
            
            }).catch((error) => {
               //  setMessage("There is error, data not sent")
               //  console.log(msg)
                // console.warn('There is error :(' + error);
            })

        }

    render() {
        return (
            <>
                <p>Student Id : {this.props.props[0].StudentId}</p>
                <h1>Choose Courses</h1><div className='button'>
                    <h2>Term 1</h2>
                    <><><><div>
                        <input type="text" value='Project management1, Pr111' />
                        <br></br> <br></br>
                        <button onClick={event => this.handleEvent(event, 'Project management1, Pr111')}>Register</button>
                        <button onClick={event => this.DeleteCourse(event, 'Project management1, Pr111')}>De-Register</button>
                        <button onClick={event => this.handleAbout(event, 'This course introduces the fundamental principles necessary for successful management of Information Technology (IT) projects. Project planning, management and control techniques will be discussed and the application of computers in project management will be studied \n Instructor - Mahbub \n Start Date:10-09-2023 \n End Date: 06-01-2024')}>About</button>
                    </div><div><br></br> <br></br>
                            <input type="text" value='C++ Programming Fundamentals , C++111' />
                            <br></br> <br></br>
                            <button onClick={event => this.handleEvent(event, 'C++ Programming Fundamentals , C++111')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event, 'C++ Programming Fundamentals , C++111')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, 'C++ is a general-purpose programming language and widely used nowadays for competitive programming. It has imperative, object-oriented and generic programming features. C++ runs on lots of platform like Windows, Linux, Unix, Mac, etc \n\n Instructor - Nisha Balan Nair Radamoni \n Start Date:10-09-2023 \n End Date: 06-01-2024')}>About</button>
                    </div><div><br></br> <br></br>
                            
                        </div><div><br></br>
                            <input type="text" value='Computer Maintenance, CompM1111' />
                            <br></br> <br></br>
                            <button onClick={event => this.handleEvent(event, 'Computer Maintenance, CompM1111')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event, 'Computer Maintenance, CompM1111')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, 'Computer maintenance means keeping your computers and laptops in good condition through regular cleanings, hard drive updates, and virus prevention. Doing so can lengthen the lifespan of your devices and it can also help you browse the web more safely. \n\n Instructor - Kenneth Meckinnon \n Start Date:10-09-2023 \n End Date: 06-01-2024')}>About</button>
                    </div><div><br></br>
                        </div><div><br></br> <br></br>
                            <input type="text" value='Information Security1, IS1111' />
                            <br></br> <br></br>

                            <button onClick={event => this.handleEvent(event, 'Information Security1, IS1111')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event, 'Information Security1, IS1111')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, 'Information security protects sensitive information from unauthorized activities, including inspection, modification, recording, and any disruption or destruction. The goal is to ensure the safety and privacy of critical data such as customer account details, financial data or intellectual property. ')}>About</button>


                        </div></><div><br></br> <br></br>
                            <h2>Term 2</h2>
                            <input type="text" value='Networking, Net222' />
                            <br></br> <br></br>
                            <button onClick={event => this.handleEvent(event, 'Networking, Net222')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event, 'Networking, Net222')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, ' Wireless Networks course is designed to provide students with necessary tools to help them become part of the revolutionary change in communications and networking. It starts with an introduction to modern wireless technology and its application to transmit voice, data and images. Emphasis is laid on digital modulation techniques ,their spectral characteristics and on various components, subsystems used in wireless system and their specifications. Topics on radio wave propagation in a mobile environment , spread spectrum techniques and multiple access methods are presented. The course also provides essential knowledge on Wireless Personal Area Network (IR and Bluetooth), Wireless Local Area Network (802.11 a/b/g) and Wireless Wide Area Networks (GSM, GPRS and CDMA). A brief introduction of Wireless Internet and WAP is given. Wireless networks and their impact on business is done through case studies. Theory classes will be supplemented with labs to enhance practical knowledge in integrating, testing , commissioning and management of wireless networks.\n Instructor Name : sohib Bajwa\n Start Date : 07-01-2024\n End Date: 28-04-2024')}>About</button>
                        </div><div><br></br> <br></br>
                            <input type="text" value='Web technology, Web222' />
                            <br></br> <br></br>
                            <button onClick={event => this.handleEvent(event, 'Web technology, Web222')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event, 'Web technology, Web222')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, 'Web technologies refers to the way computers/devices communicate. with each other using mark up languages. It invo It is communication. across the web, and create, deliver or manage web content using hypertext markup language (HTML).  A web page is a web document which is written in in HTML \nInstructor Name : Nisha\n Start Date:07-04-2024\n End Date:28-04-2024 ')}>About</button>
                        </div><div><br></br> <br></br>
                            <h2>Term 3</h2>
                            <input type="text" value='Project Management, Pro222' />
                            <br></br> <br></br>
                            <button onClick={event => this.handleEvent(event, 'Project Management, Pro222')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event, 'Project Management, Pro222')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, 'A project manager is a professional who organizes, plans, and executes projects while working within restraints like budgets and schedules. Project managers lead entire teams, define project goals, communicate with stakeholders, and see a project through to its closur \n Instructor Name :Dima \n Start Date: 05-05-2024 \n End date : 28-08-2024')}>About</button>
                        </div><div><br></br> <br></br>
                            <input type="text" value='Advanced Project management1, Pr333' />
                            <br></br> <br></br>
                            <button onClick={event => this.handleEvent(event, 'Advanced Project management1, Pr333')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event, 'Advanced Project management1, Pr333')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, 'Advanced Project Management is a new four-part course series created to cover the entire domain of project management, including both practical and purely theoretical areas. The workshop will cover all aspects of introduction into project management as well as detail all the steps included into Project Initiation\n Instructor Name :TG \n Start Date: 05-05-2024 \n End Date: 28-08-2024')}>About</button>
                        </div></><div><br></br> <br></br>
                            <input type="text" value='Advanced C++ Programming Fundamentals ,C++333' />
                           
                            <br></br> <br></br>
                            <button onClick={event => this.handleEvent(event, 'Advanced C++ Programming Fundamentals ,C++333')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event, 'Advanced C++ Programming Fundamentals ,C++333')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, 'Inheritance and Polymorphism. Inheritance Concept. Inheritance in C++ Protected Members. Base Class Initializer List\n Instructo Name: Dima \n Start Date: 05-05-2024 \n End Date:28-08-2024')}>About</button>
                            </div><div><br></br> <br></br>
                            <h2>Term 4</h2>
                            <input type="text" value='Advanced Computer Maintenance, CompM333' />
                            <br></br> <br></br>

                            <button onClick={event => this.handleEvent(event, 'Advanced Computer Maintenance, CompM333')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event, 'Advanced Computer Maintenance, CompM333')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, 'Advanced Computer Services, or ACS, is an I.T. infrastructure and hardware consulting company focused on providing end-to-end solutions for businesses growing their footprint and capabilities.\n Instructor Name: Mahobob \n Start Date: 07-09-2024\n End Date: 25-12-2024')}>About</button>
                        </div><div><br></br> <br></br>
                            <input type="text" value='Advanced Information Security1, IS333' />
                            <br></br> <br></br>
                            <button onClick={event => this.handleEvent(event, 'Advanced Information Security1, IS333')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event,  'Advanced Information Security1, IS333')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, 'Protecting and managing hardware, software and staff within an organization. Operating Systems. Data mining and Network Security. Administering Security. Cyber Security Management.\n Instructor Name: Dima\n Start date: 07-09-2024\n End Date : 25-12-2024')}>About</button>
                        </div><div><br></br> <br></br>
                            <input type="text" value='Advanced Networking, Net222' />
                            <br></br> <br></br>
                            <button onClick={event => this.handleEvent(event, 'Advanced Networking, Net222')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event,  'Advanced Networking, Net222')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, 'Advanced Network means independent practice associations, large medical groups, clinically integrated networks, or integrated delivery system organizations that have entered into shared savings plan (SSP) arrangements with at least one payer\n Instructor Name:TG \n Start Date:07-09-2024\n End Date : 25-12-2024 ')}>About</button>
                        </div><div><br></br> <br></br>
                            <input type="text" value='Advanced Web technology, Web222' />
                            <br></br> <br></br>
                            <button onClick={event => this.handleEvent(event, 'Advanced Web technology, Web222')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event,  'Advanced Web technology, Web222')}>De-Register</button>
                            <button onClick={event => this.handleEvent(event, 'Advanced Web Technologies. Practical application of the latest evolving web technologies. Topics include HTMLS, CSS/SASS, JavaScript, NodeJS, Polymer, noSQL, asynchronous programming, functional programming, event driven systems, debugging, testing, workflow optimization, and deployment pipelines.\n Instructor Name:Sohib Bajwa \n Start Date:07-09-2024\n End Date : 25-12-2024')}>About</button>
                        </div><div><br></br> <br></br>
                            <input type="text" value='Advanced Project Management, Pro222' />
                            <br></br> <br></br>
                            <button onClick={event => this.handleEvent(event, 'Advanced Project Management, Pro222')}>Register</button>
                            <button onClick={event => this.DeleteCourse(event, 'Advanced Project Management, Pro222')}>De-Register</button>
                            <button onClick={event => this.handleAbout(event, 'Advanced Project Management is a new four-part course series created to cover the entire domain of project management, including both practical and purely theoretical areas. The workshop will cover all aspects of introduction into project management as well as detail all the steps included into Project Initiation\n Instructor Name: Dima \n Start Date:07-09-2024 \n End date: 25-12-2024')}>About</button>
                        </div></>
                </div></>
                       );

                    }
                }
                
                export default Registration;
                