import React, {Component} from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import { Stagger, FadeTransform } from 'react-animation-components';

const PAGES = [
    {
        name: "About Me",
        color: "success"
    },
    {
        name: "My Skills",
        color: "warning"
    },
    {
        name: "Example Website",
        color: "danger"
    },
    {
        name: "Contact",
        color: "primary"
    }
]

class RenderPageLinks extends Component {
    render() {
        return (
            <Stagger in className="stagger mt-3">
                {PAGES.map((page) => {
                    return (
                        <FadeTransform
                            in
                            key={page.name}
                            transformProps={{
                                enterTransform: "translateX(0px)",
                                exitTransform: "translateX(-20%)"
                            }
                        }>
                            <Row className="page-button-row my-1">
                                <Button color={page.color} className={"page-button my-4 col-8 col-md-4 offset-2 offset-md-4"}>
                                    {page.name}
                                </Button>
                            </Row>
                        </FadeTransform>
                    );
                })}
            </Stagger>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <RenderPageLinks className="render-page-links"/>
        );
    }
}

export default Home;