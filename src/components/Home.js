import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'reactstrap';
import { Stagger, FadeTransform } from 'react-animation-components';

function RenderPageLinks (pages) {
    return (
        <Stagger in className="stagger">
            {pages.map((page) => {
                return (
                    <FadeTransform
                        key={page.name}
                        transformProps={{
                            enterTransform: "translateX(0px)",
                            exitTransform: "translateX(-20%)"
                        }
                    }>
                        <div className="page-button-row row justify-content-center">
                            <Link
                                to={page.href}
                                className={"page-button d-inline-flex justify-content-center btn color-" + page.color}
                            >
                                <Row className="">
                                    <Col className="col-1 offset-3"><i className={"fas fa-sm fa-" + page.icon} aria-hidden="true"></i></Col>
                                    <Col className="col-4 offset-0">{page.name}</Col>
                                    <Col className="col-1 offset-0"><i className={"fas fa-lg fa-angle-right"} aria-hidden="true"></i></Col>
                                </Row>
                            </Link>
                        </div>
                    </FadeTransform>
                );
            })}
        </Stagger>
    );
}

class Home extends Component {
    static defaultProps = {
        pages: null
    }
    render() {
        return (
            <Container className="home-page-container">
                {RenderPageLinks(this.props.pages)}
            </Container>
        );
    }
}

export default Home;