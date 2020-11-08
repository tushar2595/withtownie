import React, { Component } from 'react';
import AppRoutes from '../Routes/index';
import { store } from "../Redux/Store/index";
import { Provider } from "react-redux";


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>

          <AppRoutes />
        </Provider>
      </div>
    );
  }
}

export default App;