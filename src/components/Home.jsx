import '../styles/Home.css'
import useFetch from '../useFetch';
import Bloglist from "./BlogList";

const Home = () => {
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <h1>Loading..</h1>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs"/>}
        </div>
     );
}

export default Home;