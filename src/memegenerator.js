import React, { Component } from 'react'
import { Container, Row, Card, Col, FormControl, Form, Button } from 'react-bootstrap';
class Meme extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            AllMemes: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ AllMemes: memes })
            })
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    handleSubmit(event) {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.AllMemes.length);
        const randomMemeImg = this.state.AllMemes[randNum].url;
        this.setState({ randomImg: randomMemeImg });
    }
    render() {
        return (
            <Container fluid>
                <Row className="d-flex justify-content-md-center">
                    <Card className="mt-5 col-md-4">
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col className="d-flex justify-content-md-center col-md-6 mt-5">
                                    <FormControl
                                        type="text"
                                        name="topText"
                                        placeholder="Top text"
                                        value={this.state.topText}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col className="d-flex justify-content-md-center col-md-6 mt-5">
                                    <FormControl
                                        type="text"
                                        name="bottomText"
                                        placeholder="Bottom text"
                                        value={this.state.bottomText}
                                        onChange={this.handleChange} />
                                </Col>
                                <Col className="d-flex justify-content-md-center col-sm-12 mt-4">
                                    <Button type="submit">Generate Meme.</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-md-center mt-4 meme">
                                    <img src={this.state.randomImg}
                                    alt="Problem?"/>
                                    <h2 className="top">{this.state.topText}</h2>
                                    <h2 className="bottom">{this.state.bottomText}</h2>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Row>
            </Container>
        )
    }
}
export default Meme;