import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Login } from "./Components/Login"
import { UserPageGuard } from "./Components/UserPageGuard"
import { DefaultView } from "./Components/DefaultView"
import { Posts } from "./Components/Posts"

class App extends Component {
  state = { authenticated: false }

  render() {  
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/:userName"
          element={<UserPageGuard user={this.state} />}
        >
          <Route index element={<DefaultView />} />
          <Route path="posts" element={<Posts />} />
        </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
}

export default App;
