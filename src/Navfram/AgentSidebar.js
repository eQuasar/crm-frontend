import React,{useState} from 'react'
import './Test.css'
import logo from './images/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AgentSidebar=()=>{

    const [open, setOpen] = useState(false);
    const auth= localStorage.getItem('user')
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('/login')
    }
    
    const add=()=>{
        navigate('/add')
    }
    
    const role = localStorage.getItem('UserRole')

  return (
    <>

    { auth && role=='"3"' ? <aside className="main-sidebar sidebar-dark-primary">

     <div 
      className="brand-link">eQuasar
      <img src={logo} alt="Logo" className="brand-image" />
      </div>

     <div className="sidebar">
     <br/>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
        <li className="nav-item">
            <NavLink to="/" className="nav-link" >
            <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
               Dashboard
              </p>
              </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/customer/managecustomer" className="nav-link" >
            <i className='nav-icon fas fa-file-alt'></i>
              <p>
               Customers Data
              </p>
              </NavLink>
          </li>
          
           {/* <li className="nav-item">
            <a href="/customer/managecustomer" className="nav-link">
            <i className='nav-icon fas fa-file-alt'></i>
              <p>
                Customers Data
              </p>
            </a>
          </li>  */}

          {/* <li className="nav-item">
            <a href="/customer/managecustomer" className="nav-link">
            <i class="fi fi-rr-envelope"></i>
              <p>
                Collapse Data
              </p>
            </a>
          </li>  */}
          
          <li onClick={logout} className="nav-item">
            <NavLink to="/login" className="nav-link" >
              <i className="nav-icon fa fa-power-off"></i>
              <p onClick={logout}>
                Logout
              </p>
              </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  </aside>

  :
  null} 
        
            
  </>
  )
}
export default AgentSidebar;
