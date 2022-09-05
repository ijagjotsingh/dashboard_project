import React from "react"
import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AlarmIcon from '@mui/icons-material/Alarm';
import PublicIcon from '@mui/icons-material/Public';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { Link } from "react-router-dom";

function Sidebar(){
    return (
        <div className = "sidebar">
            <div className="top">
                <Link to="/" style ={{textDecoration: "none"}}>
                <span className="logo">JEEPrep.</span>
                </Link>
            </div>

            <div className="center"> 
                <ul> 
                    <Link to="/" style ={{textDecoration: "none"}}>
                    <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
                    </Link>
                    <li><PaymentsOutlinedIcon className="icon"/><span>Payments</span></li>
                    <li><BackpackOutlinedIcon className="icon"/><span>My Courses</span></li>
                    <li><CreateOutlinedIcon className="icon"/><span>My Homework</span></li>
                    <li><AlarmIcon className="icon"/><span>Deadlines</span></li>
                    <li><PublicIcon className="icon"/><span>Public Forum</span></li>
                    <li><QuestionAnswerOutlinedIcon className="icon"/><span>Doubts QnA</span></li>
                    <li><CalendarMonthOutlinedIcon className="icon"/><span>Schedule</span></li>
                    <Link to="/attendence-leave" style ={{textDecoration: "none"}}>
                    <li><EventAvailableOutlinedIcon className="icon"/><span>Attendence/Leave</span></li>
                    </Link>
                    <li><QuizOutlinedIcon className="icon"/><span>FAQs</span></li>
                    <li><SettingsIcon className="icon"/><span>Settings</span></li>
                </ul>
            </div>
            <div className="bottom">
                <p className="bottomheading">Support 24/7</p>
                <div className="bottomMain">
                    <p className="bottomMainText">Contact us anytime</p>
                    <div className="bottomMainBtn"> 
                        <ChatOutlinedIcon/>
                        <p className="">Chat</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar;