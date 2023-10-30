import React, { Component } from 'react';

import './Blog.css';
import Posts from "./Posts/Posts";
import {Link, Route, Routes} from "react-router-dom";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" exact render={() => <h1>Home 2</h1>} />*/}
                <Routes>
                    <Route path="/" element={<Posts />} />
                    <Route path="/new-post" element={<NewPost />} />
                </Routes>
            </div>
        );
    }
}

export default Blog;