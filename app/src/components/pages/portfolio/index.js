import React from "react";

import Particle from '../../common/Particles'

import { Hero, HeroBody, Title, Container, Columns, Column, Notification, } from "bloomer";

import Projects from "../../../resources/links.json"

import Card from "../../common/Card"


function Portfolio(props) {
  return (
    <div>
      <Hero className="home-hero" isSize="medium" isBold="true" id="particle-js">

        <div className="title-info">

          <Title className="is-italic has-text-white">My Portfolio</Title>
          <p style={{ maxWidth: 600, margin: "auto", color: "#C09F80" }}>
            Below you will find links to several solo and group projects that I have worked on. A few are built using React, and Others will be rebuilt using various technologies. Feel free to leave any suggestions.
          </p>
        </div>
        <Particle className="particle">
        </Particle>
        <HeroBody hasTextAlign="centered" className="main-hero">
        </HeroBody>
      </Hero>
      <Container style={{ marginTop: "25px" }}>
        <Columns className="is-multiline">

          {
            Projects.map(post => {
              return (
                <Column isSize="1/3">
                  <Card title={post.title} url={post.url} image={post.image} description={post.description} className="port-cards"></Card>
                </Column>
              )
            })
          }
          {/* <Column isSize='1/3'>
            <Card></Card>
          </Column> */}
          {/* <Column isSize='1/3'>
            <Notification isColor='success' hasTextAlign='centered'> isOneThird </Notification>
          </Column>
          <Column isSize='1/3'>
            <Notification isColor='success' hasTextAlign='centered'> isOneThird </Notification>
          </Column> */}

        </Columns>
      </Container>
    </div>
  );
}

export default Portfolio;