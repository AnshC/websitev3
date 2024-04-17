import Navigation from "../components/subcomponents/navigation";

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="About">
      <h1 className="main fancy">About</h1>
      <p className="main">A little bit about me. </p>
      <Navigation />
      <div className="content">
        <div className="image">
          <div className="image-container">
            <img src="/img/main.png" alt="Me, myself, and I." />
          </div>
        </div>
        <div className="text">
          <p className="body">
            Hey! I'm Ansh Chauhan, an undergraduate at the University of
            Michigan (class of 2027), majoring in computer engineering. I'm a
            self-taught and motivated tech enthusiast with a focus on front-end
            web development and design, alongside graphic designing. I also am a
            coffee enthusiast and spend a lot of my free time indulging in
            coffee.
          </p>
          <p className="body">
            I am a part of the creative design time for Michigan Advertising and
            Marketing, as well as a member of the Indian American Student
            Association at UofM. My skills include HTML/CSS/JS, React.js, Google
            Firebase, Adobe Photoshop, Adobe Illustrator, Adobe Premier Pro, and
            the whole Microsoft Suite.
          </p>
          <div className="icons">
            <a href="https://instagram.com/ansh.c05">
              <FaInstagram className="icon instagram" />
            </a>
            <a href="https://github.com/AnshC">
              <FaGithub className="icon github" />
            </a>
            <a href="https://www.linkedin.com/in/anshc05/">
              <FaLinkedin className="icon linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
