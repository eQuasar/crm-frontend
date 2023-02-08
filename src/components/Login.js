import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../Navfram/images/bg.jpg';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';


const Login = () => {
    const[message,setMessage]=useState("");
    //const [name,setName]=useState("");
    const [password, setPassword] = useState("");
    //const [confirmpassword,confirmPassword]=useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate(); 

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    }, [])

    const collectData = async () => {
        console.warn("email,password", email, password);
        let result = await fetch('https://crm.isdemo.in/auth/login', {
            method: 'post',
            body: JSON.stringify({ email, password, }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        console.warn(result);
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            localStorage.setItem("UserRole", JSON.stringify(result.role));
            localStorage.setItem("loggin_id", JSON.stringify(result.id));
            localStorage.setItem("agent_id", JSON.stringify(result.id))
            navigate("/")

        }
        else {
            setMessage("ERROR : "+result.errors[0].message)
        } 
        
    }    


    return (

            
        <div className="loginbg">
           
            {/* <img src={bg} /> */}
            <Card className='loginCard' style={{backgroundColor:"RGB(0,0,0,0.6)",padding:"1%"}}>

            <div className="signin">
            <h2 class="logo"><b>L<span>o</span>g<span>i</span>n</b></h2>

                {/* <h2  className='neon'>Login</h2> */}
                {/* <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)}
             placeholder="Enter Name" /> */}

                <input id="myinput" className='myinput' style={{backgroundColor:"RGB(0,0,0,0.3)"}} type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email" />

                <input id="myinput" className='myinput' style={{backgroundColor:"RGB(0,0,0,0.3)"}} type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password" />



                <button onClick={collectData} type="button" className="logButton">Login</button>
            
                {message?<Alert key="danger" variant="danger">{message}</Alert>:null}
                    
            
                
                
            </div>
            </Card>
            </div>
             
        )

}

export default Login;
       



    