// Explore the document
// console.dir(document)       // Object

// Access the content from the document
// console.log(document.URL);
// console.log(document.title);
// console.log(document.domain);

// Accessing the HTML Element in the docuumnet
// const title = document.all[10]
// const secondTitle = document.all[13]

// console.log(secondTitle);
// secondTitle.textContent = `Don't Add Items!`
// title.textContent = `Hello, I am a New Title`



// IDENTIFIER METHODS - id, className, tagName, querySelector, querySelectorAll

// 1. id
// const heading = document.getElementById('header-title')

// Changes you can perform
// heading.textContent = `New Text`
// heading.innerHTML = `<h3>New Text</h3>`

// CSS Changes
// background-color ---> camelCase ---> backgroundColor
// heading.style.borderBottom = `5px solid black`


// 2. className
// const items = document.getElementsByClassName('list-group-item')
// for(let i=0; i < items.length; i++) {
//     if(i % 2 == 0) {
//         items[i].style.backgroundColor = 'grey'
//     }
// }


// 3. tagName
// const items = document.getElementsByTagName('li')
// for(let i=0; i < items.length; i++) {
//     if(i % 2 == 0) {
//         items[i].style.backgroundColor = 'grey'
//     }
// }



// 4. querySelector - id + class + tag
// const head =  document.querySelector('#header-title')
// console.log(head);

// const items = document.querySelector('.list-group-item')
// console.log(items);

// const itemsTwo = document.querySelector('li')
// console.log(itemsTwo);


// 5. querySelectorAll - id + class + tag
// const head =  document.querySelectorAll('#header-title')
// console.log(head);

// const items = document.querySelectorAll('.list-group-item')
// console.log(items);

// const itemsTwo = document.querySelectorAll('li')
// console.log(itemsTwo);



// DOM EVENTS - addEventListner

// function vaishnaviEvent() {
//     alert('Button was Clicked!')
// }

// const button = document.querySelector('#button')
// // element.addEventListener(nameOfTheEvent, nameOfTheFunctionality)
// button.addEventListener('dblclick', vaishnaviEvent)


// INPUT_TEXT EVENTS
// const text = document.querySelector('#text-input')

// text.addEventListener('focus', () => {
//     console.log(`FOCUSED ON ME`);
// })

// text.addEventListener('blur', () => {
//     console.log(`BLURRED ON ME`);
// })

// text.addEventListener('cut', () => {
//     console.log(`CUT EVENT`);
// })

// text.addEventListener('copy', () => {
//     console.log(`COPY EVENT`);
// })

// text.addEventListener('paste', () => {
//     console.log(`PASTE EVENT`);
// })


// EVENT EMITTERS | Event Parameter
// A parameter which is a parameter to a function which is listening to an event
// const textInput = document.getElementById('text-input')
// KeyUp & KeyDown
// textInput.addEventListener('keyup', () => {
//     console.log('Key has been relaesed');
// })

// textInput.addEventListener('keydown', () => {
//     console.log('Key is being pressed');
// })

// Access the data that my user is trying to type
// textInput.addEventListener('keyup', (event) => {
//     console.log(event.target.value);
// })

// button = document.getElementById('submitBtn')
// button.addEventListener('click', (e) => {
//     // Prevents the default nature of the submit button to submit the form
//     e.preventDefault();
//     console.log(e);
// })

// FUN ACTIVITY WITH THE BOX
// const box = document.getElementById('box')
// box.addEventListener('mouseenter', (e) => {
//     box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`
// })

// box.addEventListener('mouseleave', (e) => {
//     box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 150)`
// })



// DOM TRAVERSALS - A method to access HTML Elements based on relationships
// parent, children, siblings

// 1. PARENT NODES
// const list = document.getElementById('items')
// list.parentElement.style.backgroundColor = 'yellow'

// chaining of DOM
// console.log(list.parentElement.parentElement);
// list.parentElement.parentElement.style.backgroundColor = 'grey';

// FUN ACTIVITY
const button = document.getElementById('button')
button.addEventListener('click', () => {
    list.parentElement.style.backgroundColor = 'yellow';
})


// CHILDREN NODES
// console.log(list.children);
// console.log(list.children[0]);

// firstChild, lastName
// console.log(list.firstChild);                // text -> Indentation
// console.log(list.firstElementChild);

// console.log(list.lastChild);                 // text -> Indentation
// console.log(list.lastElementChild);



// SIBLINGS
// console.log(list.previousSibling);              // text -> Indentation
// console.log(list.previousElementSibling);

// console.log(list.nextSibling);
// console.log(list.nextElementSibling);



// VVVVVVV IMPORTANT
// Creating HTML Elements

// const newLI = document.createElement('li')

// Set the Attributes of the HTML Element
// newLI.id = 'new-li'
// newLI.className = 'list-group-item'
// newLI.textContent = `Item 7`

// const list = document.getElementById('items')
// // Add this in the ul list
// list.appendChild(newLI)

// console.log(list.lastElementChild);

// console.log(newLI);



// Adding Items through Form
const newLI = document.createElement('li')
newLI.className = 'list-group-item'

const text = document.getElementById('text-input')
text.addEventListener('keyup', (e) => {
    const textData = e.target.value
    newLI.textContent = textData
    console.log(newLI);
    const button = document.getElementById('submitBtn')
        button.addEventListener('click', (e) => {
        e.preventDefault()
        const list = document.getElementById('items')
        list.appendChild(newLI)
    })
})

console.log(newLI);