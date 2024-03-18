import "./styles.css";
import { useState, useEffect } from "react";
import Button from "../components/subcomponents/button";
import { TbArrowBack } from "react-icons/tb";
import Tilty from "react-tilty";
import { Scroll } from "../data/scroll";

import data from "../data/img.json";

export default function Design() {
  Scroll();
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(data.images);
  }, []);

  return (
    <div className="Design">
      <section className="jumbo">
        <div className="main">
          <div className="heading">
            <h1 className="fancy fill">de·sign</h1>
            <h1 className="fancy outline">port·fo·li·o</h1>
          </div>
          <p>
            "Design is not just what it looks like and feels like. Design is how
            it works. ~ Steve Jobs
          </p>
          <p
            className="prompt"
            style={{ fontFamily: "Raleway", fontWeight: 700 }}
          >
            Scroll down to view portfolio.
          </p>
          <Button icon={<TbArrowBack id="icon" />} text="Home" to="/" />
        </div>
      </section>
      <div className="portfolio-wrapper">
        {images.map((img) => {
          return (
            <div
              className="image-wrapper"
              key={img.fileName}
              style={{
                backgroundColor: img.palette.background,
              }}
            >
              <div className="head">
                <div className="name">
                  <h1
                    className="fancy"
                    style={{ color: img.palette.backgroundInverse }}
                  >
                    Ansh
                  </h1>
                  <h1
                    className="fancy"
                    style={{ color: img.palette.backgroundInverse }}
                  >
                    Chauhan
                  </h1>
                  <h1
                    className="fancy"
                    style={{ color: img.palette.backgroundInverse }}
                  >
                    {img.fileName}
                  </h1>
                </div>
                <div className="colors">
                  <h1
                    className="background fancy"
                    style={{
                      color: img.palette.background,
                      WebkitTextStroke: `1px ${img.palette.backgroundInverse}`,
                    }}
                  >
                    {img.palette.background}
                  </h1>
                  <h1 className="fancy" style={{ color: img.palette.primary }}>
                    {img.palette.primary}
                  </h1>
                  <h1
                    className="fancy"
                    style={{ color: img.palette.secondary }}
                  >
                    {img.palette.secondary}
                  </h1>
                  <h1 className="fancy" style={{ color: img.palette.tertiary }}>
                    {img.palette.tertiary}
                  </h1>
                  <h1 className="fancy" style={{ color: img.palette.other }}>
                    {img.palette.other}
                  </h1>
                </div>
              </div>
              <Tilty scale={1.05}>
                <img
                  src={img.location}
                  alt={img.description}
                  style={{ height: img.relativeSize, width: "auto" }}
                />
              </Tilty>
            </div>
          );
        })}
      </div>
    </div>
  );
}
