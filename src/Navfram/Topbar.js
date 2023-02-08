import React from 'react'
import '../Navfram/Test.css'
import {Link, useNavigate} from 'react-router-dom'

const Topbar=()=>{ 
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  
  return (
<>
{ auth ? <div className="wrapper">
  <nav  className="main-header navbar navbar-expand navbar-white navbar-light">

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="/#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>

    <ul className="navbar-nav ml-auto">
      {/* <li className="nav-item">
        <a className="nav-link" data-widget="navbar-search" href="/#" role="button">
          <i className="fas fa-search"></i>
        </a>
        <div className="navbar-search-block">
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search"></i>
                </button>
                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li> */}


      {/* <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="/#">
          <i className="fas fa-comments"></i>
        </a>
      </li> */}

      {/* <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="/#">
        <i className="fas fa-bell"></i>
        </a>
      </li> */}
    </ul>
  </nav>
</div>
:
null}

</>
  )
}
export default Topbar;
