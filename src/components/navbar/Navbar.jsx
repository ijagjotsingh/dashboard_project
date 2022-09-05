import React, { useState } from "react"
import "./navbar.css"
import Dropdown from "./Dropdown";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ArrowDropDownOutlined from "@mui/icons-material/ArrowDropDownOutlined";

function Navbar(){

    const[open,setOpen] = useState(false);

    function handleClick(){
        return setOpen(!open)
        };
  
    return <div className = "navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search here..."/>
                <SearchOutlinedIcon style={{cursor: "pointer"}}/>
            </div>
            <div className="items">
                <div className="item designAdmin">Contact Admin</div>
                {/* <div className="item"><NightsStayOutlinedIcon/></div> */}
                <div className="item"><ChatBubbleOutlineOutlinedIcon/>
                    <div className="counter">1</div>
                </div>
                <div className="item"><NotificationsOutlinedIcon/>
                    <div className="counter">2</div></div>
                <div onClick={handleClick} className="item"><Person2OutlinedIcon/>
                    <div className="arrow"><ArrowDropDownOutlined/></div>
                </div>
            </div>
             {open && <Dropdown/>}
        </div>
    </div>
}

export default Navbar;