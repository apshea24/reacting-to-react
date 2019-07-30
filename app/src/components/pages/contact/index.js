import React, { Component } from "react";


import Particle from '../../common/Particles'


import Form from "../../common/Form"

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

              
                    <div className="title-info">

                        <Title className="is-italic has-text-white">Contact Me</Title>
                        <p style={{ maxWidth: 600, margin: "auto", color: "#C09F80" }}>
                            Feel free to use the links below to reach out with any suggestions, functionality ideas, or just to chat. I love talking about code!
                         </p>
                    </div>
                    <Particle className="particle">
                    </Particle>
                    <HeroBody hasTextAlign="centered" className="main-hero">
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
                                <Form toggle={this.toggle}></Form>

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