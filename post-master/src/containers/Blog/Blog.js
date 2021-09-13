import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts'
import { Route } from 'react-router';

import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    // Initializing empty state
    state = {
        selectedPostId: null
    }

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>

                {/* <Posts /> */}

                {/* localhost:3000/new-post */}
                {/* <Route path="/" exact render={() => <h1>Welcome Home</h1>} /> */}
                <Route path="/" exact component={Posts} />

                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;