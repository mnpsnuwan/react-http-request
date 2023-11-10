import React, { Component } from 'react';

import './Blog.css';
import Posts from "./Posts/Posts";
import {NavLink, Route} from "react-router-dom";
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
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={<NewPost />} />
                <Route path="/:id" component ={<FullPost />} />
            </div>
        );
    }
}

export default Blog;