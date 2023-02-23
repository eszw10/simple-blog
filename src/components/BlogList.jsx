import '../styles/Home.css'
import { Link } from 'react-router-dom';

const Bloglist = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    <div className="btn">
                        <Link to={`blogs/${blog.id}`}><button>Open</button></Link>
                        <Link to={`blogs/edit/${blog.id}`}><button>Edit</button></Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;