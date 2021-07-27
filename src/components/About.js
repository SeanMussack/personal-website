import React, {Component, Fragment} from 'react';
import {FadeTransform, Fade, Transform} from 'react-animation-components';
import { Col, Container, Row } from 'reactstrap';

const AVATAR_SRC = "/avatar_md.jpg";
const LILY_SRC = "/lily_md.jpg";

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
        <Fragment>
            <p>
                <h3>Hello world!</h3>
                <ul>
                    <h5>
                        Sean Mussack at a glance:
                    </h5>
                    <li>
                        Location: Minneapolis, MN, USA
                    </li>
                    <li>
                        Pronouns: they/them or she/her
                    </li>
                    <li>
                        Pet: Lily the rabbit
                    </li>
                </ul>
                <ul>
                    <h5>
                        Things I Love:
                    </h5>
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
            </p>
        </Fragment>
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