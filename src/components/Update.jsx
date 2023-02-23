import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const update = () => {
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogss/' + id)
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [body,setBody] = useState("");
    const [isLoading,setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=> {
        if(blog !== null) {
            setTitle(blog.title);            
            setAuthor(blog.author);            
            setBody(blog.body); 
        }
    },[blog])
    const handleUpdate = (e)=> {
        e.preventDefault();
        setLoading(true);
        const updatedBlog = {title, body, author};
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(updatedBlog)
        }).then(()=>{
            setLoading(false)
        }).catch(err => setErr(err.message))
        console.log(blog);
        navigate('/');
    }
    return (
        <div className="update">
            <form onSubmit={handleUpdate}>
                <label>Blog title: </label>
                <input 
                value={title}
                onChange={e=>setTitle(e.target.value)}
                type="text" name="" id="" required/>
                <label>Blog body: </label>
                <textarea name="" id="" cols="30" rows="10" 
                value={body}
                onChange={e=>setBody(e.target.value)}
                required>

                </textarea>
                <label>Blog author: </label>
                <select name="" id=""
                value={author}
                onChange={e=>setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!isLoading && <button type="submit">Update Blog</button>}
                {isLoading && <button type="submit" disabled>Updating Blog..</button>}
                {error && <div>{error}</div>}
            </form>
        </div>
    );
}
 
export default update;