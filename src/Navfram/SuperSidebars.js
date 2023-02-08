import React from 'react'
import './Test.css'
import logo from './images/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const SuperSidebars=()=>{
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
    // const add=()=>{
    //     navigate('/add')
    // }
    const role = localStorage.getItem('UserRole')
    // console.warn(role);
  return (
    <>

    { auth && role=='"0"' ? <aside className="main-sidebar sidebar-dark-primary mySidebar elevation-4">

    <div 
      className="brand-link">eQuasar
      <img src={logo} alt="Logo" className="brand-image" />
      </div>

     <div className="sidebar">
     <br/>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* <li className="nav-item menu-open">
            <a href="/" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p >
                Dashboard
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
          </li> */}

          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact activeStyles={{fontWeight: "bold", color: "red"}}>
            <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
               Dashboard
              </p>
              </NavLink>
          </li>
         
          {/* <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
            <i class="fi fi-rr-envelope"></i>
              <p>
                Manage
              </p>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
            <i class="fi fi-rr-envelope"></i>
              <p>
                Manager
              </p>
            </a>
          </li> */}
           {/* <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
            <i class="fi fi-rr-envelope"></i>
              <p>
                Executives
              </p>
            </a>
          </li>  */}
          {/* <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
            <i class="fi fi-rr-envelope"></i>
              <p>
                Students
              </p>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="/#" className="nav-link">
              <i className="nav-icon fas fa-copy"></i>
              <p>
                Home
              </p>
            </a>
          </li> */}


          {/* <NavLink to="/users/manage" exact activeClassName="selected">Users</NavLink>

          <NavLink to="/company/manage" activeClassName="selected">Company</NavLink> */}

          <li className="nav-item">
            <NavLink to="/company/manage" className="nav-link" exact activeStyles={{fontWeight: "bold", color: "red"}}>
              <i className="nav-icon fas fa-city sidebarFont"></i>
              <p>
               Company List
              </p>
              </NavLink>
          </li>

            {/* <Link to="/company/manage" className="nav-link">
              <i className="nav-icon fas fa-city sidebarFont"></i>
              <p>
               Company
              </p>
              </Link> */}
          

          

          {/* <li className="nav-item">
            <a href="/company/create" className="nav-link">
              <i className="nav-icon fas fa-chart-pie"></i>
              <p>
                Create Company
              </p>
            </a>
          </li> */}

          <li className="nav-item">
            <NavLink to="/users/manage" className="nav-link" exact activeStyles={{fontWeight: "bold", color: "red"}}>
              <i className="nav-icon fas fa-users"></i>
              <p>
               User List
              </p>
              </NavLink>
          </li>


          {/* <li className="nav-item">
            <Link to="/users/manage" className="nav-link">
              <i className="nav-icon fas fa-users"></i>
              <p>
               User
              </p>
            </Link>
          </li> */}

          <li className="nav-item">
            <NavLink to="/subscription/Subscription" className="nav-link" exact activeStyles={{fontWeight: "bold", color: "red"}}>
            <i className="nav-icon fas fa-bookmark"></i>
              <p>
               Subscription List
              </p>
              </NavLink>
          </li>

          {/* <li className="nav-item">
            <a href="/subscription/create" className="nav-link">
              <i className="nav-icon fas fa-chart-pie"></i>
              <p>
                CreateSubscription
              </p>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="/users/add" className="nav-link">
              <i className="nav-icon fas fa-tree"></i>
              <p>
                Add User
              </p>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="/update" className="nav-link">
              <i className="nav-icon fas fa-tree"></i>
              <p>
                Executives
              </p>
            </a>
          </li> */}
           {/* <li className="nav-item">
            <a href="/profile" className="nav-link">
              <i className="nav-icon fas fa-tree"></i>
              <p>
                Profile
              </p>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="/#" className="nav-link">
              <i className="nav-icon fas fa-edit"></i>
              <p>
                Analytics
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

          {/* <li className="nav-item">
          <a href="/logout" className="nav-link">
          <i style={{Color : 'red'}} className="nav-icon fa fa-power-off"></i>
          <Link onClick={logout} to="/login">Logout</Link>
          </a>
          </li> */}
        </ul>
      </nav>
    </div>
  </aside>

  :
  null}  
             {/* <ul className="nav-ul">
             <li><Link to="/login">Login</Link></li>
          </ul> */}

           
  </>
  )
}
export default SuperSidebars;
