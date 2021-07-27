import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Jumbotron } from 'reactstrap';

import Header from './HeaderComponent.js';
import Home from './Home.js';
import About from './About.js';

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
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Header pages={PAGES}/>
            
                <TransitionGroup className="transition-group">
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={0}>
                        <Switch className="switch">
                            <Route path='/home' render={() => <Home pages={PAGES}/>} />
                            <Route path='/about' component={About}/>
                            <Redirect to='/home'/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}

export default withRouter(Main);