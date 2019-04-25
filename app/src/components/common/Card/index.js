import React from "react";

import {
    Card, CardImage, CardContent, Media, MediaContent, MediaLeft, Content, Tile, Subtitle
} from "bloomer";

function Card(props) {
    return (
        <div>
            <Card href={props.url}>
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
            </Card>
        </div>
    );
}