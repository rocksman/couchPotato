import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from './home';
// import Search from './search';
import Login from './login';
import Register from './register';

class Root extends Component {
    render() {
        return (
            <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={withRouter(Home)} />
                        <Route exact path='/home' component={withRouter(Home)} />
                        <Route exact path='/auth' component={withRouter(Login)} />
                        <Route exact path='/auth/login' component={withRouter(Login)} />
                        <Route exact path='/auth/register' component={withRouter(Register)} />
                        {/* <Route exact path='/search' component={withRouter(Search)} /> */}
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default Root;