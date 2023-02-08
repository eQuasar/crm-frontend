// import React from 'react'
// import Table from './Table'
// import {Link, useNavigate} from 'react-router-dom';

// const Student=()=> {
//     const auth = localStorage.getItem('user');
//     const navigate = useNavigate();
//     const logout=()=>{
//         localStorage.clear();
//         navigate('/loginnn')
//     }
//   return (
//     <div>
//     {auth ? <div className="content-wrapper">
//         <div className="content-header">
//             <div className="container-fluid">
//                 <div className="row mb-2">
//                 <div className="col-sm-6">
//                     <h1 className="m-0">Dashboard</h1>
//                 </div>
//                 <div className="col-sm-6">
//                     <ol className="breadcrumb float-sm-right">
//                     <li className="breadcrumb-item"><a href="#/">Home</a></li>
//                     <li className="breadcrumb-item active">Dashboard v1</li>
//                     </ol>
//                 </div>
//                 </div>
//             </div>
//         </div>

//         <div className='content'>
//             <div className='container-fluid'>
//             <div className="row">
//                 <div className="col-lg-3 col-6">

//                     <div className="small-box bg-info">
//                         <div className="inner">
//                             <h3>150</h3>
//                             <p>New Orders</p>
//                         </div>
//                         <div className="icon">
//                         <i class="fas fa-shopping-bag"></i>  
//                         </div>
//                         <a href="#/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
//                     </div>
//                 </div>

//                 <div className="col-lg-3 col-6">

//                     <div className="small-box bg-success">
//                         <div className="inner">
//                             <h3>53<sup>%</sup></h3>
//                             <p>Bounce Rate</p>
//                         </div>
//                         <div className="icon">
//                         <i class="fas fa-chart-bar"></i>
//                         </div>
//                         <a href="#/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
//                     </div>
//                 </div>

//                 <div className="col-lg-3 col-6">

//                     <div className="small-box bg-warning">
//                         <div className="inner">
//                             <h3>44</h3>
//                             <p>User Registrations</p>
//                         </div>
//                         <div className="icon">
//                         <i class="fas fa-user"></i>
//                         </div>
//                         <a href="#/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
//                     </div>
//                 </div>

//                 <div className="col-lg-3 col-6">

//                     <div className="small-box bg-danger">
//                         <div className="inner">
//                             <h3>65</h3>
//                             <p>Unique Visitors</p>
//                         </div>
//                         <div className="icon">
//                         <i class="fas fa-chart-pie"></i>
//                         </div>
//                         <a href="#/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
//                     </div>
//                 </div>

//             </div>
//             <Table />
//             </div>
//         </div>
//     </div>
//     :
//     <ul>
          
//     </ul>
//   }
//   </div>
//   )
// }
// export default Student;
