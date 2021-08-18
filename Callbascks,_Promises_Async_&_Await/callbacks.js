const posts = [
    { title: 'Post One', body: 'Post One Body' },
    { title: 'Post Two', body: 'Post Two Body' },
    { title: 'Post Three', body: 'Post Three Body' }
]

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach( (post) => {
            output += `<li>${post.title}</li>`
        } )
        document.getElementById('container').innerHTML = output
    }, 4000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 3000)
}

createPost( {title: 'Post Four', body: 'Post Four Body'}, getPosts )