import { Link } from "react-router-dom";
import "./dropdown.css"

function Dropdown(){
    return <div className="dropdown">
            <p className="dropdownText">Logout</p>
        <Link to="/userprofile" style ={{textDecoration: "none"}}>
        <p className="dropdownText">My Profile</p>
        </Link>
    </div>
}

export default Dropdown;