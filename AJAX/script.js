// AJAX for Integrating GitHUb API in the application

// To make a request to a server you need XMLHttpRequest (XHR)

// STEP 1 - Create the object of XHR
const xhr = new XMLHttpRequest()
// console.log('The first value : ' + xhr.readyState);
const url = 'https://api.github.com/users'

// STEP 2 - Open the portal of communication bw client & server
// xhr.open(HTTPMethod, urlOfTheAPI)
xhr.open('GET', url)
// console.log('The second value : ' + xhr.readyState);
xhr.readyState

// STEP 3 - Keep the track of the state-change
xhr.onreadystatechange = () => {
    // console.log('The third value : ' + xhr.readyState);
    // STEP 4 - Check if readYState is 4 & status is 200
    if(xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText)
        console.log(response);
        
        for(let i=0; i < 30; i++) {
            const image = document.createElement('img')
            image.src = response[i].avatar_url
            console.log(image);

            const para = document.createElement('p')
            para.className = 'lead'
            para.innerHTML = `<b>${response[i].login}</b>`
            para.style.textAlign = 'center'
            console.log(para);

            const hr = document.createElement('hr')

            const box = document.getElementById('main')
            box.appendChild(image)
            box.appendChild(para)
            box.appendChild(hr)

        }
    }
}

// STEP 5 - Send the request
xhr.send()