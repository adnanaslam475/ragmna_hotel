import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";

// Default Carousel

export class DefaultCarousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
        };
        return (
            <div>
                <Slider {...settings}>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/19.jpg")} data-bs-holder-rendered="true" />

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/20.jpg")} data-bs-holder-rendered="true" />

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/21.jpg")} data-bs-holder-rendered="true" />

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/22.jpg")} data-bs-holder-rendered="true" />

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/23.jpg")} data-bs-holder-rendered="true" />

                </Slider>
            </div>
        );
    }
}
// Carousel with indicators

 export class CarouselwithIndicator extends Component {
     render() {
         const settings = {
             dots: true,
             infinite: true,
             speed: 500,
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
             autoplay: true,
             autoplaySpeed: 2000,
             cssEase: "linear"
         };
         return (
             <div>
                 <Slider {...settings}>

                             <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/24.jpg")}/>

                             <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/25.jpg")}/>

                             <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/1.jpg")}/>

                             <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/2.jpg")}/>

                             <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/3.jpg")}/>
                 </Slider>
             </div>
         );
     }
 }

//  Carousel with controls

 export class CarouselwithControls extends Component {
     render() {
         const settings = {
             dots: false,
             infinite: true,
             speed: 500,
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: true,
             autoplay: false,
             autoplaySpeed: 2000,
             cssEase: "linear"
         };
         return (
             <div>
                 <Slider {...settings}>
                 
                             <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/4.jpg")}/>

                             <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/5.jpg")}/>

                             <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/6.jpg")}/>

                             <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/7.jpg")}/>

                             <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/8.jpg")}/>


                 </Slider>
             </div>
         );
     }
 }

//  Carousel with captions

export function CarouselwithCaption() {

    return (
<Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 active"
            src={require("../../assets/images/media/9.jpg")}
            alt="First slide"
        />
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>Secure other greater pleasures</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5"
            src={require("../../assets/images/media/10.jpg")}
            alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>Secure other greater pleasures</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5"
            src={require("../../assets/images/media/11.jpg")}
            alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>Secure other greater pleasures</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5"
            src={require("../../assets/images/media/12.jpg")}
            alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>Secure other greater pleasures</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5"
            src={require("../../assets/images/media/13.jpg")}
            alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>Secure other greater pleasures</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
)
}

// Carousel with top indicators

export class CarouselwithTopIndicator extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="Top">
                <Slider {...settings}>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/14.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/15.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/16.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/17.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/18.jpg")}/>


                </Slider>
            </div>
        );
    }
}

// Carousel with top-right indicators

export class CarouselwithTopRightIndicator extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="Top-right">
                <Slider {...settings}>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/19.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/20.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/21.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/22.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/23.jpg")}/>


                </Slider>
            </div>
        );
    }
}

// Carousel with top-left indicators

export class CarouselwithTopLeftIndicator extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="Top-left">
                <Slider {...settings}>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/24.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/25.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/1.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/2.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/3.jpg")}/>


                </Slider>
            </div>
        );
    }
}

// Carousel with bottom-right indicators

export class CarouselwithbottomRightIndicator extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="bottom-right">
                <Slider {...settings}>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/4.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/5.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/6.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/7.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/8.jpg")}/>


                </Slider>
            </div>
        );
    }
}


// Carousel with bottom-left indicators

export class CarouselwithbottomLeftIndicator extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="bottom-left">
                <Slider {...settings}>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/9.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/10.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/11.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/12.jpg")}/>

                            <img className="d-block w-100 br-5" alt="" src={require("../../assets/images/media/13.jpg")}/>


                </Slider>
            </div>
        );
    }
}

// Carousel with Background color captions

export function CarouselwithBackgroundColorCaption() {

    return (
<Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 active"
            src={require("../../assets/images/media/red.jpg")}
            alt="First slide"
        />
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5"
            src={require("../../assets/images/media/blue.jpg")}
            alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5"
            src={require("../../assets/images/media/green.jpg")}
            alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
)
}

// Carousel with GradientBackground caption

export function CarouselwithGradientBackgroundCaption() {

    return (
<Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5 active"
            src={require("../../assets/images/media/gradient1.jpg")}
            alt="First slide"
        />
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5"
            src={require("../../assets/images/media/gradient2.jpg")}
            alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100 br-5"
            src={require("../../assets/images/media/gradient3.jpg")}
            alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Slide label</h3>
        <p>The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
)
}

