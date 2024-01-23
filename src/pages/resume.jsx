import Navigation from "../components/navigation"
import { HiOutlineDownload } from "react-icons/hi";


export default function Resume () {
    return (
        <div className="Resume">
            <h1 className="main fancy">Resume</h1>
            <Navigation />
            <div className="content">
                <img src="/img/resume.jpg" alt="" />
                <div className="text">
                    <div className="download fancy">Download <HiOutlineDownload /></div>
                </div>
            </div>
        </div>
    )
}