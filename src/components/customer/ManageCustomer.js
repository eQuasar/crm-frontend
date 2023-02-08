import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import { GrView } from "react-icons/gr"
// import view from './assets/img/eye.png'

const ManageCustomer = ()=> {
    const [customer, setCustomer] = useState([]);
    const [cust_id, setCust_Id] = useState();
     //const { id } = useParams();

    useEffect(() =>{
        getAllCustomer();
    }, [] );

    async function getAllCustomer(){
      try {
        const customer = await axios.get("https://crm.isdemo.in/agent/leadByAgentId/14")
        // console.log(users.data)
       // console.log(customer)
        //console.log(customer.data.data.id)
        setCustomer(customer.data.data.reverse())
      }
      catch (error) {
        console.log("Something is wrong")
      }
    }

    const navigate = useNavigate();

    const routeChange =event=>{
      
      var id=event.currentTarget.dataset.rowid;
      let path = `/customer/view/`+id;
      navigate(path); 
    } 

    
    
    // const handleDelete = async id => {
    //   await axios.delete(`https://crm.isdemo.in/superadmin/subs/${id}`)
    //   var newsubscriptions = subscriptions.filter((item) =>{
    //     return item.id !== id;
    //   })
    //   setSubscriptions(newsubscriptions);
    // }


    return (
        <div className="content-wrapper">
            <div className="py-4">
                <h3 style={{color : '#208cad'}}>Customers List</h3>

                <div className='tabledata'>            
   <table class="table border shadow">             
   <thead class="table-heading">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Contact No</th>
          <th scope="col">Agent Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          customer.map((customer, index) =>{
            return (
              <tr className='table-row'>
                <th scope="row">{index + 1}</th>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.name}</td>
                <td>
                <div className='icons-customer'>
                {/* <img src={view} alt="view" className="view" /> */}
                <i data-rowid={customer.id} onClick={routeChange} style={{cursor : 'pointer'}} class="fa fa-eye"></i>
                  {/* <h3>{GrView}</h3> */}
                {/* <i data-rowid={customer.id} onClick={routeChange} class="bi bi-binoculars" style={{cursor : 'pointer', color: 'blue', verticalAlign:"center"}} data-rowid={customer.id} onClick={routeChange}></i> */}
                {/* <i class="bi bi-pencil-square" style={{cursor : 'pointer', color: 'seagreen', verticalAlign:"center"}} onClick={routeChange} data-rowid={customer.id}></i>
                <i class="bi bi-trash3-fill" style={{color: "crimson", cursor: 'pointer',verticalAlign:"center"}} data-rowid={customer.id}></i> */}
                </div>
                {/* <Button variant="primary mr-2" data-rowid={customer.id} onClick={routeChange}>View</Button> */}
                {/* <Button variant="secondary mr-2" data-rowid={customer.id}>Edit</Button>
               <Button variant="danger" data-rowid={customer.id}>Delete</Button> */}
                </td>
              </tr>
            )
          
          })
            
        }
      </tbody>
</table>
        </div>
            </div>
        </div>
    )

}

export default ManageCustomer;

