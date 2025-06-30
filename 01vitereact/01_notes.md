//In vite :

//The first letter of the function name(component name) and the file name should be capitalized

//There should only be .JSX extension for react components

//`<div>` `</div>` and also be done by <></>

In main.JSX:

We can directly use function in main function in react dom ,in place of import  App  from './App.jsx'

`<MyApp/> can also be written as Myapp() and used `

anotherElement can directly be given to react dom   //This is a **core method from React** that creates a  **virtual DOM object** .

This should be the order :

React.createElement(
    'a',                                                                         // 1️⃣ Type: an HTML tag (can also be a component)
    { href: 'https://google.com', target: '_blank' },        // 2️⃣ Props (attributes)
    'click me to visit google',                                       // 3️⃣ Children (text)
    anotherElement                                                    // 4️⃣ Children (JSX element)
