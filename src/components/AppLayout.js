
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './home';
import About from './about';
import Posts from './post';
import PostLists from './post_list';
import PostDetails from './post_details';
import Stats from './stats';
import Login from './login';
import NoMatch from './no_match';
import ProtectedRoute from './ProtectRoute';
import NewPost from './new_post/NewPost';
function AppLayout() {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    function logOut() {
        setUser(null);
        navigate("/newpost");
    }
    return (
        <div>
            <nav style={{ margin: 10 }}>
                <Link to="/" style={{ padding: 5 }}> Home </Link>
                <Link to="/posts" style={{ padding: 5 }}> Posts </Link>
                <Link to="/newpost" style={{ padding: 5 }}>Create Post</Link>
                <Link to="/about" style={{ padding: 5 }}> About </Link>
                <span> | </span>
                {user && <Link to="/stats" style={{ padding: 5 }}> Stats </Link>}
                {!user && <Link to="/login" style={{ padding: 5 }}> Login </Link>}
                {user && < span onClick={logOut} style={{ padding: "5px", color: "'pointer’}}>" }}>Logout</span>}
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />}>
                    <Route index element={<PostLists />} />
                    <Route path=":slug" element={<PostDetails />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login onLogin={setUser} />} />

                <Route path="/stats" element={<ProtectedRoute user={user}><Stats /></ProtectedRoute>} />
                <Route path="/newpost" element={<ProtectedRoute
                    user={user}><NewPost /></ProtectedRoute>} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>);
}

export default AppLayout;