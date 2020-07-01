import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
const bar =() => {
  return(
                  <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <span className="navbar-brand mb-0 h1"><h1>Sama<span>dhaan</span>
                      </h1></span>
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-4" >
                          <Link to='/mainmenu'><FontAwesomeIcon className="fa fa-home fa-3x" icon={faHome} /></Link>
                        </li>
                       <li className="nav-item">
                        <Link to='/loginpg'><FontAwesomeIcon className="fa fa-user fa-3x" icon={faUser} /></Link>
                       </li>
                     </ul>
                   </nav>
                  </div>
);
}

export default bar;