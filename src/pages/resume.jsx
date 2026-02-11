import Navigation from "../components/subcomponents/navigation";
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
              majoring in Data Science. Experienced in web design, front-end web
              development, and graphic design.
            </div>
          </section>
          <section>
            <h2>Experience</h2>
            <div className="experience">
              <p className="title">
                Communications Assistant - University of Michigan (IOE
                Department)
              </p>
              <p className="date">Sep. 2025 – Dec. 2025 (Ann Arbor, MI)</p>
              <ul>
                <li>
                  Owned updates to the department website and content calendar
                  to ensure timely delivery of events and announcements.
                </li>
                <li>
                  Led weekly newsletter distribution via Mailchimp to 900+
                  student and faculty subscribers, curating high-impact
                  departmental content.
                </li>
                <li>
                  Drove social media growth through visual content creation,
                  increasing reach by 63.3% and generating 300,000+ views over
                  90 days.
                </li>
              </ul>
            </div>
            <div className="experience">
              <p className="title">
                Creative Design Team Member - Michigan Advertising & Marketing
              </p>
              <p className="date">Jan. 2024 – Aug. 2025 (Ann Arbor, MI)</p>
              <ul>
                <li>
                  Conducted in-depth research on client brands to develop
                  informed creative strategies.
                </li>
                <li>
                  Collaborated with the market research team to design solutions
                  tailored to client requirements.
                </li>
                <li>
                  Provided design consultations to 4+ companies, delivering both
                  digital and print design solutions.
                </li>
              </ul>
            </div>
            <div className="experience">
              <p className="title">
                Front-end Web Developer at Pacific Sparkles
              </p>
              <p className="date">09/2020-09/2021 (Jodhpur, RJ)</p>
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
              <p className="text">B.S.E in Data Science</p>
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
