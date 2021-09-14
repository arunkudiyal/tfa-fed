import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts'
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';

import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    // Initializing empty state
    state = {
        selectedPostId: null
    }

    componentDidMount() {
        console.log(this.props);
    }

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to={{pathname: 'new-post', 
                                hash: '#something',
                                search: '?quick-serach'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                {/* <Posts /> */}

                {/* localhost:3000/new-post */}
                {/* <Route path="/" exact render={() => <h1>Welcome Home</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;