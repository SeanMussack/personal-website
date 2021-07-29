import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Fade } from 'react-animation-components';

class Contact extends Component {
    render() {
        return (
            <Container className="contact-container">
                <Fade in>
                    <h2>Contact Me</h2>
                    <Row>
                        <Col xs={12} md={6}className="offset-md-3">
                            <ul>
                                <li>
                                    <i className="fas fa-lg fa-envelope" aria-hidden="true"/>
                                    <a href="mailto:seanmussack@gmail.com">seanmussack@gmail.com</a>
                                </li>
                                <li>
                                    <i className="fas fa-lg fa-phone" aria-hidden="true"/>
                                    +1 (612) 978-3144
                                </li>
                                <li>
                                    <i className="fab fa-lg fa-github" aria-hidden="true"/>
                                    <a href="https://github.com/SeanMussack">github.com/SeanMussack</a>
                                </li>
                                <li>
                                    <i className="fab fa-lg fa-linkedin" aria-hidden="true"/>
                                    <a href="https://www.linkedin.com/in/sean-mussack-316330211/">linkedin.com/in/sean-mussack-316330211/</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        );
    }
}

export default Contact;