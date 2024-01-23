import './styles.css'
import { Link } from 'react-router-dom'

export default function Navigation() {

    return (
        <div className="Navigation">
            <ul>
                <Link to="/" className='link'>
                    <li 
                        className="fancy"
                        
                    >
                        home
                    </li>
                </Link>
                <Link to="/resume" className='link'><li className="fancy">resume</li></Link>
                <Link to="/about" className='link'><li className="fancy">about</li></Link>
            </ul>
        </div>
    )
}