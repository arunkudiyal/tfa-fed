import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedData: null        // laoadedData: {id: 3}     // click - id = 3
    }

    deletePost = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then(response => {console.log(response)})
            .catch(err => {console.log(err)})
    }

    componentDidUpdate() {
        if(this.props.id !== null) {
            // Managing a condition
            if( !this.state.loadedData || (this.state.loadedData && this.state.loadedData.id !== this.props.id) ) {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                    .then(response => {
                        console.log(response);
                        this.setState({loadedData: response.data})
                    })
            }
        }
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>
        if(this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>
        }
        if(this.state.loadedData) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedData.title}</h1>
                    <p>{this.state.loadedData.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePost} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;