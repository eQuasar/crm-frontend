import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const CreateSubscription = () =>{

  const [variant, setVariant]=useState("")
  const[message,setMessage]=useState("");
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

    async function onFormSubmit(e){
        e.preventDefault()
        
        try{
          const result =   await axios.post('https://crm.isdemo.in/superadmin/subsCreate', subscription)
          // console.log(result.data.success)
          setMessage("SUCCESS : "+result.data.success)
             setVariant('success')
             setTimeout(function(){
              navigate('/subscription/Subscription')
          },3000)
        }
        catch (error){
          setMessage("ERROR : "+error.response.data.errors[0].message)
          setVariant('danger')
        }
        
    }

    return(
        <div className='createCompany content-wrapper'>
       {/* {auth ? <div className="user">
            <h2>Create Subscription</h2>
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
            <button onClick={e => onFormSubmit(e)} className='appButton'>Create Subscription</button>
           </form> 
        </div>
        : null}  */}

<Card style={{ width: '46rem', height: 'fit-content' }}>    
    <Card.Body>
    <div className='companyHeading'>
    <h5 style={{marginTop : '7.5px', fontSize : 'larger'}}>Add Subscription</h5>
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

      {message?<Alert  variant={variant}>{message}</Alert>:null}
      {/* {message?<Alert key="danger" variant="danger">{message}</Alert>:null} */}
      <buttton type="button" className="addSubscriptionSubmit"  onClick={e => onFormSubmit(e)}>Submit</buttton>

    </Form>
    </Card.Body>
    </Card>    
        
       
       </div>       
    )
}
export default CreateSubscription;
