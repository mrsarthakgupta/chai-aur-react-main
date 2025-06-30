function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)         //Create a real DOM element using the 'type' from the reactElement
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {                             // Loop through all the props in the reactElement's props object
        if (prop === 'children') continue;                               // Skip 'children' prop because it's handled as innerHTML above
        domElement.setAttribute(prop, reactElement.props[prop])          // For each other prop, add it as an attribute to the DOM element
    }
    container.appendChild(domElement)
}

const reactElement = {                                                  //Example React-like object: represents <a href="..." target="...">Click me...</a>
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)                               // Call customRender to convert reactElement into real DOM and insert it into the page