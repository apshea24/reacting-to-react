import React from "react";

import { Hero, HeroBody, Title, Container, Card, Content, Media, CardContent, CardHeader, CardImage, Image, MediaLeft, MediaContent, Subtitle, CardHeaderTitle } from "bloomer";
import profileImg from "../../../styles/Images/Profile_Placeholder.jpg"

// import "../../../styles/css/style.css"

function Home(props) {
    return (
      <div>
        <Hero isColor="primary" isSize="medium" isBold="true" >
          <HeroBody hasTextAlign="centered">
            <Title>About Me</Title>
            <p style={{ maxWidth: 600, margin: "auto" }}>
              Hello, my name is Austin Shea, and I am a Full Stack Web Developer with a focus on react based applications using the MERN Stack. I am currently an Assistant Instructor with the Univerisity of Arizona Coding Bootcamp. Welcome to my site.
            </p>
          </HeroBody>
        </Hero>
        <Container style={{marginTop: "25px"}}>
        <Card className="has-background-grey has-text-primary">
        <CardHeaderTitle>
        <Title isSize={4}>Austin Shea</Title>
        </CardHeaderTitle>

    <CardContent>
        <Media>
            <MediaLeft>
                <Image isSize='30x30' src={profileImg} />
            </MediaLeft>
            <MediaContent>
                
            </MediaContent>
        </Media>
        <Content>
            People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
            <br/>
            <small>11:09 PM - 30 October 2014</small>
        </Content>
    </CardContent>
</Card>
        </Container>
      </div>
    );
  }
  
  export default Home;