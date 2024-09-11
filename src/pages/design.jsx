import "./styles.css";
import { useState, useEffect } from "react";
import { Scroll } from "../data/scroll";
import { Link, useParams } from "react-router-dom";
import Tilty from "react-tilty";

import data from "../data/design.json"

export default function Design() {

  let { collectionName } = useParams();

  Scroll();
  const [images, setImages] = useState([]);
  const [collection, setCollection] = useState({"files": [ {location: ""}]})

  useEffect(() => {
    setCollection(data.collections[0])
    setImages(data.collections);
    console.log(collectionName);
  }, []);

  useEffect(()=>{
    let parentElement = document.querySelector(".links");
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
  })

  return (
    <div className="Design">
        <div className="top">
          <div className="nav">
          <div className="heading">
            <h1 className="fancy">de·sign <span className="fancy" style={{ color: 'var(--blue)'}}>port·fo·li·o</span></h1>
          </div>
          </div>
        </div>
        <div className="main">
        <div className="list">
          <ul className="links">
          {images.map((collection)=>{
            return (
              <div key={collection.key}>
                <Link to={`/design/${collection.key}`} id="Link">
              <li>
                <div className="front fancy">{collection.name}</div>
                <div className="back"></div>
              </li></Link>
              </div>
            )
          })}
          </ul>
        </div>
        </div>
    </div>
  );
}
