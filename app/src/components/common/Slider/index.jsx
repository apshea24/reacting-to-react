import React from "react";

import Carousel from "nuka-carousel"

import {
    Card,
    CardImage,
    Image
} from "bloomer";

class Slider extends React.Component {

    state = {
        slideIndex: 0
    }

    render() {

        return (
            <div>
                <Carousel className="slider"
                    height="400px"
                    slideIndex={this.state.slideIndex}
                    afterSlide={slideIndex => this.setState({ slideIndex })}
                >

                    <Card className="slider-card">



                        <p classname="slider-text">Javascript</p>
                        <Image src='http://placehold.it/1200x400' />

                    </Card>
                    <Card>


                        <Image src='http://placehold.it/1200x400' />


                    </Card>
                    <Card>


                        <Image src='http://placehold.it/1200x400' />


                    </Card>



                </Carousel>
            </div>
        );
    }
};

export default Slider;