import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, withRouter, IndexRedirect } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import store from './stores';
import Root from './containers/root';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider >
        )
    }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
