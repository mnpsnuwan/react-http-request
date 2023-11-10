import React, { Component } from 'react';

import './Blog.css';
import Posts from "./Posts/Posts";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                activeClass="my-class"
                                activeStyle={{
                                    color: '#FA923F'
                                }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />

                    <Redirect from="/" to="/posts"/>
                    {/*<Route path="/" component={Posts} />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;