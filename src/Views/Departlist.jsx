import React from 'react';
import './Departlist.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
const Departlist = () =>{
    return(
       <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <span className="navbar-brand mb-0 h1"><h1>Sama<span>dhaan</span>
                      </h1></span>
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-4" >
                          <Link to='/complaints'><FontAwesomeIcon className="fa fa-backspace fa-3x" icon={faBackspace} /></Link>
                        </li>
                     </ul>
        </nav>
        <div className="container">
                         <div>
                             <h1>
                              Choose a Department   
                             </h1>
                         </div>
                         <div id="yo">
                           <button className="btn btn-outline-dark">Animal Husbandry</button> 
                           <button className="btn btn-outline-secondary">BDPO </button> 
                           <button className="btn btn-outline-primary">Civil Hospital</button> 
                           <button className="btn btn-outline-dark">DHBVN(Urban)</button>  
                           <button className="btn btn-outline-secondary">DHBVN(Rural)</button>  
                           <button className="btn btn-outline-primary">Distt. Town planner</button>  
                           <button className="btn btn-outline-dark">Education(Elementary)</button>  
                           <button className="btn btn-outline-secondary">Education(Higher)</button>  
                           <button className="btn btn-outline-primary">Fire Department</button>  
                           <button className="btn btn-outline-dark">HVPNL</button>  
                           <button className="btn btn-outline-secondary">Irrigation</button>  
                           <button className="btn btn-outline-primary">Nagar Parishad</button>  
                           <button className="btn btn-outline-dark">PWD</button>  
                           <button className="btn btn-outline-secondary">PUBLIC HEALTH(Water)</button>  
                           <button className="btn btn-outline-primary">PUBLIC HEALTH(Sewage)</button>  
                           <button className="btn btn-outline-dark">PUBLIC HEALTH(Reny Well)</button>  
                           <button className="btn btn-outline-secondary">Social Welfare</button>  
                           <button className="btn btn-outline-primary">Tehsil</button>  

                         </div>

                     </div>
       </div>
    );
}
export default Departlist;