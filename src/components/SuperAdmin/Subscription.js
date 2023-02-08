import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Subscription = ()=> {
    const [subscriptions, setSubscriptions] = useState([]);
    // const { id } = useParams();

    useEffect(() =>{
        getAllSubscriptions();
    }, [] );

    async function getAllSubscriptions(){
      try {
        const subscriptions = await axios.get("https://crm.isdemo.in/superadmin/subsFindAll")
        // console.log(users.data)
        setSubscriptions(subscriptions.data.data.reverse())
      }
      catch (error) {
        console.log("Something is wrong")
      }
    }

    const navigate = useNavigate();

    const routeChange =event=>{
      
      var id=event.currentTarget.dataset.rowid;
      let path = `/subscription/edit/`+id;
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

    const handleDeleteSubscription = async id => {
      await axios.delete(`https://crm.isdemo.in/superadmin/subs/${did}`)
      var newsubscriptions = subscriptions.filter((item) =>{
        return item.id !== id;
      })
      setSubscriptions(newsubscriptions);
      window.location.reload();
    }


    function handleAddSubscription(){
      navigate('/subscription/create')
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
            
                }}>Subscription List</h2>
                <buttton className='addsubscriptionbutton' onClick={handleAddSubscription}><h6 style={{paddingTop : '5px'}}>Add Subscription</h6></buttton>

              </div>

            <Modal show={showDelete} onHide={handleDeleteClose}>
        <div className='ModalHeading'>
        <Modal.Header closeButton>
          <Modal.Title style={{color : 'white'}}><h5>Delete Subscription</h5></Modal.Title>
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
          <buttton className='saveChanges'   onClick={handleDeleteSubscription}>Delete Data</buttton>
        </Modal.Footer>
      </Modal>

            

    <div className='tabledata'>
   <table class="table border shadow">             
   <thead class="table-heading">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Subscription Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Duration in days</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          subscriptions.map((subscriptions, index) =>{
            return (
              <tr className='table-row'>
                <th scope="row">{index + 1}</th>
                <td>{subscriptions.sub_name}</td>
                <td>{subscriptions.amount}</td>
                <td>{subscriptions.duration_in_days}</td>
                <td>
                <div className='addIcons'>
                <i class="bi bi-pencil-square" style={{cursor : 'pointer', color: 'seagreen', verticalAlign:"center"}} onClick={routeChange} data-rowid={subscriptions.id}></i>
                <i class="bi bi-trash3-fill" style={{color: "crimson", cursor: 'pointer',verticalAlign:"center"}} data-rowid={subscriptions.id} onClick ={handleDeleteShow}></i>
                {/* <h5 className='deleteIcon' style={{color: "crimson", cursor: 'pointer',verticalAlign:"center"}}><AiFillDelete data-rowid={user.id} onClick ={() => handleDelete(user.id)}/></h5> */}
                </div>
                {/* <Button variant="primary mr-2">View</Button>
                <Button variant="secondary mr-2" data-rowid={subscriptions.id} onClick={routeChange}>Edit</Button>
               <Button variant="danger" data-rowid={subscriptions.id} onClick ={() => handleDelete(subscriptions.id)}>Delete</Button> */}
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

export default Subscription;