import "./styles.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MainLink(props) {
  const [alignLink, setAlignLink] = useState("left");

  useEffect(() => {
    /* Screen dependencies */
    if (window.innerWidth < 600) {
      setAlignLink("left");
    } else if (props.align === "right") {
      setAlignLink("right");
    }

    if (window.innerWidth > 600) {
      /* Animation */
      const links = document.querySelectorAll(".MainLink");
      links.forEach((link) => {
        const filledElement = link.children[0].children[0].children[0];
        const strokeElement = link.children[0].children[0].children[1];
        link.addEventListener("mouseover", () => {
          filledElement.style.color = "rgba(0,0,0,0)";
          filledElement.style.webkitTextStroke = "1px var(--blue)";
          filledElement.style.transform = "translateX(30px) translateY(30px)";
          strokeElement.style.color = "var(--beige)";
          strokeElement.style.webkitTextStroke = "initial";
        });
        link.addEventListener("mouseleave", () => {
          strokeElement.style.color = "transparent";
          strokeElement.style.webkitTextStroke = "1px var(--blue)";
          filledElement.style.color = "var(--beige)";
          filledElement.style.webkitTextStroke = "initial";
          filledElement.style.transform = "translateX(50px) translateY(50px)";
        });
      });
    } else {
      const links = document.querySelectorAll(".MainLink");
      links.forEach((link) => {
        const filledElement = link.children[0].children[0].children[0];
        const strokeElement = link.children[0].children[0].children[1];
        link.addEventListener("mouseover", () => {
          filledElement.style.color = "rgba(0,0,0,0)";
          filledElement.style.webkitTextStroke = "1px var(--blue)";
          filledElement.style.transform = "translateX(10px) translateY(10px)";
          strokeElement.style.color = "var(--beige)";
          strokeElement.style.webkitTextStroke = "initial";
        });
        link.addEventListener("mouseleave", () => {
          strokeElement.style.color = "transparent";
          strokeElement.style.webkitTextStroke = "1px var(--blue)";
          filledElement.style.color = "var(--beige)";
          filledElement.style.webkitTextStroke = "initial";
          filledElement.style.transform = "translateX(20px) translateY(20px)";
        });
      });
    }
  }, [props]);
  return (
    <Link className="link" to={props.title}>
      <div
        className="MainLink"
        id="main"
        style={
          alignLink === "left"
            ? { alignItems: "flex-start" }
            : { alignItems: "flex-end" }
        }
      >
        <div className="main">
          <div className="text">
            <h1 id="titleFill" className="fancy filled">
              {props.title}
            </h1>
            <h1 id="titleStroke" className="fancy stroke">
              {props.title}
            </h1>
          </div>
          <div className="icon"></div>
        </div>
        <div className="description">
          {props.icon}
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
}
