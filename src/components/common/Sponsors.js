import React from 'react'
import Slider from 'react-slick'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import { sponsorsData } from '../../data/SponsorData'
import { Container, Image, Wrapper } from '../styled-components/StyledComponents'

var settings = {
    dots: true,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    centerMode: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
}

function Sponsors() {
    return (
        <Slider {...settings}>
            {sponsorsData.map((sponsor, index) => (
                <Container 
                    key={index}
                    background="primary"
                    padding="5-0-5-0"
                    margin="4-0-0-0"
                >
                    <Image
                        src={sponsor}
                        alt="Partners"
                        height="100px"
                        padding="0-2-0-2"
                        // margin="0-3-0-0" 
                    />
                </Container>
            ))}
        </Slider>
    )
}

export default Sponsors
