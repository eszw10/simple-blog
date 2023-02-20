import '../styles/Nav.css'

export default function Nav() {
    return(
        <nav className="navbar">
            <h1>Simple Blog</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/create">New Blog</a></li>
            </ul>
        </nav>
    );
}