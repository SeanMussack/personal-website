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
    constructor(props) {
        super(props);
        this.props = {
            pages: null
        }
    }
    render() {
        return (
            <Stagger in className="stagger mt-3">
                {this.props.pages.map((page) => {
                    return (
                        <FadeTransform
                            in
                            key={page.name}
                            transformProps={{
                                enterTransform: "translateX(0px)",
                                exitTransform: "translateX(-20%)"
                            }
                        }>
                            <div className="page-button-row row-flex">
                                <Button color={page.color} className={"page-button col-8 col-md-4 offset-2 offset-md-4"}>
                                    <Row>
                                        <Col className="col-4 offset-0"><i className={"fas fa-sm fa-" + page.icon} aria-hidden="true"></i></Col>
                                        <Col className="col-4 offset-0">{page.name}</Col>
                                        <Col className="col-4 offset-0"><i className={"fas fa-lg fa-angle-right"} aria-hidden="true"></i></Col>
                                    </Row>
                                </Button>
                            </div>
                        </FadeTransform>
                    );
                })}
            </Stagger>
        );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.props = {
            pages: null
        }
    }
    render() {
        return (
            <RenderPageLinks pages={this.props.pages}/>
        );
    }
}

export default Home;