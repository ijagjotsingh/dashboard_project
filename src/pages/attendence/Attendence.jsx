import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./attendence.css"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";


function Attendence(){
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const total = 100;
  const present = 86;
  const absent = total-present;
  const percent = (present/total)*100;

    return(
        <div className="attendence">
            <Sidebar/>
                <div className="attendenceContainer">
                    <Navbar/>
                    <div className="facultyHeading">
                        <div className="intro">View your Attendence/Apply for a Leave</div>
                    </div>
                    <div className="attendenceMain">
                        <span className = "desTitle">Your Attendence</span>
                        <div className="attendenceDetail">
                            <div className="leftOfAtt">
                                <div className="leftTitle">
                                    Your Attendence Details
                                </div>
                                <div className="leftMainWrapper">
                                    <div className="leftMain">
                                        <div className= "leftMainRow">
                                            <div className="leftRow">Total Classes</div>
                                            <div className="rightRow">{total}</div>
                                        </div>
                                        <div className= "leftMainRow">
                                            <div className="leftRow">Present</div>
                                            <div className="rightRow">{present}</div>
                                        </div>
                                        <div className= "leftMainRow">
                                            <div className="leftRow">Absent</div>
                                            <div className="rightRow">{absent}</div>
                                        </div>
                                        <div className= "leftMainRow">
                                            <div className="leftRow">Attendence</div>
                                            <div className="rightRow">{percent}%</div>
                                        </div>
                                    </div>
                                    <div className="attTarget">
                                        <div className="attTargetU">
                                            Attendence required 
                                        </div>
                                        <div className="attTargetL">
                                            75%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rightOfAtt">
                                <DateRange className="calDesign"
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="leaveMain">
                        <span className = "desTitle">Apply for a Leave</span>
                        <div className="leaveContainer">
                            <div className="leftOfLeave">
                                <div className="leaveTitle">New Leave</div>
                                <div className="leaveContent">
                                    <form>
                                        <div className="leaveFormInput">
                                            <label>Roll No. : </label>
                                            <input type="text" placeholder="Your Roll No." value="123456" disabled/>
                                        </div>

                                        <div className="leaveFormInput">
                                            <label for="typeOfLeave">Type of Leave :</label>
                                            <select id="typeOfLeave">
                                                <option value="casual">Casual</option>
                                                <option value="sick">Sick</option>
                                                <option value="earned">Earned</option>
                                            </select>
                                        </div>
                                        
                                        <div className="leaveFormInput">
                                            <label>From : </label>
                                            <input className="cp" type="date"/>
                                        </div>

                                        <div className="leaveFormInput">
                                            <label>To : </label>
                                            <input className="cp" type="date"/>
                                        </div>

                                        <div className="leaveFormInput">
                                            <label>Reason : </label>
                                            <textarea type="text" placeholder="Reason" rows="4"/>
                                        </div>

                                        <button>Submit</button>

                                    </form>
                                </div>
                            </div>
                            <div className="rightOfLeave">
                                <div className="rolContent">
                                <DateRange className="calDesign"
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Attendence;