import React, { Component } from 'react';
import './components.css';
import {Container,Row} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <Container fluid className="mt-4">
                <Row className="d-flex justify-content-md-between justify-content-sm-center bg-dark">
                    <div className="mt-3 text-white col-md-4 col-sm-12">
                       <h3>Team Baltic Knights.</h3>
                    </div>
                    <div className="mt-3 text-white col-md-4 col-sm-12">
                       <h3>Quick Links:</h3>
                       <ul className="list-unstyled ml-5">
                            <NavLink exact activeClassName="active_class" className="links" to="/">
                                <li><span className="fa fa-home fa-md mr-2"></span>Home.</li>
                            </NavLink>
                            <NavLink exact activeClassName="active_class" className="links" to="/village">
                                <li><span className="fa fa-building fa-md mr-2"></span>About village.</li>
                            </NavLink>
                            <NavLink exact activeClassName="active_class" className="links" to="/schemes">
                            <li><span className="fa fa-signal fa-md mr-2"></span>Schemes.</li>
                            </NavLink>
                            <NavLink exact activeClassName="active_class" className="links" to="/payment">
                            <li><span className="fa fa-credit-card fa-md mr-2"></span>Revenue payment.</li>
                            </NavLink>
                            <NavLink exact activeClassName="active_class" className="links" to="/about">
                            <li><span className="fa fa-address-card fa-md mr-2"></span>About us.</li>
                            </NavLink> 
                       </ul>
                    </div>
                    <div className="mt-3 text-white justify-content-sm-center col-md-4 col-sm-12">
                       <h4>Need help?</h4>
                       <p className="ml-5"><span className="fa fa-envelope-o fa-md mr-2 mt-3"></span>Email:balticknightsofficial@gmail.com.</p>
                       <h4>Connect with us:</h4>
                        <div className="mt-3 ml-5">
                            <a href="https://www.facebook.com/rohit.naikade.37" target="blank">
                            <span className="fa fa-facebook-official text-dark fa-lg circle-icon"></span></a>
                            <a href="https://www.instagram.com/bhole_sarkar._/" target="blank">
                            <span className="fa fa-instagram text-dark circle-icon fa-lg ml-4"></span></a>
                            <a href="https://twitter.com/BholeSarkar3" target="blank">
                            <span className="fa fa-twitter-square text-dark circle-icon fa-lg ml-4"></span></a>
                            <a href="https://github.com/BholeSarkaar/" target="blank">
                            <span className="fa fa-github-square text-dark fa-lg circle-icon ml-4"></span></a>
                        </div>
                    </div>
                </Row>
            </Container>
        )
    }
}
export default Footer;