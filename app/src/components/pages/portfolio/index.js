import React from "react";

import { Hero, HeroBody, Title, Container, Columns, Column, Notification,  } from "bloomer";

import "../../../resources/links.json"

import Card from "../../common/Card"


function Portfolio(props) {
    return (
      <div>
        <Hero isColor="primary" isSize="medium" isBold="true" >
          <HeroBody hasTextAlign="centered">
            <Title>My Portfolio</Title>
            <p style={{ maxWidth: 600, margin: "auto" }}>
              Hello, my name is Austin Shea, and I am a Full Stack Web Developer with a focus on react based applications using the MERN Stack. I am currently an Assistant Instructor with the Univerisity of Arizona Coding Bootcamp. Welcome to my site.
            </p>
          </HeroBody>
        </Hero>
        <Container style={{marginTop: "25px"}}>
        <Columns isCentered>
    <Column isSize='1/3'>
        <Card></Card>
    </Column>
    <Column isSize='1/3'>
        <Notification isColor='success' hasTextAlign='centered'> isOneThird </Notification>
    </Column>
    <Column isSize='1/3'>
        <Notification isColor='success' hasTextAlign='centered'> isOneThird </Notification>
    </Column>

</Columns>
        </Container>
      </div>
    );
  }
  
  export default Portfolio;