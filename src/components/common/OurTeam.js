import React from 'react'
import Slider from 'react-slick'
import { ourTeamData } from '../../data/OurTeamData'
import { Container, Image, Placeholder, Title2, Wrapper } from '../styled-components/StyledComponents'

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

function OurTeam() {
    return (
        <Wrapper display="flex">
            {/* Title */}
            <Wrapper >
                <Title2 fontWeight="bold">Our Team</Title2>
                <Container
                    background="Default"
                    height="9px"
                    width="80px"
                    margin="1-0-0-0"
                /> 
            </Wrapper>

            <Wrapper>
                <Slider {...settings}>
                    {ourTeamData.map((ourTeam) => (
                        <Container padding="0-4-0-4" key={ourTeam.id}>
                            <Wrapper>

                                {/* Team Image */}
                                <React.Fragment>
                                    <Image
                                        src={ourTeam.image}
                                        alt="Partners"
                                        height="180px"
                                        padding="0-2-0-2"
                                    />
                                </React.Fragment>

                                {/* Name */}
                                <Wrapper display="flex">
                                    <Placeholder fontWeight="bold" margin="1-0-0-0">{ourTeam.name}</Placeholder>
                                </Wrapper>

                                {/* Role */}
                                <Wrapper display="flex">
                                    <Placeholder margin="1-0-0-0">{ourTeam.role}</Placeholder>
                                </Wrapper>
                            </Wrapper>
                        </Container>
                    ))}
                </Slider>
            </Wrapper>
        </Wrapper>
    )
}

export default OurTeam
