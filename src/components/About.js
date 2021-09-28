import React, {Component, Fragment} from 'react';
import {FadeTransform, Fade} from 'react-animation-components';
import { Col, Container, Row } from 'reactstrap';

const AVATAR_SRC = "/avatar_md.jpg";
const LILY_SRC = "/lily_md.jpg";

function RenderAvatar() {
    return (
        <Fragment>
            <div className="justify-content-center d-flex d-lg-none">
                <img 
                    className="avatar"
                    src={AVATAR_SRC}
                    alt="My avatar"
                />
            </div>
            <div className="justify-content-center d-none d-lg-flex">
                <img 
                    className="avatar"
                    src={AVATAR_SRC}
                    alt="My avatar"
                />
            </div>
        </Fragment>
    );
}
function RenderText() {
    return (
        <div className="about-text">
            <h3>Hello world!</h3>
            <ul>
                <h5>
                    Sean Mussack <span className="text-nowrap">at a glance:</span>
                </h5>
                <li>
                    <b>Location:</b> <span className="text-nowrap">Minneapolis, MN, USA</span>
                </li>
                <li>
                    <b>Pronouns:</b> <span className="text-nowrap">they/them</span>
                </li>
                <li>
                    <b>Pet:</b> <span className="text-nowrap">Lily the rabbit</span>
                </li>
            </ul>
            <ul>
                <h5>
                    Things I Love:
                </h5>
                <li>
                    Coding
                </li>
                <li>
                    Animals
                </li>
                <li>
                    Pixel Art
                </li>
                <li>
                    World History
                </li>
            </ul>
        </div>
    );
}
function RenderLily() {
    return (
        <Fragment>
            <div className="d-none d-sm-flex justify-content-center">
                <img 
                    className="lily"
                    src={LILY_SRC}
                    alt="My rabbit, Lily, who has white fur with black ears and eyes"
                />
            </div>
            <div className="d-flex d-sm-none">
                <img
                    className="lily position-absolute bottom-0 end-0 mb-5"
                    src={LILY_SRC}
                    alt="My rabbit, Lily, who has white fur with black ears and eyes"
                />
            </div>
        </Fragment>
    );
}

class About extends Component {
    render() {
        return (
            <Container className="about-page-container">
                <Row>
                    <Col xs={12} lg={3} className="offset-lg-1">
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
                    <Col xs={12} md={6} lg={4} className="offset-md-1 offset-lg-0">
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