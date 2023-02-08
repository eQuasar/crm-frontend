import React,{useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Select from "react-dropdown-select";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import moment from 'moment';
//import Form from 'react-bootstrap/Form';



const ViewCustomerr =()=>{
    const[variant,setVariant]=useState("")
    const[message,setMessage]=useState("");
    const [showResults, setShowResults] = React.useState(false)
    const [date, setDate ] = useState(new Date())
    const [dates, setDates] = useState();
    const [stage_name, setStage_Name] = useState();
    const [updateDate, setUpdateDate] = useState();
    const [comment, setComment] = useState();
    const [cust_id, setLeadId] = useState();
    const [lead, setLead] = useState({
        lead_name: "",
        lead_email: "",
        lead_phone: ""
    });

    const navigate = useNavigate();

    const onClick = () => setShowResults(true)

    const agents_id = localStorage.getItem('loggin_id')
    const agent_id =agents_id.slice(1,-1);
    console.log(agent_id) 
    //alert(log_id)
    
    const [agent, setAgent] = useState({agent_name : ""})
    const {id} = useParams();

    useEffect(() => {
        loadUser();
    }, [])

    useEffect(() => {
        loadDate();
    }, [])

    // useEffect(() => {
    //     loadStage();
    // }, [])

    const loadUser = async e => {
        const result  = await axios.get(`https://crm.isdemo.in/admin/leadById/${id}`);
        //console.log(result)
        console.log(result)
        //console.log(result.data.leads)
        //console.log(result.data.agent)
        setLeadId(result.data.leads.lead_id)
         setLead(result.data.leads)
         setAgent(result.data.agent)
         //console.log(view)
    }
    console.log(agent_id)
    console.log(cust_id)
    console.log(stage_name)
    console.log(updateDate)
    console.log(comment)
    
    const loadDate = async e => {
        const result  = await axios.get(`https://crm.isdemo.in/agent/date/${id}`);
        setDates(result.data.date)
        
    }

    useEffect(() => {
        loadStage();
    }, [])
    const [newStage, setNewStage] = useState([]);
    const loadStage = async e => {
        const stage = await axios.get('https://crm.isdemo.in/agent/stageName')

        
     setNewStage(stage.data.data);
    }
    

    async function onFormSubmit(e){
        e.preventDefault()
        console.warn(e);
        try{
            const stage = await axios.post('https://crm.isdemo.in/agent/custDetail',{agent_id,cust_id,stage_name,updateDate,comment})
            //navigate('/users/manage')
            setMessage("SUCCESS : "+stage.data.Success)
             setVariant('success')
             setTimeout(function(){
              navigate('/customer/managecustomer')
          },2000)
            // alert('Data send successfully')
        }
        catch (error){
            setMessage("ERROR : "+error.response.data.errors[0].message)
            setVariant('danger')
            // alert("Something went wrong")
        }
        
    }

    const auth = stage_name;
     
    var today = new Date().toISOString().slice(0,10)
    //document.getElementById('startdateId').valueAsDate = new Date();

    return(
        <>
        <div className="viewCustomer content-wrapper">
            {/* <link classNmae="btn btn-primary" to="/">
                back to home
            </link> */}
            {/* <h4 className="display-4">User Id: {id}</h4> */}
            
            {/* <hr /> */}

            <Card style={{ width: '38rem' ,height: 'fit-content', marginLeft: '' , marginTop : '30px'}}>
              
    <Card.Body>
        <div className='customerHeading'>
    <h4 style={{ marginLeft: '', color: 'white',  }}>Customer Information</h4>
    </div> 
            <ul className="list-group customer-table ">
                <li className="list-group-item">Name :   {lead.lead_name}</li>
                <li className="list-group-item">Email :  {lead.lead_email}</li>
                <li className="list-group-item">Phone :  {lead.lead_phone}</li>
                <li className="list-group-item">Agent Name :   {agent.agent_name}</li><br></br>
            </ul>

            <div className='formSelect'>
                <h4 style={{ marginLeft: '20px' }}></h4>
                {/* <select value={stage_name} onClick={onClick} onChange={e=>setStage_Name(e.target.value)}>
                    <option></option>
                    <option>Open lead</option>
                    <option>Follow Up</option>
                    <option>Dead lead</option>
                </select> */}
                <Form.Select  value={stage_name} onChange={e=>setStage_Name(e.target.value)} >
                <option selected value="">Select Stage</option>
                   {
                    newStage.map((x)=>{
                      return(   <option>{x.name}</option>)
                    })
                   }
               
                        
                    
                   
                    
                    {/* <option>Follow Up</option>
                    <option>Dead lead</option> */}
                </Form.Select>
            </div><br></br>


            {auth ? <div> <h6 style={{ marginLeft: '84px' }}>Date : {dates}</h6><br>
                </br>
                       <label style={{marginLeft: '83px', marginBottom: '18px'}}>
                        Updated Date :
                        </label><br>
                        </br>

                      <div className='formControl'>  <Form.Control
                                    type="date"
                                    name="updateDate"
                                    placeholder="DateRange"
                                    defaultValue={today}
                                    value={updateDate}
                                    max={moment().format("YYYY-MM-DD")}
                                    // onChange={(e) => setUpdateDate(e.target.value)}
                                    onChange={(e) => setUpdateDate(e.target.value)}
                                /><br></br>         
                                </div>
                                

                <div className='textArea'>
                <Form.Label>Remarks</Form.Label>
                <textarea
                style={{width: '100%'}}
                        cols='53'
                        rows='5' 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add your remark"
                    /> </div><br></br>

                     <br></br>
                       

                    {/* <Button variant="primary" className='button'  onClick={e => onFormSubmit(e)} size="lg" >
                        Submit
                    </Button> */}
                    {message?<Alert  variant={variant}>{message}</Alert>:null}
                    
                    <buttton type="button" className="customersubmit"  onClick={e => onFormSubmit(e)}>Submit</buttton> </div> : null} 

               </Card.Body>

               </Card>          

        </div>
        
        </>
            
    )

}

export default ViewCustomerr;