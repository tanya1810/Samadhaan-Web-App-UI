import React from 'react';
import './main.css';
import {Link} from 'react-router-dom';

const mainpg = () =>{
   return ( 
<div>

<nav className="navbar navbar-dark bg-dark">
   <a className="navbar-brand" href="#">
     <img src="https://lh3.googleusercontent.com/Jsvb9oenmsRPG1-L2sjEiigWf-jKLzIdxzYxfgS5jzsnizZrJTKeU3Scl3MHXM672-qz=s180-rw" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
    Samadhan
   </a>
 </nav>
   <div id="im">
   	<img src="https://image.freepik.com/free-vector/four-female-hands-support-each-other_102172-207.jpg" width="250" height="250" />
   </div>
    <div id="hd" className="display-1">
 	     Sama<span>dhaan</span> 
          <div>City</div>
    </div> 
    <div id="dd"> 
          <button type="button"  className="btn btn-outline-dark btn-lg" ><Link to="/dashboard">DASHBOARD</Link></button>
	      <button  type="button" id="ee" className="btn btn-outline-dark btn-lg" ><Link to='/complaints'>COMPLAINTS</Link></button>
	</div>     
	<div id="lo"> 
	      <button  type="button"  className="btn btn-outline-dark btn-md" ><Link to='/'> LOGOUT</Link></button>
    </div>
</div>   
   ); 
}
export default mainpg;