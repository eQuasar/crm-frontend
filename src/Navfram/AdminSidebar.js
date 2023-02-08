import React from 'react'
import  './Test.css'
import logo from './images/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { NavLink } from 'react-router-dom';

const AdminSidebar=()=>{
    const auth= localStorage.getItem('user')
    const navigate = useNavigate();

    // const logout =()=>{
    //     localStorage.clear();
    //     navigate('/login')
    // }
    
    function logout(){
      localStorage.clear();
        navigate('/login')
    }

    //  <Link onClick={logout} to="/login">Logout</Link>

    const role = localStorage.getItem('UserRole')

    
  return (
    <>
    { auth  && role== '"1"' ? <aside className="main-sidebar sidebar-dark-primary">

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
            <NavLink to="/Admin/manager" className="nav-link" >
            <i className="nav-icon fas fa-user-friends"></i>
              <p>
               Manager List
              </p>
              </NavLink>
          </li>

          {/* <li className="nav-item">
            <a href="/Admin/manager" className="nav-link">
            <i className="nav-icon fas fa-user-friends"></i>
              <p>
                Manager List
              </p>
            </a>
          </li> */}

          {/* <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
            <i class="fi fi-rr-envelope"></i>
              <p>
                Agent
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="users/form" className="nav-link">
            <i class="fi fi-rr-envelope"></i>
              <p>
                Form
              </p>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="/users/upload" className="nav-link">
            <i className="nav-icon fas fa-file-upload"></i>
              <p>
                Upload List
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

  :
  null
        //     <ul className="nav-ul">
        //     <li><Link to="/login">Login</Link></li>
        //  </ul>
 }            
  </>
  )
}
export default AdminSidebar;
