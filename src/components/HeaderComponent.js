import React, {Component, Fragment} from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const LINKS = [
    {
        name: "Home",
        href: "#"
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Contact",
        href: "#contact"
    }
]

function RenderPageLinks() {
    return (
        <Fragment>
            {LINKS.map((link) => {
                return (
                    <NavItem>
                        <NavLink href={link.href}>
                            {link.name}
                        </NavLink>
                    </NavItem>
                );
            })}
        </Fragment>
    );
}

class Header extends Component {
    render() {
        return (
            <Nav>
                <Navbar className="col-12 col-md-6 offset-md-6">
                    {RenderPageLinks()}
                </Navbar>
            </Nav>
        );
    }
}

export default Header;