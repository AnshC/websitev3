import "./styles.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navigation() {
  useEffect(() => {
    let parentElement = document.querySelector('.Navigation');
    let topLayerElements = parentElement.querySelectorAll("li");
    topLayerElements.forEach((element) => {
      let targetStyle = element.children[0].style;
      element.addEventListener("mouseover", () => {
        targetStyle.transform = "translateX(0px) translateY(0px)";
        targetStyle.color = "var(--blue)";
        targetStyle.border = " 2px solid var(--blue)";
      });
      element.addEventListener("mouseout", () => {
       targetStyle.transform = "translateX(7px) translateY(7px)";
       targetStyle.color = "var(--beige)";
       targetStyle.border = "2px solid var(--beige)";
      });
    });
  }, []);

  return (
    <div className="Navigation">
      <ul>
        <Link to="/" className="link">
          <li className="fancy">
            <div className="top fancy">home</div>
            <div className="bottom"></div>
          </li>
        </Link>
        <Link to="/resume" className="link">
          <li className="fancy">
            <div className="top fancy">resume</div>
            <div className="bottom"></div>
          </li>
        </Link>
        <Link to="/about" className="link">
          <li className="fancy">
            <div className="top fancy">about</div>
            <div className="bottom"></div>
          </li>
        </Link>
      </ul>
    </div>
  );
}
