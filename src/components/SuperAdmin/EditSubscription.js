import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const EditSubscription = () =>{

    const [variant, setVariant]=useState("")
    const[message,setMessage]=useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');

    const [subscription , setSubscription] = useState({
    sub_name: "",
    amount: "",
    duration_in_days: ""
    })

    const {sub_name, amount, duration_in_days} = subscription;

    function onInputChange(e){
        setSubscription({
            ...subscription,
            [e.target.name]: e.target.value
        })
    }
    
    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async e => {
        const result  = await axios.get(`https://crm.isdemo.in/superadmin/subs/${id}`);
        console.log(result)
         setSubscription(result.data.data[0])
    }

    async function onFormSubmit(e){
        e.preventDefault()
        
        try{
            const edit = await axios.put(`https://crm.isdemo.in/superadmin/subs/${id}`, subscription)
            console.log(edit.data.Success)
             setMessage("SUCCESS : "+edit.data.Success)
             setVariant('success')
            //  alert(edit.data.Success)
            setTimeout(function(){
                navigate('/subscription/Subscription')
            },3000)
            //navigate('/subscription/Subscription')
        }
        
        catch (error){
            setMessage("ERROR : "+error.response.data.errors[0].message)
            setVariant('danger')
        }

        
        
    }

    return(
        <div className='createCompany content-wrapper'>
       {/* {auth ? <div className="user">
            <h2>Edit Subscription</h2>
           <form onSubmit={e => onFormSubmit(e) }>
            <input type='text' placeholder='Enter subscription name' className='inputBox' 
            name="sub_name" id='sub_name' value={sub_name} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter subscription amount' className='inputBox' 
            name="amount" id='amount' value={amount} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter duaration days ' className='inputBox' 
            name="duration_in_days" id='duration_in_days' value={duration_in_days} onChange={e => onInputChange(e)}
            />
            <button onClick={e => onFormSubmit(e)} className='appButton'>Update Subscription</button>
           </form> 
        </div>
        : null }  */}

<Card style={{ width: '46rem' , marginBottom : '7rem', marginTop : '1.5rem', height: 'fit-content' }}>    
    <Card.Body>
    <div className='companyHeading'>
    <h5 style={{marginTop : '7.5px', fontSize : 'larger'}}>Edit Subscription Profile</h5>
    </div>

    <Form>
    <Form.Group className="mb-3" >
        <Form.Label>Subscription Name</Form.Label>
        <Form.Control type="text" placeholder="Enter subscription name" 
        name="sub_name" id='sub_name' value={sub_name} onChange={e => onInputChange(e)}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" placeholder="Enter subscription amount" 
        name="amount" id='amount' value={amount} onChange={e => onInputChange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Duration_In_Days</Form.Label>
        <Form.Control type="text" placeholder="Enter duration days" 
         name="duration_in_days" id='duration_in_days' value={duration_in_days} onChange={e => onInputChange(e)}/>
      </Form.Group>


       {/* {message?<Alert key="success" variant="success">{message}</Alert>:null}  */}
      {message?<Alert  variant={variant}>{message}</Alert>:null}
      {/* {navigate('/subscription/Subscription')} */}
      <buttton type="button" className="editsubscriptionsubmit"  onClick={e => onFormSubmit(e)}>Submit</buttton>

    </Form>
    </Card.Body>
    </Card>    
      
       </div>       
    )
}
export default EditSubscription;
