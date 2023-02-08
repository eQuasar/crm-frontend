import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const EditCompany = () =>{
    const [radioValue, setRadioValue] = useState();
    const[variant,setVariant]=useState("")
   
    const[message,setMessage]=useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');

    const [company , setCompany] = useState({
    comp_name: "",
    gst_no: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    contact_person: "",
    active:"",
    subscription_id: ""
    })

    const {comp_name,
    gst_no,
    city,
    state,
    country,
    phone,
    contact_person,
    active,
    subscription_id} = company;

    console.log(active)

    function onInputChange(e){
        setCompany({
            ...company,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async e => {
        const result  = await axios.get(`https://crm.isdemo.in/superadmin/comp/${id}`);
        
         setCompany(result.data.data[0])
         setRadioValue((Number(result.data.data[0].active)).toString())
         console.log(radioValue)
         
    }
 
    async function onFormSubmit(e){
        e.preventDefault()
        try{
            const edit =  await axios.put(`https://crm.isdemo.in/superadmin/comp/${id}`, company)
            setMessage("SUCCESS : "+edit.data.Success)
             setVariant('success')
             setTimeout(function(){
              navigate('/company/manage')
          },3000)
            //  alert(edit.data.Success)
            // navigate('/company/manage')
        }
        catch (error){
            setMessage("ERROR : "+error.response.data.errors[0].message)
            setVariant('danger')
        }
        
    }

    
     const radios = [
        { name: 'Active', value: '1' },
        { name: 'Inactive', value: '0'},
     ];
     console.log(radioValue)   

    return(
        <div className='createCompany  content-wrapper'>
       {/* {auth ? <div className="user">
            <h3>Update Company Profile</h3>
           <form onSubmit={e => onFormSubmit(e) }>
            <input type='text' placeholder='Enter company name' className='inputBox' 
            name="comp_name" id='comp_name' value={comp_name} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter gst no' className='inputBox' 
            name="gst_no" id='gst_no' value={gst_no} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter city name ' className='inputBox' 
            name="city" id='city' value={city} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter state name ' className='inputBox' 
            name="state" id='state' value={state} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter country name ' className='inputBox' 
            name="country" id='country' value={country} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter phone number ' className='inputBox' 
            name="phone" id='phone' value={phone} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter contact person ' className='inputBox' 
            name="contact_person" id='contact_person' value={contact_person} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter active state ' className='inputBox' 
            name="active" id='active' value={active} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter subscription id ' className='inputBox' 
            name="subscription_id" id='subscription_id' value={subscription_id} onChange={e => onInputChange(e)}
            />
            <button onClick={e => onFormSubmit(e)} className='appButton'>Update Company </button>
           </form> 
        </div>
        : null}  */}

<Card style={{ width: '46rem', height: 'fit-content' }}>    
    <Card.Body>
    <div className='companyHeading'>
    <h5 style={{marginTop : '7.5px', fontSize : 'larger'}}>Edit Company Profile</h5>
    </div>
        
    <Form>

    

        <Row className="mb-3">
        <Form.Group as={Col} >
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter company name" name="comp_name" id="comp_name" 
            value={comp_name} onChange={e => onInputChange(e)}/>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>Gst No</Form.Label>
            <Form.Control type="text" placeholder="Enter gst no" name="gst_no" id="gst_no"
            value={gst_no}  onChange={e => onInputChange(e)}/>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} >
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter city name" id="city" name="city" 
            value={city} onChange={e => onInputChange(e)} />
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter state name" id="state" value={state}
            name="state" onChange={e => onInputChange(e)} />
        </Form.Group>
        </Row>

        <Row className='mb-3'>
        <Form.Group as={Col} >
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Enter country name" id="country" name="country"
            value={country} onChange={e => onInputChange(e)} />
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>Phone No</Form.Label>
            <Form.Control type="text" placeholder="Enter phone no" id="phone" name="phone"
            value={phone} onChange={e => onInputChange(e)} />
        </Form.Group>
        </Row>

        <Row className='mb-3'>
        <Form.Group as={Col} >
            <Form.Label>Contact Person</Form.Label>
            <Form.Control type="text" placeholder="Enter Contact person" id="contact_person" name="contact_person"
            value={contact_person} onChange={e => onInputChange(e)} />
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>Subscription Id</Form.Label>
            <Form.Control type="text" placeholder="Enter subscription id" id="subscription_id" name="subscription_id"
            value={subscription_id} onChange={e => onInputChange(e)} />
        </Form.Group>
        </Row>

        {/* <Form.Group className="mb-3" >
            <Form.Label>Active</Form.Label>
            <Form.Control type="text" placeholder="Enter active" id="active" name="active"
            value={active} onChange={e => onInputChange(e)} />
        </Form.Group> */}

<ButtonGroup >
        {radios.map((radio, idx) => (
          <ToggleButton 
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-danger' : 'outline-success'}
            name="active"
            value={radio.value}
            checked={radioValue === radio.value}
            // onChange={e => onInputChange(e)}
            onChange={(e) => {setRadioValue(e.target.value)
                setCompany({
                    ...company,
                    [e.target.name]: e.target.value
                })}}
            // onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

        {/* <Form.Group className="mb-3" >
            <Form.Label>Sub_Purchase_Date</Form.Label>
            <Form.Control type="text" placeholder="Enter sub purchase date" id="sub_purchase_date" name="sub_purchase_date"
            value={sub_purchase_date} onChange={e => onInputChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Validity</Form.Label>
            <Form.Control type="text" placeholder="Enter validity date" id="validity" name="validity"
            value={validity} onChange={e => onInputChange(e)} />
        </Form.Group> */}

        {/* <buttton className='addcompany' onClick={e => onFormSubmit(e)}><h6 style={{paddingTop : '5px'}}>Submit</h6></buttton> */}

        {/* <Button variant="primary" style={{width : '140px', marginLeft : '278px', marginTop : '10px'}} className='mb-2' type="submit"  onClick={e => onFormSubmit(e)}>
        Submit
      </Button> */}

    {message?<Alert  variant={variant}>{message}</Alert>:null} 

    {/* {message?<Alert key="danger" variant="danger">{message}</Alert>:null} */}
      <div>
    <buttton type="button" className="editcompanysubmit"  onClick={e => onFormSubmit(e)}>Submit</buttton>
    </div>

    </Form>
    </Card.Body>
    </Card>
        
       
       </div>       
    )
}
export default EditCompany;
