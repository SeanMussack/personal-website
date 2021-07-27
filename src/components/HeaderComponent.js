import React, {Component, Fragment} from 'react';
import { Navbar, Nav, NavItem, Row, Container, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function RenderPageLinks(pages) {
    return (
        <Fragment>
            {pages.map((link) => {
                return (
                    <NavItem className="col-6 col-sm-3 py-0">
                        <NavLink 
                            to={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </NavLink>
                    </NavItem>
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
            <Navbar className="row-flex ">
                <Col xs={0} sm={4}>
                </Col>
                <Nav className="col-12 col-sm-8 m-0">
                    {RenderPageLinks(this.props.pages)}
                </Nav>
            </Navbar>
        );
    }
}

export default Header;