import { Link } from 'react-router-dom';
import '../styles/Nav.css'

export default function Nav() {
    return(
        <nav className="navbar">
            <h1>Simple Blog</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">New Blog</Link></li>
            </ul>
        </nav>
    );
}