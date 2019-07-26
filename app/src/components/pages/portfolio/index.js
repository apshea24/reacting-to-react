import React from "react";

import Particles from 'react-particles-js'

import { Hero, HeroBody, Title, Container, Columns, Column, Notification, } from "bloomer";

import Projects from "../../../resources/links.json"

import Card from "../../common/Card"


function Portfolio(props) {
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
          <Title className="is-italic has-text-white">My Portfolio</Title>
          <p style={{ maxWidth: 600, margin: "auto", color: "#C09F80" }}>
           Below you will find links to several solo and group projects that I have worked on. A few are built using React, and Others will be rebuilt using various technologies. Feel free to leave any suggestions.
</p>
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