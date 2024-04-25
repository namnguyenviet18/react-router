import { useState } from 'react';
import './NewPost.css';
import { useNavigate } from 'react-router-dom';

function NewPost(props) {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const [errSlug, setErrSlug] = useState("");
    const [errTittle, setErrTitle] = useState("");
    const [errDescription, setErrDescription] = useState("");

    const handleSubmit = async () => {
        if (!data.slug) {
            setErrSlug(prev => prev = "Slug không được bỏ trống")
        } else {
            setErrSlug(prev => prev = "");
        }
        if (!data.title) {
            setErrTitle(prev => prev = "Title không được bỏ trống")
        } else {
            setErrTitle(prev => prev = "");
        }
        if (!data.description) {
            setErrDescription(prev => prev = "Description không được bỏ trống")
        } else {
            setErrDescription(prev => prev = "");
        }



        const response = await fetch(
            'http://localhost:8080/api/post/createPost',
            {
                headers: {
                    'Accept': 'application /json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();
        console.log(result);
        if (result.status) {
            navigate('/posts');
        }
    }


    return (
        <div className='wrap'>
            <h2>Create a new Post</h2>
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-25">
                            <label for="slug">Slug</label>
                        </div>
                        <div class="col-75">
                            <input className="add-post-input" type="text" id="slug" name="slug" placeholder="Enter slug..." onChange={(e) => setData({ ...data, slug: e.target.value })} />
                        </div>
                    </div>
                    {<p style={{ color: "red" }}>{errSlug}</p>}
                    <div className="row">
                        <div className="col-25">
                            <label for="title">Title</label>
                        </div>
                        <div className="col-75">
                            <input className="add-post-input" type="text" id="title" name="title" placeholder="Enter title..." onChange={(e) => setData({ ...data, title: e.target.value })} />
                        </div>
                    </div>
                    {<p style={{ color: "red" }}>{errTittle}</p>}
                    <div className="row">
                        <div className="col-25">
                            <label for="des">Description</label>
                        </div>
                        <div className="col-75">
                            <textarea id="description" name="description" placeholder="Write something.." style={{ 'height': '200px' }}
                                onChange={(e) => setData({ ...data, description: e.target.value })} ></textarea>
                        </div>
                    </div>
                    {<p style={{ color: "red" }}>{errDescription}</p>}
                    <br />
                    <div className="row">
                        <input type="submit" value="Add Post" onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewPost;