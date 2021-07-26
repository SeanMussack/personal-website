import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Jumbotron } from 'reactstrap';

import Home from './Home.js';
import Header from './HeaderComponent.js';

const PAGES = [
    {
        name: "Home",
        href: "home",
        color: "secondary",
        icon: "home"
    },
    {
        name: "About",
        href: "about",
        color: "success",
        icon: "user"
    },
    {
        name: "Projects",
        href: "projects",
        color: "primary",
        icon: "at"
    },
    {
        name: "Contact",
        href: "contact",
        color: "danger",
        icon: "paper-plane"
    }
]

class Main extends Component {
    render() {
        return (
            <Fragment>
                <Header pages={PAGES}/>
            
                <TransitionGroup className="transition-group">
                    <CSSTransition classNames="page" timeout={0}>
                        <Switch className="switch">
                            <Route exact path='/' render={() => <Home pages={PAGES}/>} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}

export default withRouter(Main);