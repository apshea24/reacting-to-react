import React from "react";

import {
    Hero, HeroBody, Title, Container, Card, CardContent, CardHeaderTitle, Field, FieldLabel, FieldBody,
    Label, Icon, Input, Control, TextArea, Button
} from "bloomer";


function Contact(props) {
    return (
        <div>
            <Hero isColor="primary" isSize="medium" isBold="true" >
                <HeroBody hasTextAlign="centered">
                    <Title>Contact Me!</Title>
                    <p style={{ maxWidth: 600, margin: "auto" }}>
                        Hello, my name is Austin Shea, and I am a Full Stack Web Developer with a focus on react based applications using the MERN Stack. I am currently an Assistant Instructor with the Univerisity of Arizona Coding Bootcamp. Welcome to my site.
            </p>
                </HeroBody>
            </Hero>
            <Container style={{ marginTop: "25px" }}>
                <Card className="has-background-grey has-text-primary">


                    <CardContent style={{textAlign: "center"}}>
                        <h3>Connect with me on LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/austin-shea-790b2416b/"><Icon className="fab fa-linkedin-in" /></a>
                        <h3>Follow Me on Twitter</h3>
                        <a href="https://twitter.com/AlgusDark"><Icon className='fab fa-twitter' style={{ color: '#55acee' }} /></a>
                        <h3>Check out my Github</h3>
                        <a href="https://github.com/apshea24"><Icon className='fab fa-github' /></a>
                        <h3>Leave me a Message</h3>
                        <Icon className="fas fa-envelope-open-text" />

                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default Contact;