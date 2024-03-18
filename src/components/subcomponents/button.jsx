import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <div className="Button" style={props.style}>
      <Link to={props.to} className="align">
        {props.text}
        {props.icon}
      </Link>
    </div>
  );
}
