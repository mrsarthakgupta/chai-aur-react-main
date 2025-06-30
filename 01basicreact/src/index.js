import React from 'react';                         // React se hum components bana sakte hain
import ReactDOM from 'react-dom/client';           // ReactDOM se hum components ko screen pe dikhate hain
import App from './App';                           // App component import kiya (App.js se)
import Chai from './chai';                         // Chai component import kiya (chai.js se)

const root = ReactDOM.createRoot(                  // root naam ka React container banaya
  document.getElementById('root')                  // HTML ka wo element jiska id = "root" hai, usko target kiya
);

root.render(
  <div>                                            // Parent div (React me ek hi parent hona chahiye)
    <App />                                        // App component yaha render hoga (main part of UI)
    <Chai />                                       // Chai component bhi yahi render hoga (extra ya test part)
  </div>
);

//render means "screen pe dikhana"
//Make sure the name of additional components file as well as function should be capitalized
//React me components ke naam capital letter se shuru hote hain
//In place of <div></div> we can use <React.Fragment></React.Fragment> or <></> (empty fragment) to avoid extra div in DOM
//React.Fragment ka use karne se DOM me extra div nahi banta, sirf components render hote hain