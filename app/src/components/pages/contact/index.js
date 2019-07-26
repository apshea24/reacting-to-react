import React, { Component } from "react";


import Particles from 'react-particles-js'

import {
    Hero, HeroBody, Title, Container, Card, CardContent, CardHeaderTitle, Field, FieldLabel, FieldBody,
    Label, Icon, Input, Control, TextArea, Button, Modal, ModalBackground, ModalClose, ModalContent
} from "bloomer";


class Contact extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Hero className="home-hero" isSize="medium" isBold="true" id="particle-js">

                    <HeroBody hasTextAlign="centered" className="main-hero">
                        <Particles className="particles"
                            params={{

                                "particles": {
                                    "number": {
                                        "value": 100,
                                        "density": {
                                            "enable": false,
                                            "value_area": 800
                                        }
                                    },
                                    "color": {
                                        "value": "#706f6f"
                                    },
                                    "shape": {
                                        "type": "circle",
                                        "stroke": {
                                            "width": 0,
                                            "color": "#cd8282"
                                        },
                                        "polygon": {
                                            "nb_sides": 4
                                        },
                                        "image": {
                                            "src": "img/github.svg",
                                            "width": 100,
                                            "height": 100
                                        }
                                    },
                                    "opacity": {
                                        "value": 0.5,
                                        "random": false,
                                        "anim": {
                                            "enable": false,
                                            "speed": 1,
                                            "opacity_min": 0.1,
                                            "sync": false
                                        }
                                    },
                                    "size": {
                                        "value": 6,
                                        "random": true,
                                        "anim": {
                                            "enable": true,
                                            "speed": 40,
                                            "size_min": 0.1,
                                            "sync": false
                                        }
                                    },
                                    "line_linked": {
                                        "enable": true,
                                        "distance": 150,
                                        "color": "#ffffff",
                                        "opacity": 0.4,
                                        "width": 1
                                    },
                                    "move": {
                                        "enable": true,
                                        "speed": 3,
                                        "direction": "none",
                                        "random": false,
                                        "straight": false,
                                        "out_mode": "out",
                                        "bounce": false,
                                        "attract": {
                                            "enable": false,
                                            "rotateX": 600,
                                            "rotateY": 1200
                                        }
                                    }
                                },
                                "interactivity": {
                                    "detect_on": "canvas",
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "grab"
                                        },
                                        "onclick": {
                                            "enable": true,
                                            "mode": "repulse"
                                        },
                                        "resize": true
                                    },
                                    "modes": {
                                        "grab": {
                                            "distance": 400,
                                            "line_linked": {
                                                "opacity": 1
                                            }
                                        },
                                        "bubble": {
                                            "distance": 400,
                                            "size": 40,
                                            "duration": 2,
                                            "opacity": 8,
                                            "speed": 3
                                        },
                                        "repulse": {
                                            "distance": 200,
                                            "duration": 0.4
                                        },
                                        "push": {
                                            "particles_nb": 4
                                        },
                                        "remove": {
                                            "particles_nb": 2
                                        }
                                    }
                                },
                                "retina_detect": true

                            }}>
                        </Particles>
                        <Title className="is-italic has-text-white">Contact Me</Title>
                        <p style={{ maxWidth: 600, margin: "auto", color: "#C09F80" }}>
                            Feel free to use the links below to reach out with any suggestions, functionality ideas, or just to chat. I love talking about code!
                         </p>
                    </HeroBody>
                </Hero>
                <Container style={{ marginTop: "25px" }}>
                    <Card className="contact-card">


                        <CardContent style={{ textAlign: "center" }}>
                            <h3>Connect with me on LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/austin-shea-790b2416b/"><Icon className="fab fa-linkedin-in" /></a>
                            <h3>Follow Me on Twitter</h3>
                            <a href="https://twitter.com/AlgusDark"><Icon className='fab fa-twitter' style={{ color: '#55acee' }} /></a>
                            <h3>Check out my Github</h3>
                            <a href="https://github.com/apshea24"><Icon className='fab fa-github' /></a>
                            <h3>Leave me a Message</h3>
                            <Icon className="fas fa-envelope-open-text" onClick={this.toggle} />

                        </CardContent>
                    </Card>
                </Container>
                <Modal isActive={this.state.modal}>
                    <ModalBackground />
                    <ModalContent>
                        <Card className="has-background-grey has-text-primary contact-card">


                            <CardContent style={{ textAlign: "center" }}>
                                <h3>Connect with me on LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/austin-shea-790b2416b/"><Icon className="fab fa-linkedin-in" /></a>
                                <h3>Follow Me on Twitter</h3>
                                <a href="https://twitter.com/AlgusDark"><Icon className='fab fa-twitter' style={{ color: '#55acee' }} /></a>
                                <h3>Check out my Github</h3>
                                <a href="https://github.com/apshea24"><Icon className='fab fa-github' /></a>
                                <h3>Leave me a Message</h3>
                                <Icon className="fas fa-envelope-open-text" onClick={this.toggle} />

                            </CardContent>
                        </Card>
                    </ModalContent>
                    <ModalClose onClick={this.toggle} />
                </Modal>
            </div>
        );
    }
}

export default Contact;