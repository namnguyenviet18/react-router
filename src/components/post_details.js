
import { useParams } from 'react-router-dom';
const BlogPosts = require('../data/blog_data');
function PostDetails() {
    const { slug } = useParams();
    console.log(slug);
    const post = BlogPosts[slug];
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