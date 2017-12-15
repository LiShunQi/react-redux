/**
 * Created by lsq on 2017/12/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

// import ToDoApp from './compoents/ToDoApp';
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/ToDoAppContainer';
import Home from './compoents/home/home';
import About from './compoents/about/about';
import configureStore from './redux/configStore';

const store = configureStore();

class App extends React.Component {
    render(){ // Every react component has a render method.
        return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
            <Provider store={store}>
                <div>
                    <nav className="navbar navbar-light">
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/about">about</Link></li>
                            <li><Link to="/todo">todoPage</Link></li>
                        </ul>
                    </nav>
                    <hr/>
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/todo" component={ToDoAppContainer} />
                    </Switch>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <BrowserRouter basename='/'>
       <App/>
    </BrowserRouter>
, document.getElementById('app'));
