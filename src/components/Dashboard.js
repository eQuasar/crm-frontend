import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Table from './Table'
import {Link, useNavigate} from 'react-router-dom';

const Dashboard=()=> {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/loginnn')
    }

    const[totalcompanies, setTotalCompanies] = useState();
    const[totalusers, setTotalUsers] = useState();
    const[totalsubscription, setTotalSubscription] = useState();

    useEffect(() => {
        loadDashboard();
    }, [])

    const loadDashboard = async e => {
        const result  = await axios.get("https://crm.isdemo.in/superadmin/dashboard");
        // console.log(result)
        // console.log(result.data.totalCompany)
        setTotalCompanies(result.data.totalCompany)
        setTotalUsers(result.data.totalEmployee)
        setTotalSubscription(result.data.totalSubscription)
        //  setAbsentEmployees(result.data.absentList)

     
        // console.log(absentEmployees)
        // setLeadId(result.data.leads.lead_id)
        //  setLead(result.data.leads)
        //  setAgent(result.data.agent)
         //console.log(view)
    }

  return (
    <div>
    {auth ? <div className="content-wrapper">
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                    {/* <h3 className="m-0">CRM Dashboard</h3> */}
                    <img style={{ marginTop: '8px' }} className='equasar' src='./eQuasar.png' alt='' />
                    {/* <h1 className="m-0">Dashboard</h1> */}
                {/* </div> */}
                </div>
                {/* <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#/">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                    </ol>
                </div> */}
                
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='container-fluid'>
            <div className="row">

                <div className="col-lg-4 col-6">

                    <div className="small-box  totalcompanies">
                        <div className="inner">
                            <h3>{totalcompanies}</h3>
                            <p>Total Companies</p>
                        </div>
                        <div className="icon">
                        <i class="nav-icon fas fa-city sidebarFont" style={{color : '#7276ec'}}></i>  
                        </div>
                        {/* <a href="#/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                    </div>
                </div>

                <div className="col-lg-4 col-6">

                    <div className="small-box  totalusers">
                        <div className="inner">
                            <h3>{totalusers}</h3>
                            <p>Total Users</p>
                        </div>
                        <div className="icon">
                        <i class="nav-icon fas fa-users" style={{color : 'RGB(96 234 210)'}}></i>
                        </div>
                        {/* <a href="#/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                    </div>
                </div>

                <div className="col-lg-4 col-6">

                    <div className="small-box  totalsubscription">
                        <div className="inner">
                            <h3>{totalsubscription}</h3>
                            <p>Total Subscriptions</p>
                        </div>
                        <div className="icon">
                        <i class="nav-icon fas fa-bookmark" style={{color : '#f43f5e'}}></i>
                        </div>
                        {/* <a href="#/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                    </div>
                </div>

                {/* <div className="col-lg-3 col-6">

                    <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>65</h3>
                            <p>Unique Visitors</p>
                        </div>
                        <div className="icon">
                        <i class="fas fa-chart-pie"></i>
                        </div>
                        <a href="#/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div> */}

            </div>
            {/* <Table /> */}
            </div>
        </div>
    </div>
    :
    null }
 
  </div>
  )
}
export default Dashboard;
