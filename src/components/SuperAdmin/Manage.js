import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AiFillDelete } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';

const Manage = ()=> {
  
     const [users, setUsers] = useState([]);
     const { id } = useParams();

    useEffect(() =>{
        getAllUser();
    }, [] );

    async function getAllUser(){
      try {
        const users = await axios.get("https://crm.isdemo.in/superadmin/findAll")
        console.log(users)
        // console.log(users.data)
        setUsers(users.data.data.reverse())
      }
      catch (error) {
        console.log("Something is wrong")
      }
    }

    const navigate = useNavigate();

    const routeChange =event=>{
      var data="superadmin";
      var id=event.currentTarget.dataset.rowid;
      let path = `/users/edit/`+id+`/`+data;
      navigate(path); 
    }

    function handleAddUser(){
      var data="superadmin"
      navigate('/users/add/'+data)
    }
    
  //   const loadUser = async e => {
  //     const result  = await axios.get(`https://crm.isdemo.in/superadmin/findBy/${id}`);
  //      console.warn(result);
  // }
    
  // useEffect(() => {
  //   loadUser();
  // }, [])

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

    const handleDeleteUser = async id => {
      await axios.delete(`https://crm.isdemo.in/superadmin/findBy/${did}`)
      var newusers = users.filter((item) =>{
        return item.id !== id;
      })
      setUsers(newusers);
      window.location.reload();
    }


      
 

   
    // const editUser =()=>{
    //   // e.preventDefault()

    //   try{
    //     Navigate('/users/edit')
    //   }

    //   catch(error){
    //     alert('Something went wrong')
    //   }
    // }

    // const loadUsers = async() => {
    //     const result = await axios.get("https://crm.isdemo.in/superadmin/findAll");
    //     setUser(result.data);
    //     console.warn(result)
    // };


    return (
        <div className="content-wrapper ">
            <div className="py-4 ">

              {/* ///////////// Modal Delete /////////////// */}

              <Modal show={showDelete} onHide={handleDeleteClose}>
        <div className='ModalHeading'>
        <Modal.Header closeButton>
          <Modal.Title style={{color : 'white'}}><h5>Delete User</h5></Modal.Title>
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
          <buttton className='saveChanges'   onClick={handleDeleteUser}>Delete Data</buttton>
        </Modal.Footer>
      </Modal>


            <div className='company'>
                <h2 style={{
                fontSize:"1.5rem",
                marginBottom:"0px",
                color:'#208cad',
                marginLeft : '4px', 
                marginTop: '10px'
            
                }}>Users Data</h2>
                <buttton className='adduser' onClick={handleAddUser}><h6 style={{paddingTop : '5px'}}>Add User</h6></buttton>

              </div>
                {/* <h2>Users Data</h2> */}

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
               <div className='addIcons'>
                <i class="bi bi-pencil-square" style={{cursor : 'pointer', color: 'seagreen', verticalAlign:"center", marginRight: '-25px'}} onClick={routeChange} data-rowid={user.id}></i>
                <i class="bi bi-trash3-fill" style={{color: "crimson", cursor: 'pointer',verticalAlign:"center"}} data-rowid={user.id} onClick ={handleDeleteShow}></i>
                {/* <h5 className='deleteIcon' style={{color: "crimson", cursor: 'pointer',verticalAlign:"center"}}><AiFillDelete data-rowid={user.id} onClick ={() => handleDelete(user.id)}/></h5> */}
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

export default Manage;