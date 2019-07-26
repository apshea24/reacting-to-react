import React from "react";

import Particles from 'react-particles-js'

import { Hero, HeroBody, Title, Container, Card, Content, Media, CardContent, CardHeader, CardImage, Image, MediaLeft, MediaContent, Subtitle, CardHeaderTitle } from "bloomer";
import profileImg from "../../../resources/Images/Profile_Placeholder.jpg"

import "../../../styles/css/style.css"

function Home(props) {
    return (
      <div>
        <Hero className="home-hero" isSize="medium"  isBold="true" id="particle-js">

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
            <Title className="is-italic has-text-white">About Me</Title>
            <p style={{ maxWidth: 600, margin: "auto", color: "#C09F80" }}>
              Hello, my name is Austin Shea, and I am a Full Stack Web Developer with a focus on react based applications using the MERN Stack. I am currently an Assistant Instructor with the Univerisity of Arizona Coding Bootcamp. Welcome to my site.
            </p>
          </HeroBody>
        </Hero>
        <Container style={{marginTop: "25px"}} className="container_1">
        <Card className="has-text-primary about-card">
        <CardHeaderTitle>
        <Title isSize={4}>Austin Shea</Title>
        </CardHeaderTitle>

    <CardContent className="about-content flex-container">
        <Media>
            <MediaLeft>
                <Image className="about-image" style={{order: 1, marginRight: "20px"}} isSize='30x30' src={profileImg} />
            </MediaLeft>
            <MediaContent>
                
        <Content className="about-me" style={{order: 2, color: "#C09F80"}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus exercitationem repudiandae libero veniam vitae tempora cum cupiditate error laudantium non porro ipsam eius, praesentium, facilis odit neque inventore accusamus ratione?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, sint? Exercitationem corrupti, nesciunt natus voluptate neque cum nemo iusto. Dolor, ut quos ab illum unde eveniet repellat saepe accusamus vitae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat repellat deleniti omnis nam magnam at id laboriosam nostrum incidunt, necessitatibus vero officiis quam eligendi consequuntur architecto perspiciatis asperiores! Impedit.Incidunt, explicabo mollitia. Aliquid iure atque placeat molestias pariatur ducimus, porro fuga quia veritatis alias error! Nostrum sunt omnis rem voluptatem ab, accusantium neque, iste repellendus hic eum quis non.
        </Content>
            </MediaContent>
        </Media>
    </CardContent>
</Card>
        </Container>
      </div>
    );
  }
  
  export default Home;