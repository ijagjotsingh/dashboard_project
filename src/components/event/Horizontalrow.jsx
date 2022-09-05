import "./horizontalrow.css";

function Horizontalrow(props){
    return (
        <div className="horizontalRow">
            <div className="leftOfRow">
                {props.day}
            </div>
            <div className="middleOfRow">
                <div className="upper">{props.subject}</div>
                <div className="lower">{props.when}</div>
            </div>
            <div className="RightOfRow">
                <div className="join">Join!</div>
            </div>
        </div>
    )
}

export default Horizontalrow;