// import React from "react";
// import "./Test.css";
// import logo from "./images/logo.jpg";
// import { Link, useNavigate } from "react-router-dom";

// const SuperSidebar = () => {
//   const auth = localStorage.getItem("user");
//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   const role = localStorage.getItem("UserRole");

//   return (
//     <>
//       {
//         auth && role == '"0"' ? (
//           <aside className="main-sidebar sidebar-dark-primary">
//             <a href="index3.html" className="brand-link">
//               <img src={logo} alt="Logo" className="brand-image" />
//             </a>

//             <div className="sidebar">
//               <br />
//               <nav className="mt-2">
//                 <ul
//                   className="nav nav-pills nav-sidebar flex-column"
//                   data-widget="treeview"
//                   role="menu"
//                   data-accordion="false"
//                 >
//                   <li className="nav-item menu-open">
//                     <a href="/" className="nav-link active">
//                       <i className="nav-icon fas fa-tachometer-alt"></i>
//                       <p>
//                         Dashboard
//                         <i className="right fas fa-angle-left"></i>
//                       </p>
//                     </a>
//                   </li>

//                   <li className="nav-item">
//                     <a href="/company/manage" className="nav-link">
//                       <i className="nav-icon fas fa-chart-pie"></i>
//                       <p>Company Profile</p>
//                     </a>
//                   </li>

//                   <li className="nav-item">
//                     <a href="/users/manage" className="nav-link">
//                       <i className="nav-icon fas fa-chart-pie"></i>
//                       <p>User</p>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="/subscription/Subscription" className="nav-link">
//                       <i className="nav-icon fas fa-chart-pie"></i>
//                       <p>Subscription</p>
//                     </a>
//                   </li>

//                   <li className="nav-item">
//                     <a href="/logout" className="nav-link">
//                       <i className="nav-icon fas fa-table"></i>
//                       <Link onClick={logout} to="/login">
//                         Logout
//                       </Link>
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </aside>
//         ) : (
//           <ul></ul>
//         )
//         //     <ul className="nav-ul">
//         //     <li><Link to="/login">Login</Link></li>
//         //  </ul>
//       }
//     </>
//   );
// };
// export default SuperSidebar;
