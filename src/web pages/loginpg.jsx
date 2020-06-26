import React from 'react';
import './loginpg.css';
import {Link} from 'react-router-dom';

const login = () => {
  return (
<div className="wrapper fadeInDown">
    <div id="formContent">
    
        <div class="fadeIn first">
            <img src="https://image.freepik.com/free-vector/login-concept-illustration_114360-757.jpg" id="icon" alt="User Icon" />
        </div>

        <div id="ll">
            <h1><b>Admin</b><span><b>Login</b></span></h1>
        </div>

        <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username" />
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password" />
            <Link to='/mainmenu'><input type="submit" className="fadeIn fourth" value="Submit" /></Link>
        </form>

    </div>
</div>
  );
  }
  export default login;