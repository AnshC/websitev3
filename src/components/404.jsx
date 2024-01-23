import { Link, useRouteError } from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa";


export default function ErrorPage() {
    let error = useRouteError()
    console.log(error)
    return (
        <div className="error fancy" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: "100%", height: "100vh" }} >
            <div className="content" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h1 className="fancy" style={{ color: 'var(--blue)', fontSize: "80px" }}>404</h1>
                <p className="fancy" style={{ fontSize: "40px" }}>This page does not exist.</p>
                <p><span ><Link className="link fancy" style={{ color: "var(--beige)", display: 'flex', alignItems: 'center', marginTop: '20px' }}>return back to website <FaLongArrowAltRight style={{ color: 'var(--blue)', marginLeft: '10px' }}/></Link></span></p>
            </div>
        </div>
    )
}