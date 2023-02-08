import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const AddUser = () =>{

    const {data}= useParams();
    const[variant,setVariant]=useState("")
    const[message,setMessage]=useState("");
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const id=localStorage.getItem('loggin_id');
    const Role = localStorage.getItem('UserRole')
    const UserRole = Role.slice(1,-1)
    const log_id =id.slice(1,-1);
    console.log(log_id)
    console.log(UserRole)
    // const parent_id = log_id;
    // console.log(parent_id)

    const [adminList, setAdminList] = useState([{'name':''}])
    const [managerList, setManagerList] = useState([{'name':''}])
    const [getValue, setValue] = useState([{'name':''}])
    // const [parent_id, setParent_Id] = useState()

    

    // const [myid,setMyid]=useState("");

    // const handleChange = (e) => {
        
    //       managers(e);
    //   }
    
    useEffect(() =>{
        const fetchData = async ()=>{
            const response = await fetch(`https://crm.isdemo.in/common/dropdown/${log_id}`)
            const newData = await response.json();
            setAdminList(newData.data);
            console.log(newData);
        };
        fetchData();
    }, [])


    const managers= async(id)=>{
    console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",id);
    const adminId=id;
    
    const response = await fetch(`https://crm.isdemo.in/common/dropdown/${adminId}`)
    const newData = await response.json();
    setManagerList(newData.data);
    console.log(newData);
    }


    const [user , setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
    contactNo: "",
    role: "",
    parent_id: log_id
    })

    // setUser({
    //     ...user,
    //     [parent_id]: log_id
    // })
    
    const [myadmin , setMyadmin] = useState({
        admin_id:""
    });
        
    const{admin_id} = myadmin

    console.log(admin_id)
        
    const {name, email, password, confirmpass, contactNo, role, parent_id} = user;


    function onInputChange(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault()
        console.warn(e);
        try{
           const result =  await axios.post('https://crm.isdemo.in/superadmin/create', user)
           setMessage("SUCCESS : "+result.data.Success)
             setVariant('success')
             setTimeout(function(){
                if(data=="admin"){
                    navigate('/Admin/manager')
                }
                else if( data=="manager"){

                navigate('/components/Manager/AgentData')}
                else{
                    navigate('/users/manage')
                }
              
          },3000)
            // navigate('/users/manage')
        }
        catch (error){
            setMessage("ERROR : "+error.response.data.errors[0].message)
            setVariant('danger')
        }
        
    }


    function getManagerList(e){
        console.warn(e)
    }
  
    console.log("==========================LOGIN ID=======================",parent_id)

    // if(UserRole=='0'){
        console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmm ADMIN ID mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",myadmin)
    
    return(

    <div className='createUser content-wrapper'>
       <Card style={{ width: '46rem', height: 'fit-content' }}>    
    <Card.Body>
    <div className='companyHeading'>
    <h5 style={{marginTop : '7.5px', fontSize : 'larger'}}>Add User</h5>
    </div>
        
    <Form>

    

        <Row className="mb-3">
        <Form.Group as={Col} >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" id="name" 
            value={name} onChange={e => onInputChange(e)}/>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" id="email"
            value={email}  onChange={e => onInputChange(e)}/>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" id="password" name="password" 
            value={password} onChange={e => onInputChange(e)} />
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" id="confirmpass" value={confirmpass}
            name="confirmpass" onChange={e => onInputChange(e)} />
        </Form.Group>
        </Row>

        <Row className='mb-3'>
        <Form.Group as={Col} >
            <Form.Label>Contact No</Form.Label>
            <Form.Control type="text" placeholder="Enter contact no" id="contactNo" name="contactNo"
            value={contactNo} onChange={e => onInputChange(e)} />
        </Form.Group>

        <Form.Group as={Col}>
            <Form.Label>Role</Form.Label>
            <>{UserRole==0?<Form.Select  value={role} name="role" onChange={e => onInputChange(e)} >
            <option value="">Select Role</option>
        <option  value={"1"}>Admin</option>
        <option  value={"2"}>Manager</option>
        <option  value={"3"}>Agent</option>
                   </Form.Select>:
                   UserRole==1?<Form.Select  value={role} name="role" onChange={e => onInputChange(e)} >
            <option value="">Select Role</option>
       
        <option  value={"2"}>Manager</option>
        <option  value={"3"}>Agent</option>
                   </Form.Select>:
                   UserRole==2?<Form.Select  value={role} name="role" onChange={e => onInputChange(e)} >
            <option value="">Select Role</option>
       
       
        <option  value={"3"}>Agent</option>
                   </Form.Select>:null}</>
            
        </Form.Group>

        {/* <Form.Group as={Col} >
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="Enter role" id="role" name="role"
            value={role} onChange={e => onInputChange(e)} />
        </Form.Group> */}
        </Row> 

        {/* <Row className='mb-3'>
        <Form.Group as={Col}>
            <Form.Label>Select Admin</Form.Label>
            <Form.Select  name="parent_id" id="parent_id" value={parent_id}  onChange={e => onInputChange(e)} >
            <option></option>
            {adminList.map(admin =>(
            
            <option value={admin.id}>{admin.name}</option>
        ))};
                   </Form.Select>
        </Form.Group>

        <Form.Group as={Col}>
            <Form.Label>Select Manager</Form.Label>
            <Form.Select  name="parent_id" id="parent_id" value={parent_id}  onChange={e => onInputChange(e)} >
            <option></option>
            {managerList.map(manager =>(
            
            <option value={manager.id}>{manager.name}</option>
        ))};
                   </Form.Select>
        </Form.Group>
        </Row> */}

<>{role==2 && UserRole==0?
             <select className="form-control" value={parent_id} name="parent_id" 
            onChange={(e) => {managers(e.target.value)
                setUser({
                    ...user,
                    [e.target.name]: e.target.value
                })}}
            >       
            
            <option value="">Select Admin</option>
                      <i className="right fas fa-angle-left"></i>
                    

                    {adminList.map(admin =>(
            
                        <option value={admin.id}>{admin.name}</option>
                    ))};
   
                </select>:

            //     role==2 && UserRole==1?<select className="form-control" value={parent_id} name="parent_id" 
            // onChange={(e) => {managers(e.target.value)
            //     setUser({
            //         ...user,
            //         [e.target.name]: e.target.value
            //     })}}
            // >       
            
            // <option value="">Admin Selected</option>
            //           <i className="right fas fa-angle-left"></i>
                    

            //         {/* {adminList.map(admin =>(
            
            //             <option value={admin.id}>{admin.name}</option>
            //         ))}; */}
   
            //     </select>:
                
            role==3 && UserRole==1?
            

            <select className="form-control" value={parent_id} name="parent_id" 
            onChange={(e) => {managers(e.target.value)
                setUser({
                    ...user,
                    [e.target.name]: e.target.value
                })}}
            >       
            
            <option value="">Select Manager</option>
                      <i className="right fas fa-angle-left"></i>
                    

                    {adminList.map(admin =>(
            
                        <option value={admin.id}>{admin.name}</option>
                    ))};
   
                </select>
            
        //     <div>
        //     <select className="form-control" value={admin_id} name="admin_id" 
        // onChange={(e) => {managers(e.target.value)
        //     setMyadmin({
        //         ...myadmin,
        //         [e.target.name]: e.target.value
        //     })

        //     setUser({
        //         ...user,
        //         [parent_id]:e.target.value
        //     })
        // }}
        // >       
        
        // <option value="">Select Manager</option>
        //           <i className="right fas fa-angle-left"></i>
                

        //         {adminList.map(admin =>(
        
        // <option value={admin.id}>{admin.name}</option>
        //         ))};

        //      </select>
        //      </div>


            
            :role==3 && UserRole==0?
                <div>
                <select className="form-control" value={admin_id} name="admin_id" 
            onChange={(e) => {managers(e.target.value)
                setMyadmin({
                    ...myadmin,
                    [e.target.name]: e.target.value
                })
                setUser({
                    ...user,
                    [parent_id]: myadmin.admin_id
                })
            }}
            >       
            
            <option value="">Select Admin</option>
                      <i className="right fas fa-angle-left"></i>
                    

                    {adminList.map(admin =>(
            
                        <option value={admin.id}>{admin.name}</option>
                    ))};
   
                 </select><br>
                 </br>
                 <select className="form-control" name="parent_id" id="parent_id" value={parent_id} 
                    onChange={e => onInputChange(e)}
             >
                      <option value="">Select Manager</option>

                    {managerList.map(manager =>(
                        <option value={manager.id}>{manager.name}</option>
                    ))};

                </select> 
                </div>
                :
                
                
                
                
                
                null} 
                </>
                
               
                
                {/* <>
               {role==3?
               <select className="form-control" value={parent_id} name="parent_id" 
            onChange={(e) => {managers(e.target.value)
                setUser({
                    ...user,
                    [e.target.name]: e.target.value
                })}}
            >       
            
            <option value="">Select Admin</option>
                      <i className="right fas fa-angle-left"></i>
                    

                    {adminList.map(admin =>(
            
                        <option value={admin.id}>{admin.name}</option>
                    ))};
   
                </select>
                
            //     <select className="form-control" name="parent_id" id="parent_id" value={parent_id} 
            //   onChange={e => onInputChange(e)}
            //  >
            //           <option value="">Select Manager</option>

            //         {managerList.map(manager =>(
            //             <option value={manager.id}>{manager.name}</option>
            //         ))};

            //     </select> 
                :null}
                

    </> */}
            

             {/* <select className="form-control" name="parent_id" id="parent_id" value={parent_id} 
              onChange={e => onInputChange(e)}
             >
                      <option value="">Select Manager</option>

                    {managerList.map(manager =>(
                        <option value={manager.id}>{manager.name}</option>
                    ))};

                </select>   */}

             {message?<Alert  variant={variant}>{message}</Alert>:null} 
            {/* <button onClick={e => onFormSubmit(e)} className='addButton'>Add User</button> */}
            {/* {message?<Alert key="danger" variant="danger">{message}</Alert>:null} */}
            <buttton type="button" className="addUserButton"  onClick={e => onFormSubmit(e)}>Submit</buttton> 
        
        </Form>
    </Card.Body>
    </Card>
    </div> 

                    
    )
// }



}
export default AddUser;