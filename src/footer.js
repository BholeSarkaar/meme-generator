import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
class Footer extends Component{
    render(){
        return(
            <Container fluid className="mt-4">
                <Row className="d-flex justify-content-md-between justify-content-sm-center">
                    <Col className="mt-3 text-dark col-md-4 col-sm-12">
                       <h5>Owner:Rohit Anand Naikade.</h5>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Footer;