import React, {Component, Fragment} from 'react';
import {FadeTransform, Fade, Transform} from 'react-animation-components';
import { Col, Container, Row } from 'reactstrap';

const AVATAR_SRC = "/avatar_small.jpeg";
const LILY_SRC = "/lily.jpg";

function RenderAvatar() {
    return (
        <div className="d-flex justify-content-center">
            <img 
                className="avatar"
                src={AVATAR_SRC}
                alt="My avatar"
            />
        </div>
    );
}
function RenderText() {
    return (
        <p>Hello worlds!</p>
    );
}
function RenderLily() {
    return (
        <div className="d-flex justify-content-center">
            <img 
                className="lily"
                src={LILY_SRC}
                alt="My rabbit, Lily, who has white fur with black ears and eyes"
            />
        </div>
    );
}

class About extends Component {
    render() {
        return (
            <Container fluid={true} className="about-page-container">
                <Row>
                    <Col xs={12} sm={3} className="offset-sm-1">
                        <FadeTransform
                            in
                            key={"About"}
                            transformProps={{
                                enterTransform: "translateX(0px)",
                                exitTransform: "translateX(-20%)"
                            }}
                        >
                            <RenderAvatar/>
                        </FadeTransform>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Fade in>
                            <RenderText/>
                        </Fade>
                    </Col>
                    <Col>
                        <FadeTransform
                            in
                            key={"About"}
                            transformProps={{
                                enterTransform: "translateX(0px)",
                                exitTransform: "translateX(20%)"
                            }}
                        >
                            <RenderLily/>
                        </FadeTransform>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;