import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PvtComponent from './components/PvtComponent';
import Login from './components/Login';
import React from 'react'; 
import SuperSidebars from './Navfram/SuperSidebars'
//import './src/Navfram/Test.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Navfram/Topbar.js';
import {Link} from 'react-router-dom';
import AdminSidebar from './Navfram/AdminSidebar';
import Manage from './components/SuperAdmin/Manage';
import AddUser from './components/SuperAdmin/AddUser';
import EditUser from './components/SuperAdmin/EditUser';
import Subscription from './components/SuperAdmin/Subscription';
import CreateSubscription from './components/SuperAdmin/CreateSubscription';
import EditSubscription from './components/SuperAdmin/EditSubscription';
import CreateCompany from './components/SuperAdmin/CreateCompany';
import EditCompany from './components/SuperAdmin/EditCompany';
import ManageCompany from './components/SuperAdmin/ManageCompany';
import AgentSidebar from './Navfram/AgentSidebar';
import ManagerSidebar from './Navfram/ManagerSidebar';
import FileUpload from './components/SuperAdmin/FileUpload';
import Dropdown from './components/SuperAdmin/Dropdown';
import Form from './components/SuperAdmin/Form';
import Dashboard from './components/Dashboard';
import Manager from './components/Admin/manager'
import ManageCustomer from './components/customer/ManageCustomer'
import ViewCustomerr from './components/customer/ViewCustomerr';
import AgentData from './components/Manager/AgentData';

function App() { 
  
  return (
    
    <>
    
    <div className="App">
      <BrowserRouter>
      
      < Topbar /> 
      < SuperSidebars /> 
      <AdminSidebar />
      < ManagerSidebar />
      < AgentSidebar />
      <Routes>
      


        <Route element={<PvtComponent />}>
          
        <Route path="/" element={<Dashboard />}  />
        <Route path="users/manage" element={<Manage />} />
        <Route path="/users/add/:data" element={<AddUser />} />
        <Route path="/users/dropdown" element={<Dropdown />} />
        <Route path="/users/form" element={<Form />} />
        <Route path="/users/edit/:id/:data" element={<EditUser />} />
        <Route path="/company/manage" element={<ManageCompany />} />
        <Route path="/company/create" element={<CreateCompany />} />
        <Route path="/company/edit/:id" element={<EditCompany />} />
        <Route path="/subscription/Subscription" element={<Subscription />} />
        <Route path="/subscription/create" element={<CreateSubscription />} />
        <Route path="/subscription/Edit/:id" element={<EditSubscription />} />
        <Route path="/users/upload" element={< FileUpload />} />
        <Route path="/profile" element={<h1>Show User Profile </h1>} />
        <Route path="/Admin/manager" element={ <Manager />} />
        <Route path="/customer/managecustomer" element={ <ManageCustomer />} />
        <Route path="/components/Manager/AgentData" element={ <AgentData />} />
        <Route path="/customer/View/:id" element={ <ViewCustomerr /> } />
        <Route path="/logout" element={<h1>Logout User</h1>} />
        </Route>

        
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>

    </div>
        </> 
        
        
        
        
       
  );
}

export default App;
