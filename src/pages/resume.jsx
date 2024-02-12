import Navigation from "../components/navigation";
import { HiOutlineDownload } from "react-icons/hi";

export default function Resume() {
  return (
    <div className="Resume">
      <h1 className="main fancy">Resume</h1>
      <p className="main" style={{ fontFamily: "Playfair Display" }}>
        Professional Experience.
      </p>
      <Navigation />
      <div className="content">
        <div className="text">
          <h1>Ansh Chauhan</h1>
          <section>
            <h2>Profile</h2>
            <div className="experience">
              Self-motivated undergraduate at the University of Michigan,
              pursuing Computer Engineering. Experienced in web design,
              front-end web development, and graphic design.
            </div>
          </section>
          <section>
            <h2>Experience</h2>
            <div className="experience">
              <p className="title">Summer Marketing Intern at Volkswagen</p>
              <p className="date">03/2023 - 06/2024</p>
              <ul>
                <li>
                  Organized marketing event to increase audience, and offline
                  presence in a small city
                </li>
                <li>
                  Conducted photo shoots and video shoots for social media
                  profiels
                </li>
                <li>Designed marketing graphics for social media</li>
                <li>
                  Handled social media profile to increase online presence
                </li>
                <li>
                  Researched and understood the company's presence locally.
                </li>
              </ul>
            </div>
            <div className="experience">
              <p className="title">Founder, Graphic Designer at Cafe Dusk</p>
              <p className="date">04/2022 - 04/2023</p>
              <ul>
                <li>Designed logo, and created brand identity</li>
                <li>
                  Managed social media to increase online presence and reach to
                  over 10,000 impressions in one month
                </li>
              </ul>
            </div>
            <div className="experience">
              <p className="title">
                Front-end Web Developer at Pacific Sparkles
              </p>
              <p className="date">09/2020-09/2021</p>
              <ul>
                <li>
                  Designed and developed the website, acting as an online
                  platform to increase sales of the product
                </li>
                <li>Designed logo and established brand identity</li>
                <li>
                  Designed various graphics to establish online presence, and
                  broaden local audience
                </li>
              </ul>
            </div>
          </section>
          <section>
            <h2>Education</h2>
            <div className="experience">
              <p className="title">University of Michigan</p>
              <p className="date">Sep 2023 - Present</p>
              <p className="text">B.S.E in Computer Engineering</p>
            </div>
          </section>
        </div>
        <div className="button">
          <a
            className="download fancy link"
            href="/downloads/resume.pdf"
            download
          >
            Download <HiOutlineDownload />
          </a>
        </div>
      </div>
    </div>
  );
}
