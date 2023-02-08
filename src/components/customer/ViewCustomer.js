// import React,{useState, useEffect} from 'react';
// import {Link, useParams} from 'react-router-dom';
// import axios from 'axios';
// import Form from "react-bootstrap/Form";
// import Select from "react-dropdown-select";
// import Button from 'react-bootstrap/Button';


// const ViewCustomer =()=>{
//     const [date, setDate ] = useState(new Date())
//     const [dates, setDates] = useState();
//     const [stage_name, setStage_Name] = useState();
//     const [updateDate, setUpdateDate] = useState();
//     const [content, setContent] = useState();

//     //const [content, setContent] = useState("");
//     const [cust_id, setLeadId] = useState();
//     const [lead, setLead] = useState({
//         lead_name: "",
//         lead_email: "",
//         lead_phone: ""
//     });

    

//     // const [credential , setCredential] = useState({
//     //     agent_id: "",
//     //     cust_id: "",
//     //     stage_name: "",
//     //     updateDate: "",
//     //     comment: ""
//     //     })

//     //const {agent_id, cust_id, stage_name, updateDate, comment} = credential;    

//     const agent_id = localStorage.getItem('loggin_id')
    
//     const [agent, setAgent] = useState({agent_name : ""})
//     const {id} = useParams();

//     useEffect(() => {
//         loadUser();
//     }, [])

//     useEffect(() => {
//         loadDate();
//     }, [])

//     const loadUser = async e => {
//         const result  = await axios.get(`https://crm.isdemo.in/admin/leadById/${id}`);
//         //console.log(result)
//         console.log(result)
//         //console.log(result.data.leads)
//         //console.log(result.data.agent)
//         setLeadId(result.data.leads.lead_id)
//          setLead(result.data.leads)
//          setAgent(result.data.agent)
//          //console.log(view)
//     }
//     console.log(agent_id)
//     console.log(cust_id)
    
//     const loadDate = async e => {
//         const result  = await axios.get(`https://crm.isdemo.in/agent/date/${id}`);
//         setDates(result.data.date)
        
//     }
        
//     return(
//         <div className="container py-4 content-wrapper">
//             {/* <link classNmae="btn btn-primary" to="/">
//                 back to home
//             </link> */}
//             <h1 className="display-4">User Id: {id}</h1>
//             <hr />
//             <ul className="list-group w-50">
//                 <li className="list-group-item">Name: {lead.lead_name}</li>
//                 <li className="list-group-item">Email: {lead.lead_email}</li>
//                 <li className="list-group-item">Phone: {lead.lead_phone}</li>
//                 <li className="list-group-item">Agent Name: {agent.agent_name}</li><br></br>
                
//                 {/* <li className="list-group-item">name: {view.name}</li> */}
//             </ul>

//             <div>
//                 <h4>Select Stage</h4>
//                 <select value={stage_name} onChange={e=>setStage_Name(e.target.value)}>
//                     <option></option>
//                     <option>Open lead</option>
//                     <option>Follow Up</option>
//                     <option>Dead lead</option>
//                 </select>
//             </div><br></br>

//             <h4>{dates}</h4>

//             <Form.Control
//                 type="date"
//                 name="datepic"
//                 placeholder="DateRange"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               /><br></br>
              
//                 <textarea 
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                     placeholder="Add your remark"
//                 /><br></br>

//               {/* <FormLabel htmlFor="content">Comment Content</FormLabel>
//               <Input
//               type="text"
//               id="content"
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               aria-describedby="content-helper-text"
//               /> */}

//             <Button variant="primary"  size="" >
//                 Submit
//             </Button>{'Click here to submit '}
            
//         </div>
//     )
// }

// export default ViewCustomer;