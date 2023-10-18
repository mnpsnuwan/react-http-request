import React, { Component } from 'react';

import './NewPost.css';

class NewPost extends Component {

    state= {
        title: '',
        content: '',
        author: 'Nuwan'
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Nuwan">Nuwan</option>
                    <option value="Nish">Nish</option>
                </select>
                <button>Add Post</button>
            </div>
        );
    }
}

export default NewPost;