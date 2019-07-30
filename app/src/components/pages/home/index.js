import React from "react";

import Particle from '../../common/Particles'

import Slider from "../../common/Slider"


import { Hero, HeroBody, Title, Container, Card, Content, Media, CardContent, CardHeader, CardImage, Image, MediaLeft, MediaContent, Subtitle, CardHeaderTitle } from "bloomer";
import profileImg from "../../../resources/Images/Profile_Placeholder.jpg"

import "../../../styles/css/style.css"

function Home(props) {
  return (
    <div>
      <Hero className="home-hero" isSize="medium" isBold="true" id="particle-js">


        <div className="title-info">

          <Title className="is-italic has-text-white">About Me</Title>
          <p style={{ maxWidth: 600, margin: "auto", color: "#C09F80" }}>
            Hello, my name is Austin Shea, and I am a Full Stack Web Developer with a focus on react based applications using the MERN Stack. I am currently an Assistant Instructor with the Univerisity of Arizona Coding Bootcamp. Welcome to my site.
            </p>
        </div>
        <Particle className="particle">
        </Particle>
        <HeroBody hasTextAlign="centered" className="main-hero">
        </HeroBody>
      </Hero>
      <Container style={{ marginTop: "25px" }} className="container_1">
        <Card className="has-text-primary about-card">
          <CardHeaderTitle>
            <Title isSize={4}>Austin Shea</Title>
          </CardHeaderTitle>

          <CardContent className="about-content flex-container">
            <Media>
              <MediaLeft>
                <Image className="about-image" style={{ order: 1, marginRight: "20px" }} isSize='30x30' src={profileImg} />
              </MediaLeft>
              <MediaContent>

                <Content className="about-me" style={{ order: 2, color: "#C09F80" }}>
                Hello! My name is Austin Shea, and I am a Full-Stack Developer with a focus on the MERN stack. I have been developing for a little over a year, but have experience in the Software Industry as an Account Executive for Streamline Vacation Rental Software. This position is what re-introduced me to the world of web development, as I had a hand in building our clients websites utilizing Wordpress . I also have some experience with Business Development for a couple of solar companies including M+W/Gehrlicher as well as SolarCity; as well as a plethora of management/customer service experience . I am an extremely hard-working, and eager new Web Developer, and I pride myself in being able to learn new technologies quickly, and work in a team efficiently. I am open to new opportunities, and am extremely excited to continue on my journey as a Programmer.  
        </Content>
              </MediaContent>
            </Media>
          </CardContent>
        </Card>
        {/* <Slider></Slider> */}
      </Container>
    </div>
  );
}

export default Home;