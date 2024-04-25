import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function PostLists() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://localhost:8080/api/post/getPosts',
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result);
                if (result.status) {
                    setData(result.data);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("An error occurred while fetching the data.");
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <Link to={`/posts/${item.slug}`}> <h3>{item.title}</h3> </Link>
                    </li>))}
            </ul>
            <p style={{ color: 'red' }}>{error}</p>
        </div>

    );
}

export default PostLists;