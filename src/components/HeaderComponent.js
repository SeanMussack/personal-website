import React, {Component, Fragment} from 'react';
import { Navbar, Nav, NavItem, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';

const LOGO_SRC = "/sean-mussack-initials-final.svg"

function RenderLogo() {
    return (
        <Link to="home">
            <img
                src={LOGO_SRC}
                alt="My personal logo: the letters S M"
                className="logo"
            />
        </Link>
    )
}
function isCurrentPage(href) {
    const currentPathName = window.location.pathname;
    const isCurrentPageBool = (currentPathName == "/" + href);
    console.log("currentPathName: " + currentPathName);
    console.log("href: " + href);
    console.log("isCurrentPageBool: " + isCurrentPageBool)
    return (isCurrentPageBool);
}
function RenderArrow() {
    return (
        <Fade in duration="200">
            <i
                className="header-arrow fas fa-lg fa-caret-down"
            />
        </Fade>
    );
}
function RenderLink(link) {
    return (
        <NavItem className="col-6 col-sm-3">
            <Link 
                to={link.href}
                className={"nav-link py-1 py-sm-3" +
                    (isCurrentPage(link.href) ? " nav-link-active" : "")
                }
            >
                {link.name}
            </Link>
            {isCurrentPage(link.href)
                ? <RenderArrow/>
                : <Fragment/>
            }
        </NavItem>
    );
}
function RenderPageLinks(pages) {
    return (
        <Fragment>
            {pages.map((page) => {
                return (
                    RenderLink(page)
                );
            })}
        </Fragment>
    );
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.props = {
            pages: null
        }
    }
    render() {
        return (
            <Navbar className="row-flex px-3">
                <Col xs={6} sm={4}>
                    <RenderLogo/>
                </Col>
                <Nav className="col-6 col-sm-8">
                    {RenderPageLinks(this.props.pages)}
                </Nav>
            </Navbar>
        );
    }
}

export default Header;