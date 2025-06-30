===============================
⚛️ React App Flow (Short Notes)
=================================

1. index.html

---

<div id="root"></div>
→ This is the empty box in HTML where the React app will be shown.

2. index.js

---

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai from './chai';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

<div>
    <App />
    <Chai />
  </div>
);

→ Connects React to HTML.
→ Renders App and Chai components into `<div id="root">`.

3. App.js

---

function App() {
  return `<h1>`Namaste from App Component`</h1>`;
}

export default App;

→ A simple component that returns a heading.

4. chai.js

---

function Chai() {
  return (
    `<div>`
      `<h1>`basic masala chai`</h1>`
      `<p>`This is a simple React component using Vite`</p>`
    `</div>`
  );
}

export default Chai;

→ Another component with a heading and a paragraph.

Final Flow:
-----------

index.html → index.js → App.js & chai.js → Screen Output ✅
