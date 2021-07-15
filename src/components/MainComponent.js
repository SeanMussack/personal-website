import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Jumbotron } from 'reactstrap';

import Home from './Home.js';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <Jumbotron fluid className="py-5">
                    <h1>
                        Jumbotron Header
                    </h1>
                </Jumbotron>
                <TransitionGroup className="transition-group">
                    <CSSTransition classNames="page" timeout={0}>
                        <Switch className="switch">
                            <Home/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}

export default Main;