
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function PostDetails() {
    const { slug } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'http://localhost:8080/api/post/getPostDetails/' + slug
            );

            const result = await response.json();
            if (result.status) {
                setPost(result.data);
            }
        }
        fetchData();
    }, []);

    if (!post) {
        return <span>The blog post you've requested doesn't exist.</span>;
    }
    const { title, description } = post;
    return (
        <div style={{ padding: 20 }}> <h3>{title}</h3> <p>{description}
        </p> </div>
    );
}

export default PostDetails;