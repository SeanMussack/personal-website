import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

const JURASSICPROJECT = {
    name: "Jurassic Park",
    color: "yellow",
    href: "https://jurassic-park-reactstrap.netlify.app/",
    text: "Made with React and Bootstrap. The amusement park from the original Jurassic Park movie comes to life as a modern mobile-first single-page app.",
    isPicOnLeft: true,
    imgSrc: "/Jurassic_Park_logo_no_words.png",
    imgWidth: "150px",
    altText: "The Jurassic Park logo",
    imgClass: "jurassic-park-img"
}
const SPACEPROJECT = {
    name: "Pixtronauts",
    color: "cyan",
    href: "https://pixtronauts.netlify.app/",
    text: "A continual work-in-progess, this JavaScript-based browser game allows you to explore the planets of this cute pixel universe.",
    isPicOnLeft: false,
    imgSrc: "/planemo-12px-cloudy.png",
    imgWidth: "100px",
    altText: "A pixel-art planet with yellow clouds",
    imgClass: "pixtronauts-img"
}

function RenderProject(proj) {
    proj = proj.proj;
    return (
        <a href={proj.href}>
            <div
                className={"project my-5 my-sm-2 my-md-5 project-" + proj.color}
            >
                <h4>{proj.name}</h4>
                <Row>
                    <Col xs={7} sm={8} md={7} lg={8}>
                        <p className="project-text d-block d-sm-none">{proj.text}</p>
                        <p className="project-text d-none d-sm-block">{proj.text}</p>
                    </Col>
                    <Col xs={5} sm={4} md={5} lg={4}
                        className={
                            (proj.isPicOnLeft
                                ? "order-first"
                                : "order-last")}
                    >
                        <img
                            className={"project-img mx-0 mx-md-4 my-auto " + proj.imgClass}
                            src={proj.imgSrc}
                            alt={proj.altText}
                            style={{width: proj.imgWidth}}
                        />
                    </Col>
                </Row>
            </div>
        </a>
    );
}
class Projects extends Component {
    render() {
        return (
            <Container fluid={true} className="projects-container">
                <Row>
                    <Col xs={12} lg={6}>
                        <FadeTransform
                            in
                            key={"About"}
                            transformProps={{
                                enterTransform: "translateX(0px)",
                                exitTransform: "translateX(-20%)"
                            }}
                        >
                            <RenderProject proj={JURASSICPROJECT}/>
                        </FadeTransform>
                    </Col>
                    <Col xs={12} lg={6}>
                        <FadeTransform
                            in
                            key={"About"}
                            transformProps={{
                                enterTransform: "translateX(0px)",
                                exitTransform: "translateX(20%)"
                            }}
                        >
                            <RenderProject proj={SPACEPROJECT}
                        />
                        </FadeTransform>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Projects;