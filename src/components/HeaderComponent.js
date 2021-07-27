import React, {Component, Fragment} from 'react';
import { Navbar, Nav, NavItem, Row, Container, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const LOGO_SRC = "/sean-mussack-initials-final.svg"
/*const HOME_LINK = 
{
    name: "Home",
    href: "home",
    color: "white",
    icon: "home"
}*/

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
function RenderLink(link) {
    return (
        <NavItem className="col-6 col-sm-3">
            <Link 
                to={link.href}
                className="nav-link py-1 py-sm-3"
            >
                {link.name}
            </Link>
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