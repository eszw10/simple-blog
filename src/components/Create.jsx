import { useState } from 'react';
import '../styles/Form.css'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [body,setBody] = useState("");
    const [isPending,setIsPending] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        setIsPending(true);

        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
        });
        navigate('/');
    }

    return (
        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={handleSubmit}>
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
                {!isPending && <button type="submit">Add Blog</button>}
                {isPending && <button type="submit" disabled>Adding Blog..</button>}
            </form>
        </div>
        
    );
}
 
export default Create;