import "./styles.css";
import { Link } from "react-router-dom";
import { Scroll } from "../data/scroll";

/* Component Import */
import Navigation from "./subcomponents/navigation";
import MainLink from "./subcomponents/mainLink";

/* Icon Imports */
import { RiSparkling2Line } from "react-icons/ri";
import { TbCodeAsterix } from "react-icons/tb";

export default function Landing() {
  Scroll();
  return (
    <div className="Landing">
      <div className="head">
        <div className="image"></div>
        <h1 className="fancy">Ansh Chauhan</h1>
        <p>graphic designer, web developer.</p>
      </div>
      <Navigation />
      <div className="links">
        <MainLink
          title="design"
          description="a collection of my designs."
          icon={<RiSparkling2Line />}
          align="left"
        />
        <MainLink
          title="www"
          description="a collection of my projects."
          icon={<TbCodeAsterix />}
          align="right"
        />
      </div>
      <div className="footer">
        <p>
          <Link to="/website" className="link-default">
            website
          </Link>{" "}
          last updated 4/17/2024
        </p>
      </div>
    </div>
  );
}
