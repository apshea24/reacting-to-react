import React from "react";

import {
    Card as Cards, CardImage, CardContent, Media, MediaContent, MediaLeft, Content, Title, Subtitle
} from "bloomer";

function Card(props) {
    return (
        <div>
            <Cards href={props.url} className="port-cards">
                <CardImage>
                    <img isRatio="4:3" src={props.image}></img>
                </CardImage>
                <CardContent>
                    <Media>
                        <MediaContent>
                            <Title isSize={4}>{props.title}</Title>
                            <Subtitle isSize={6}>{props.tag}</Subtitle>
                        </MediaContent>
                    </Media>
                    <Content></Content>
                </CardContent>
            </Cards>
        </div>
    );
};

export default Card;