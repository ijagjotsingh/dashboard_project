import "./facultyCard.css"

function FacultyCard(props){
    return (
        <div className="facultyCard">
            
            <div className="topOfFc">
                <div className="facultyImage">
                    <img src={props.image} alt="Faculty"/>
                </div>
                <div className="facultyName">
                        {props.name}
                </div>
            </div> 
            <div className="bottomOfFc">
                <div className="facultyEmail">
                        <span className = "hardText">Email : </span>  {props.email}
                </div><div className="facultyPhone">
                        <span className = "hardText">Phone : </span> {props.phone}
                </div>
                <div className="facultySubject">
                    <span className = "hardText">Subject : </span> {props.subject}
                </div>
                <div className="facultyEducation">
                <span className = "hardText">education : </span> {props.education}
                </div>
                <div className="facultyExprience years">
                <span className = "hardText">Experience : </span>{props.experience} years
                </div>
            </div>    
        </div>
        
    )
}

export default FacultyCard;