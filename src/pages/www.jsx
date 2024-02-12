import { Link } from "react-router-dom";
import "./styles.css";
import { TbArrowBack } from "react-icons/tb";

export default function Dev() {
  return (
    <div className="Dev">
      <h1 className="fancy">Page Under Development</h1>
      <p className="fancy">(the irony.)</p>
      <Link className="link back fancy" to="/">
        Go back home <TbArrowBack id="icon" />
      </Link>
    </div>
  );
}
