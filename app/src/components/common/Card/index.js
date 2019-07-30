import React from "react";

import {
    Card as Cards, CardImage, CardContent, Media, MediaContent, MediaLeft, Content, Title, Subtitle
} from "bloomer";

function Card(props) {
    return (
        <div>
            <Cards href={props.url} className="port-cards pCards">
            <a href={props.url}>
                <CardImage className="is-flex is-horizontal-center cImage">
                    <img isRatio="" className="port-images" src={props.image} style={{height: "200px", width: "200px", margin: "auto"}}></img>
                </CardImage>
                <CardContent className="card-content">
                    <Media>
                        <MediaContent>
                            <Title className="justify-content-center port-title" isSize={4}>{props.title}</Title>
                            <Subtitle isSize={6}>{props.description}</Subtitle>
                        </MediaContent>
                    </Media>
                    <Content></Content>
                </CardContent>
            </a>
            </Cards>
        </div>
    );
};

export default Card;