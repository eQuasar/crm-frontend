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
import Manager from '../Admin/manager';

const EditUser = () =>{

    const[variant,setVariant]=useState("");
    const[message,setMessage]=useState("");
    const { id } = useParams();
    const Role = localStorage.getItem('UserRole')
    const UserRole = Role.slice(1,-1)
    const ide = localStorage.getItem('loggin_id');
    const log_id =ide.slice(1,-1);
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const { data } = useParams();
    
    const [adminList, setAdminList] = useState([{'name':''}])
    const [managerList, setManagerList] = useState([{'name':''}])
    const [logList, setLogList] = useState([{'name':''}])

    // alert(dat)

    useEffect(() =>{
        const fetchData = async ()=>{
            const response = await fetch(`https://crm.isdemo.in/common/dropdown/${log_id}`)
            const newData = await response.json();
            setAdminList(newData.data);
            //console.log(newData);
        };
        fetchData();
    }, [])
     
    const managers= async(id)=>{
        //console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",id);
        const adminId=id;
        const response = await fetch(`https://crm.isdemo.in/common/dropdown/${adminId}`)
        const newData = await response.json();
        setManagerList(newData.data);
      
        }
    
//   console.log(managerList);
//   console.log(logList,"pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp");


    const [user , setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpass: "",
        contactNo: "",
        role: "",
        parent_id: log_id
        })

        const [myadmin , setMyadmin] = useState({
            admin_id:""
        });
            
        const{admin_id} = myadmin

        const {name, email, contactNo, role, parent_id} = user;
        
        // console.log(myadmin)
        // console.log(admin_id)
        // console.log(log_id)

        function onInputChange(e){
            setUser({
                ...user,
                [e.target.name]: e.target.value,
               
            })

            
        }

        useEffect(() => {
            loadUser();
        }, [])

        useEffect(() =>{
            loggedIn();
        }, [])
                    
        const loadUser = async e => {
            const result  = await axios.get(`https://crm.isdemo.in/superadmin/findBy/${id}`);
           //  console.warn(result);
              setUser(result.data.data[0])

        }

        const loggedIn = async e  => {
            const result  = await axios.get(`https://crm.isdemo.in/superadmin/findBy/${log_id}`);
         setLogList(result.data.data);
     //   console.log(logList)
        }

 
         async function onFormSubmit(e){
            e.preventDefault()
    
            // alert(user.parent_id)
            try{
            const edit =   await axios.put(`https://crm.isdemo.in/superadmin/findBy/${id}`,user)
                 
                    // alert(edit.data.Success);

                    setMessage("SUCCESS : "+edit.data.Success)
                    setVariant('success')
                    setTimeout(function(){
                        if(data=="admin"){
                            navigate('/Admin/manager')
                        }
                        else if(data=="manager"){
                            navigate('/components/Manager/AgentData')
                        }
                        else{
                            navigate('/users/manage')
                        }
                     
                 },3000)
                 

                //  navigate('/users/manage')
            }
            catch (error){
                setMessage("ERROR : "+error.response.data.errors[0].message)
                setVariant('danger')
            }
            
        }
        
       

        
    return(

        <div className='createCompany content-wrapper'>
            {/* <Manager name={"Rahul"} /> */}
       {/* {auth ? <div className="user">
            <h1>Edit User</h1>
           <form onSubmit={e => onFormSubmit(e) }>
            <input type='text' placeholder='Enter user name' className='inputBox' 
            name="name" id='name' value={name} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter user email' className='inputBox' 
            name="email" id='email' value={email} onChange={e => onInputChange(e)}
            />
            <input type='password' placeholder='Enter password' className='inputBox' 
            name="password" id='password' value={password} onChange={e => onInputChange(e)}
            />
            <input type='password' placeholder='Confirm password' className='inputBox' 
            name="confirmpass" id='confirmpass' value={confirmpass} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter contact number' className='inputBox' 
            name="contactNo" id='contactNo' value={contactNo} onChange={e => onInputChange(e)}
            />
            <input type='text' placeholder='Enter role' className='inputBox' 
            name="role" id='role' value={role} onChange={e => onInputChange(e)}
            />
            <button onClick={e => onFormSubmit(e)} className='appButton'>Update User</button>
           </form> 
        </div>
        : null}  */}

<Card style={{ width: '46rem', marginBottom : '7rem', marginTop : '1.5rem', height: 'fit-content'}}>    
    <Card.Body style={{}}>
    <div className='companyHeading'>
    <h5 style={{marginTop : '7.5px', fontSize : 'larger'}}>Edit User Profile</h5>
    </div>
        
    <Form>

    

        <Row className="mb-3">
        <Form.Group as={Col} >
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter user name"  
            name="name" id='name' value={name} onChange={e => onInputChange(e)}/>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter user email" 
            name="email" id='email' value={email} onChange={e => onInputChange(e)}/>
        </Form.Group>
        </Row>

        {/* <Row className="mb-3">
        <Form.Group as={Col} >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password"  
            name="password" id='password' value={password} onChange={e => onInputChange(e)} />
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" 
            name="confirmpass" id='confirmpass' value={confirmpass} onChange={e => onInputChange(e)} />
        </Form.Group>
        </Row> */}

        <Row className='mb-3'>
        <Form.Group as={Col} >
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Enter contact no" 
            name="contactNo" id='contactNo' value={contactNo} onChange={e => onInputChange(e)}/>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>Role</Form.Label>
            <>{UserRole==0?<Form.Select  value={role} name="role" onChange={e => onInputChange(e)}>
            <option value="">Select Role</option>
        <option  value={"1"}>Admin</option>
        <option  value={"2"}>Manager</option>
        <option  value={"3"}>Agent</option>
                   </Form.Select>:
                   UserRole==1?<Form.Select  value={role} name="role" onChange={e => onInputChange(e)}>
            <option value="">Select Role</option>
       
        <option  value={"2"}>Manager</option>
        <option  value={"3"}>Agent</option>
                   </Form.Select>:
                   UserRole==2?<Form.Select  value={role} name="role" onChange={e =>onInputChange(e)
                  
                

                   } >
            <option value="">Select Role</option>
       
       
        <option  value={"3"}>Agent</option>
        
                   </Form.Select>
                   
                   
                   :null}</>
            
        </Form.Group>
        </Row>

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

                role==2 && UserRole==1?
                <select className="form-control" value={parent_id} name="parent_id" 
            onChange={(e) => {
                loggedIn()
                setUser({
                    ...user,
                    [e.target.name]: e.target.value
                })}}
            >       
            
            <option value="">Select Admin</option>
                      <i className="right fas fa-angle-left"></i>
                    

                     {logList.map(admin =>(
            
                        <option value={admin.id}>{admin.name}</option>
                    ))};
    
                </select>:
                
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
                 
                :null
                      
                
                }</>

        {/* <Button variant="primary" style={{width : '140px', marginLeft : '278px', marginTop : '10px'}} className='mb-2' type="submit"  onClick={e => onFormSubmit(e)}>
        Submit
      </Button> */}
      {message?<Alert  variant={variant}>{message}</Alert>:null} 
      {/* {message?<Alert key="danger" variant="danger">{message}</Alert>:null} */}
      <buttton type="button" className="editusersubmit"  onClick={e => onFormSubmit(e)}>Submit</buttton>
    </Form>
    </Card.Body>
    </Card>
       
       </div>       
    )
}
export default EditUser;
