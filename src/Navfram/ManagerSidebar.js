import React from 'react'
import './Test.css'
import logo from './images/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const ManagerSidebar=()=>{
    const auth= localStorage.getItem('user')
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('/login')
    }
    
    // const add=()=>{
    //     navigate('/add')
    // }
    
    const role = localStorage.getItem('UserRole')
  return (
    <>
    { auth && role=='"2"' ? <aside className="main-sidebar sidebar-dark-primary">
    <div 
      className="brand-link">eQuasar
      <img src={logo} alt="Logo" className="brand-image" />
      </div>

     <div className="sidebar">
     <br/>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
        <li className="nav-item">
            <NavLink to="/" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
               Dashboard
              </p>
              </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/components/Manager/AgentData" className="nav-link" >
            <i className="nav-icon fas fa-file-alt"></i>
              <p>
               Agent List
              </p>
              </NavLink>
          </li>
          
          {/* <li className="nav-item">
            <a href="/components/Manager/AgentData" className="nav-link">
            <i className='nav-icon fas fa-file-alt'></i>
              <p>
                 Agent Data
              </p>
            </a>
          </li> */}
          
          {/* <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
            <i class="fi fi-rr-envelope"></i>
              <p>
                Students
              </p>
            </a>
          </li> */}
          
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

  : null} 
  
        
            
  </>
  )
}
export default ManagerSidebar;
