import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            <header>
                <Container>
                    <Row>
                        <Col className="col-md-3 col-sm-1">
                            <img
                                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                                alt="Problem?"
                                height="100px"
                                width="100px"
                            />
                        </Col>
                        <Col className="col-md-9 col-sm-11 ml-0">
                            <h1 className="p ml-0 col-md-9">Meme Generator</h1>
                        </Col>
                    </Row>

                </Container>


            </header>
        )
    }
}

export default Header;
