import React, { Component } from 'react';

import './Blog.css';
import Posts from "./Posts/Posts";
import {NavLink, Route, Routes} from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import FullPost from "./Posts/Posts";

class Blog extends Component {
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" exact render={() => <h1>Home 2</h1>} />*/}
                <Routes>
                    <Route path="/" element={<Posts />} />
                    <Route path="/new-post" element={<NewPost />} />
                    <Route path="/:id" element={<FullPost />} />
                </Routes>
            </div>
        );
    }
}

export default Blog;