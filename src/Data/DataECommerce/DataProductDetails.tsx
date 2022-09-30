import React, { Component, useState } from "react";
import { Button, Col, InputGroup, Row } from "react-bootstrap";
import Slider from "react-slick";

export default class CenterMode extends Component {
    public _this: any = this
    render() {
        const settings = {
            customPaging: function (i) {
                return (
                    <div className="thumb">
                        <img src={require(`../../assets/images/pngs/1${i + 1}.png`)} alt='pngs' />
                    </div>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            
            <div className=" Product-details slider-carousel">

                <Slider {...settings}>

                    
                    <div className='slider-thumb'>
                        <img src={require('../../assets/images/pngs/11.png')} alt='pngs-11' />
                    </div>
                    <div className='slider-thumb'>
                        <img src={require('../../assets/images/pngs/12.png')} alt='pngs-12' />
                    </div>
                    <div className='slider-thumb'>
                        <img src={require('../../assets/images/pngs/13.png')} alt='pngs-13' />
                    </div>
                    <div className='slider-thumb'>
                        <img src={require('../../assets/images/pngs/14.png')} alt='pngs-14' />
                    </div>
                    
                </Slider>

            </div>
        );
    }
}



export const QuantityItems = () => {

    const [num, setNumber] = useState(0);

    const Increment = () => {
        setNumber(num + 1);
    };

    const Decrement = () => {
        if (num === 0) {
            return false;
        }
        setNumber(num - 1);
    };
    return (
        <Row className="row-sm">
            <Col>
                <div className="mb-2 me-2 sizes">
                    <span className="fw-bold me-4">Quantity:</span>
                    <InputGroup className="input-indec input-indec1 w-30 w-sm-50 mt-3">
                        <span className="input-group-btn">
                            <Button variant='default' onClick={() => Decrement()} className="minus btn btn-white btn-number btn-icon br-7 " > - </Button>
                        </span>
                        <span className="form-control text-center qty" >{num}</span>
                        <span className="input-group-btn">
                            <Button variant='default' onClick={() => Increment()} className="quantity-right-plus btn btn-white btn-number btn-icon br-7 add"> +</Button>
                        </span>
                    </InputGroup>
                </div>
            </Col>
        </Row>

    )
}