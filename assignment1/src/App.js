import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
// import './css/App.css'
import Registration from './Pages/Registration';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Menu from './Components/Menu';
import './css/App.css'
 
class App extends Component {
  render() {
    return (      
       <Router>  
        <Menu className='menu myroute' />
         <Routes>
            <Route index element={<Registration props = {this.props.props}/>}/>
            <Route path="/Registration" element={<Registration props = {this.props.props}/>}/>
             <Route path="/About" element={<About />}/>
            <Route path="/Contact" element={ <Contact />}/>
            <Route path="*" element={ <Error />}/> 
          </Routes>
      </Router>
    );
  }
}
 
export default App;