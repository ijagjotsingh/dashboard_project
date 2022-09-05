import "./event.css"
import Horizontalrow from "./Horizontalrow";
import classData from "./classData";
function Event(){
    return (
        <div className="event">
            <div className="title">
                Upcoming Classes
            </div>
            <div className="content">
                {classData.map(eventItem => (
                    <Horizontalrow 
                        day = {eventItem.day}
                        subject = {eventItem.subject}
                        when = {eventItem.when}
                    />
                ))}
            </div>
        </div>
    )
}

export default Event;