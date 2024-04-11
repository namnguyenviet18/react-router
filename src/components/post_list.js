import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostLists() {

    const [posts, setPosts] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                "http://localhost:8080/getPost",
                {
                    method: 'GET'
                }
            );
            const json = await data.json();
            console.log(json.data);
            setPosts(json.data);
        }

        fetchData();
    },);

    return (
        <ul>
            {Object.entries(posts).map(([slug, { title }]) => (
                <li key={slug}>
                    <Link to={`/posts/${slug}`}> <h3>{title}</h3> </Link>
                </li>))}
        </ul>
    );
}

export default PostLists;