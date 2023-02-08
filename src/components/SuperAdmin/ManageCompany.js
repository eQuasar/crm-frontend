import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { NonceProvider } from 'react-select';
import { AiFillDelete } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';

const ManageCompany = ()=> {
    const [company, setCompanyProfile] = useState([]);
    const { id } = useParams();

    useEffect(() =>{
        getAllCompanyProfile();
    }, [] );

    async function getAllCompanyProfile(){
      try {
        const company = await axios.get("https://crm.isdemo.in/superadmin/fetch")
        console.log(company)
        console.log(company.data.newArray)
        // console.log(users.data)
        // setCompanyProfile(company.data.data.reverse())
        setCompanyProfile(company.data.newArray.reverse())
      }
      catch (error) {
        console.log("Something went wrong")
      }
    }

    const navigate = useNavigate();

    const routeChange =event=>{
      
      var id = event.currentTarget.dataset.rowid;
      let path = `/company/edit/`+id;
      navigate(path); 
    }
    
    const [did, setDid] = useState("");

    const [showDelete, setShowDelete] = useState(false);
  
    const handleDeleteClose = () => setShowDelete(false);
  
    const handleDeleteShow = (event) => {
      var id=event.currentTarget.dataset.rowid;
      console.log(id)
      setDid(id)
      console.log(did)
      setShowDelete(true);
  
    }

    const handleDeleteCompany = async id => {
      await axios.delete(`https://crm.isdemo.in/superadmin/comp/${did}`)
      var newcompany = company.filter((item) =>{
        return item.id !== id;
      })
      setCompanyProfile(newcompany);
      window.location.reload();
    }

    let bool = true;
    let text = bool.toString();
    
    function handleAddCompany(){
      navigate('/company/create')
    }

    return (
        <div className="content-wrapper">

            <div className="py-4">

            <div className='company'>
                <h2 style={{
                fontSize:"1.5rem",
                marginBottom:"0px",
                color:'#208cad',
                marginLeft : '4px', 
                marginTop: '10px'
            
                }}>Company List</h2>
                <buttton className='addcompany' onClick={handleAddCompany}><h6 style={{paddingTop : '5px'}}>Add Company</h6></buttton>

              </div>

      {/* ///////////// Modal Delete Starts ///////////// */}

            <Modal show={showDelete} onHide={handleDeleteClose}>
        <div className='ModalHeading'>
        <Modal.Header closeButton>
          <Modal.Title style={{color : 'white'}}><h5>Delete Company</h5></Modal.Title>
        </Modal.Header>
        </div>
        <Modal.Body>Are you sure want to delete this data ?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDeleteClose}>
            Cancel
          </Button>
          {/* <Button variant="primary" data-rowid={employees.id} onClick={handleDeleteEmployee}>
            Delete Data
          </Button> */}
          <buttton className='saveChanges' data-rowid={company.id} onClick={handleDeleteCompany}>Delete Data</buttton>
        </Modal.Footer>
      </Modal>

      {/* /////////////////  Modal Delete Close  ////////////////// */}

              

   <div className='tabledata'>             

   <table className="table border shadow">             
   <thead className="table-heading">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Company_Name</th>
          <th scope="col">GST_NO</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
          <th scope="col">Country</th>
          <th scope="col">Phone</th>
          <th scope="col">Contact_Person</th>
          <th scope="col">Subscription_ID</th>
          <th scope="col">Active</th>
          <th scope="col">Sub_Purchase_Date</th>
          <th scope="col">Validity</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          company.map((company, index) =>{
            return (
              <tr className='table-row'>
                <th scope="row">{index + 1}</th>
                <td>{company.comp_name}</td>
                <td>{company.gst_no}</td>
                <td>{company.city}</td>
                <td>{company.state}</td>
                <td>{company.country}</td>
                <td>{company.phone}</td>
                <td>{company.contact_person}</td>
                <td>{company.subscription_id}</td>
                <td>{company.active.toString()}</td>
                <td>{company.sub_purchase_date}</td>
                <td>{company.validity}</td>
                <td>
                {/* <Button variant="primary mr-2">View</Button> */}
                {/* <Button variant="secondary mr-2" data-rowid={company.id} onClick={routeChange}>Edit</Button> */}
                <div className='icons'>
                <i class="bi bi-pencil-square" style={{cursor : 'pointer', color: 'seagreen', verticalAlign:"center"}} onClick={routeChange} data-rowid={company.id}></i>
                <i class="bi bi-trash3-fill" style={{color: "crimson", cursor: 'pointer',verticalAlign:"center"}} data-rowid={company.id} onClick ={handleDeleteShow}></i>
                </div>
               {/* <Button variant="danger" data-rowid={company.id} onClick ={() => handleDelete(company.id)}>Delete</Button> */}
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

export default ManageCompany;