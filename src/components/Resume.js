import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

const RESUME_JPG_SRC = "/Sean Mussack's resume-1.jpg"
const RESUME_PDF_SRC = "/Sean Mussack's resume.pdf";

function RenderDownloadButton() {
    return (
        <a
            href={RESUME_PDF_SRC}
            download
            className="btn btn-warning download-button"
        >
            <i className="fas fa-download" aria-hidden="true"/>Download
        </a>
    );
}
class Resume extends Component {
    render() {
        return (
            <Container className="resume-container">
                <Row>
                    <Col xs={12} sm={6} className="resume-left-col">
                        <FadeTransform
                            in
                            transformProps={{
                                enterTransform: "translateX(0px)",
                                exitTransform: "translateX(-20%)"
                            }}
                        >
                            <p>
                                PDF version of my resume:
                            </p>
                            <p>
                                <RenderDownloadButton/>
                            </p>
                        </FadeTransform>
                    </Col>
                    <Col xs={12} sm={6} className="px-4 px-md-5 mt-sm-5">
                        <FadeTransform
                            in
                            key={"About"}
                            transformProps={{
                                enterTransform: "translateX(0px)",
                                exitTransform: "translateX(20%)"
                            }}
                        >
                            <img 
                                className="resume-img img-fluid"
                                src={RESUME_JPG_SRC}
                                alt="My resume in .pdf format"
                            />
                        </FadeTransform>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Resume;