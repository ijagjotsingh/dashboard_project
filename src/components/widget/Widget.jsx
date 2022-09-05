import "./widget.css"

function Widget(props){
return (
    <div className="widget">
        <span className="image">{props.image}</span>
        <p className="titleText">{props.title}</p>
    </div>
);
}

export default Widget;