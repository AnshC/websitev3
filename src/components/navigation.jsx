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
                <li className="fancy">resume</li>
                <li className="fancy">about</li>
            </ul>
        </div>
    )
}