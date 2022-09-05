import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import "./profile.css";
import { useState } from "react";

function Profile(){

    const [edit,setEdit] = useState(false);
    const [note,setNote] = useState({
        username:"ABC XYZ",
        phone:"987654321",
        email:"abcxyz@gmail.com"
    });

    function handleEdit(){
        return setEdit(true)
    }

    function handleEdited(){
        return (
            setEdit(false)
            
        )
    }

    function handleNew(event){
        const {name, value} = event.target;
        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value,
            }
        })
    }

    return (
        <div className="profile">
            <Sidebar/>
            <div className="profileContainer">
                <Navbar/>
                <div className="profileMain">
                        <div className="profileAreaTop">
                            <div className="profileAreaTopTitle">
                                Your Profile
                            </div>
                            <div onClick={handleEdit} className="edit">
                                <EditOutlinedIcon/>
                            </div>
                        </div>     
                        <div className="profileArea">
                        <div className="profileAreaTopDetail">
                            <div className="userImage">
                                <img src="https://i.redd.it/jeuusd992wd41.jpg" alt="Profile"/>
                            </div>
                            <div className="userProfileName">
                                <span>{(edit) ? <div className="leaveFormInput editDesign">
                                    <label>Edit your Name : </label>
                                    <input type="text" placeholder="XYX ABC"/>
                                    </div> 
                                    : <div className="leaveFormInput editDesign">
                                    <label></label>
                                    <input name = "username" type="text" placeholder={note.username} disabled/>
                                    </div> }
                                </span>
                            </div>
                        </div>
                        <div className="profileAreaMiddleDetail">
                            <form>
                                {(edit) ? <div className="leaveFormInput editDesign bb">
                                    <label>Edit your Phone No. : </label>
                                    <input type="number" placeholder="987654321"/>
                                    </div>
                                    : <div className="leaveFormInput">
                                    <label>Phone No. : </label>
                                    <input name = "phone" onChange={handleNew} type="number" placeholder={note.phone} disabled/>
                                    </div>}
 
                                    {(edit) ? <div className="leaveFormInput editDesign bb">
                                    <label>Edit your Email : </label>
                                    <input type="email" placeholder="xyzabc@gmail.com"/>
                                    </div>: <div className="leaveFormInput">
                                    <label>Email : </label>
                                    <input name = "email" onChange={handleNew} type="email" placeholder={note.email} disabled/>
                                </div>}
                            </form>
                            <button onClick={handleEdited}>Update</button>
                        </div>
                        
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Profile;