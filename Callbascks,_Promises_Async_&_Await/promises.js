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
    }, 3000)
}

// Function to return a Promise
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = true

            if(!error) {
                resolve()
            } else {
                reject('Error: Something went wrong...')
            }
        }, 4000)
    })
}

// createPost({title: 'Post Four', body: 'Post Four Body'})
//     .then(getPosts)                          // resolve()
//     .catch(err => console.log(err))          // reject()

// You can excute n no of Promises at a single time
// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'Goodbye')
// )

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values))


// // fetch() -> Integrate 3rd party API but fetch returns promise
// const githubUsers = fetch('https://api.github.com/users')
// const response = githubUsers.then(result => result.json()).then(res => console.log(res))