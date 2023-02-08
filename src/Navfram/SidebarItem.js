import React,{useState} from 'react';

const SidebarItem =()=>{
    const [open , setOpen] = useState(false)
    
    return(
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className='sidebar-title' data-accordion="true">
                <span>
                    General
                </span>
                <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
            </div>
            <div className='sdebar-content'>
                Hello
            </div>
        </div>
    )
}

export default SidebarItem;