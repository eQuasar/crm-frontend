import React,{useState,useEffect} from 'react'

export default function Form() {
    const [userList, setUserList] = useState([{'name':''}])

    useEffect(() =>{
        const fetchData = async ()=>{
            const response = await fetch(`https://crm.isdemo.in/common/dropdown/2`)
            const newData = await response.json();
            setUserList(newData.data);
            console.log(newData);
        };
        fetchData();
    }, [])
  return (
    <>
    <div>Form</div><br>
    </br>
    <select className="form-control" value={userList}  onChange={(event) => setUserList(event.target.value)}>
        <option value="">Choose Company Name</option>

        {userList.map(user => (
            <option value={user.name} key={user.id}>{user.name}</option>
        ))

        }
    </select>
    </>
  )
}
