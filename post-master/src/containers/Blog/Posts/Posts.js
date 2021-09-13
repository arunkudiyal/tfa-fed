import React, { Component } from "react";
import Post from '../../../components/Post/Post'
import axios from 'axios'
import './Posts.css'

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        // How to make a request | Axios - PROMISES
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Mona'
                    }
                })
                this.setState( {posts: updatedPost} )
            })
            .catch(err => console.log(err))
    }

    postSelected = (id) => {
        this.setState({selectedPostId: id})
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postSelected(post.id)} />
        })

        return(
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;