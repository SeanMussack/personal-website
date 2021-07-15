import React, { Component } from 'react';
import { Col, Row, Container, Button, Card, CardBody, CardHeader } from 'reactstrap';
//require('bootstrap');

class Main extends Component {
    render() {
        return (
            <Container>
                <div>
                    <Button color="primary">testo</Button>
                    <button type="button" className="btn btn-primary">mesto</button>
                </div>
                <Row>
                    <Col>
                        <Button outline color="primary">Henlo Nerld</Button>
                    </Col>
                    <Col>
                        <Button color="success">Hensto Sterld</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="warning">Hento Terld</Button>
                    </Col>
                    <Col>
                        <Button color="danger">Menro Merld</Button>
                    </Col>
                </Row>
                <Row>
                    <Card>
                        <CardHeader>
                            Card Header
                        </CardHeader>
                        <CardBody>
                            Card Body
                        </CardBody>
                    </Card>
                    <div class="card">
                        <div class="card-header">
                            carh
                        </div>
                        <div class="card-body">
                            carb
                        </div>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Main;