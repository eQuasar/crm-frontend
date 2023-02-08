import React, {useState, useEffect} from 'react';
import axios from 'axios';
import dummy from '../../dummy';
import AsyncSelect from 'react-select/async'; 

function Dropdown(){
    const [users, setUsers] = useState([]);
    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    const handleInputChange = value => {
        setValue(value);
    }

    const handleChange = value => {
        setSelectedValue(value);
    }

    const fetchData = () => {
        return axios.get('https://crm.isdemo.in/common/dropdown/2').then(result => {
            const res = result.data.data;
            return res;
        });
    }
    // useEffect( function (){
    //     axios
    //     .get("https://crm.isdemo.in/common/dropdown/2")
    //     .then((response) => setUsers(response.data))
    //     .then((error) => console.log(error));
    // },[])
    return(
    <div className="container">
        <div className="row alert alert-info">Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <AsyncSelect
                    cacheOptions
                    defaultOptions
                    value={selectedValue}
                    getOptionLabel={e => e.first_name + ''}
                    getOptionValue={e => e.id}
                    loadOptions={fetchData}
                    onInputChange={handleInputChange}
                    onChange={handleChange}

                 />
            </div>
            <div className="col-md-4"></div>
        </div>

    </div>    
    )

}

export default Dropdown;
