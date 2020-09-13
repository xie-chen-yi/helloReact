import React, {Component} from 'react';
import Login from './pages/Login'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Admin from "./pages/Admin/Admin";
import './App.less'
class App extends Component {
    render() {
        return (
           <BrowserRouter>
               <Switch>
                 <Route path='/login' component={Login}></Route>
                  <Route path='/' component={Admin}></Route>
               </Switch>
           </BrowserRouter>
        );
    }
}

export default App;
