import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
function Posts() {
    return (
        <div style={{ padding: 20 }}>
            <h2>Blog</h2>
            <Outlet />
        </div>
    );
}
export default Posts;