import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FileUpload.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const FileUpload =()=>{

    const[variant,setVariant]=useState("");
    const[message,setMessage]=useState("");

    // const uploadHandler = (event) => {
        
    //         const file = event.target.file[0];
    //         file.isUploading = true;
    //         setFiles([...files, file])
    //     }

    //     const formData = new FormData();
    //     formData.append(
    //         file.name,
    //         file,
    //         file.name
    //     )
    //         axios.post('https://crm.isdemo.in/admin/lead',formData)

    // const [files, setFiles] = useState([{
    //     name: 'myFile.pdf'
    // }])

    const navigate = useNavigate();
    const [file, setFile] = useState('')

    const handleChange = (e)=>{
        console.warn(e.target.files);
        setFile(e.target.files[0])
    }

    const handleApi =()=>{
        const url='https://crm.isdemo.in/admin/lead';

        const formData = new FormData()
        formData.append('file', file)
       
        try {
        Axios.post(url, formData).then((res) =>{
            console.log(res);
            setMessage("SUCCESS : File uploaded ")
             setVariant('success')
             setTimeout(function(){
              navigate('/')
          },2000)
            // alert("File has been uploaded successfully")
            // navigate("/")
        })
        }

        catch
        {
            // alert("Something went wrong")
            setMessage("ERROR : Something went wrong")
            setVariant('danger')
        }
    }
    return(
        <>

        
        <div className="uploadList content-wrapper">
        <Card style={{ width: '38rem' ,height: 'fit-content', marginLeft: '' , marginTop : '20px'}}> 

        <Card.Body>

        <div className='customerHeading'>
            <h4 style={{ marginLeft: '', color: 'white',  }}>Upload Documents</h4>
        </div> 
        <p className="main" style={{textAlign : 'center', marginTop : '15px'}}>(Upload PDF, JPG, PNG Or CSV Files Only)</p>
            <div className="file-inputs fileupload" style={{textAlign : 'center', marginTop : '30px'}}>
                <input type="file" onChange={handleChange}/>
                <Button variant="success" onClick={handleApi}>UPLOAD</Button>

                {message?<Alert  variant={variant}>{message}</Alert>:null} 
                {/* <button onClick={handleApi}>
                    UPLOAD
                </button> */}
            </div>

            
            {/* <p className="info">PDF, JPG, PNG, CSV</p> */}

            </Card.Body>

            </Card>
        </div>
        
          


        {/* <div>
            <input type="file"  onChange={handleChange} />
            <button onClick={handleApi}>UPLOAD</button>
        </div> */}
        </>
    )
}

export default FileUpload;