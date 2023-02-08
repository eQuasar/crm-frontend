import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditUser from '../SuperAdmin/EditUser';

const Manager =()=>{
 

const [users, setUsers] = useState([]);

    
     const{ id } = useParams();

    useEffect(() =>{
        getAllUser();
    }, [] );

    async function getAllUser(){
      try {
        const users = await axios.get("https://crm.isdemo.in/admin/findAll")
        // console.log(users)
        setUsers(users.data.data.reverse())
      }
      catch (error) {
        //console.log("Something went wrong")
      }
    }

    const navigate = useNavigate();

    const routeChange =event=>{
     
       var data="admin";
       var id= event.currentTarget.dataset.rowid
      let path = `/users/edit/`+id+`/`+data;
      navigate(path); 
    }
 
    function handleUploadList(){
      navigate('/users/upload')
    }

    function handleAddUser(){
      var data="admin";
      navigate('/users/add/'+data)
    }

    const [did, setDid] = useState("");

    const [showDelete, setShowDelete] = useState(false);
  
    const handleDeleteClose = () => setShowDelete(false);
  
    const handleDeleteShow = (event) => {
      var id=event.currentTarget.dataset.rowid;
      //console.log(id)
      setDid(id)
     // console.log(did)
      setShowDelete(true);
       
    }

    // alert(did)
    
    const handleDeleteManager = async id => {
     // console.log(id)
      const result = await axios.delete(`https://crm.isdemo.in/superadmin/findBy/${did}`)
     // console.log(result)
      var newusers = users.filter((item) =>{
        return item.id !== id;
      })
      setUsers(newusers);
      window.location.reload();
    }

    return (
     
        <div className="content-wrapper ">
            <div className="py-4 ">

            <div className='company'>
                <h2 style={{
                fontSize:"1.5rem",
                marginBottom:"0px",
                color:'#208cad',
                marginLeft : '4px', 
                marginTop: '10px'
            
                }}>Manager List</h2>

              <div className='adminButton'>
                <buttton className='add-admin' onClick={handleAddUser}><h6 style={{paddingTop : '5px'}}>Add User</h6></buttton>
                <buttton className='addcompanybutton' onClick={handleUploadList}><h6 style={{paddingTop : '5px'}}>Upload List</h6></buttton>
              </div>

              </div>
              
            
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
          <buttton className='saveChanges'  onClick={handleDeleteManager}>Delete Data</buttton>
        </Modal.Footer>
      </Modal>
                

    <div className='tabledata'>
   <table class="table border shadow ">             
   <thead class="table-heading">
        <tr>
          <th  scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) =>{
            return (
              <tr className='table-row'>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                {/* <Button variant="primary mr-2">View</Button> */}
                {/* <Button variant="secondary mr-2" data-rowid={user.id} onClick={routeChange}>Edit</Button>
                <Button variant="danger" data-rowid={user.id} onClick ={() => handleDelete(user.id)}>Delete</Button> */}
                <div className='icons-manager'>
                <i class="bi bi-pencil-square" style={{cursor : 'pointer', color: 'seagreen', verticalAlign:"center"}} onClick={routeChange} data-rowid={user.id}></i>
                <i class="bi bi-trash3-fill" style={{color: "crimson", cursor: 'pointer',verticalAlign:"center"}} data-rowid={user.id} onClick ={handleDeleteShow}></i>
                {/*  */}
                </div>
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
export default Manager;

