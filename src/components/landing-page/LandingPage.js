import React, { useState } from 'react'
import MobileNavigation from '../common/MobileNavigation';
import Navigation from '../common/Navigation'
import { Buttons, Column, Container, Image, Placeholder, Rows, Section, Title1, Title2, Wrapper } from '../styled-components/StyledComponents'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { RecentActors } from '@material-ui/icons';
import Sponsors from '../common/Sponsors';
import OurTeam from '../common/OurTeam';
import ContactForm from '../common/ContactForm';
import Footer from '../common/Footer';

function LandingPage() {
    const [mobileNav, setMobileNav] = useState(false);

    const toggle = () => {
        setMobileNav(!mobileNav)
    }

    return (
        <Section>
            {/* Section 1 - Hero Section */}
            <Container
                id="home"
                height="90vh"
                backgroundImage="hero"
                backgroundPositionX= "-2rem"
                backgroundPositionY= "-2rem"
            >   
                
                {/* Navigation */}
                <Wrapper
                    display="flex"
                >
                  <Navigation toggle={toggle}/>  
                  {/* <MobileNavigation isOpen={mobileNav} toggle={toggle}/> */}
                </Wrapper>

                {/* Hero Content */}
                <Wrapper
                    margin="5-0-0-15"
                >

                    {/* New Series */}
                    <Wrapper>
                       <Placeholder
                            color="whitesmoke"
                            fontWeight="bold"
                        >
                            NEW SERIES
                        </Placeholder> 
                        <Container
                            width="60px"
                            height="9px"
                            background="Default"
                            margin="1-0-0-0" 
                        />
                    </Wrapper>

                    {/* Movie Title */}
                    <Title1
                        color="white"
                        fontWeight="bold"
                        margin="2-0-0-0" 
                    >
                        NAIROBARRY
                    </Title1>
                    
                    {/* Movie Year, Quality and Type */}
                    <Wrapper
                        display="flex"
                        justifyContent="start"
                    >
                        {/* Movie Year */}
                        <Placeholder 
                            color="whitesmoke"
                            margin="1.5-0-0-0"
                        >
                            2021
                        </Placeholder>

                        {/* Quality */}
                        <Wrapper
                            display="flex"
                            margin="0-0-0-1"
                        >
                            <Placeholder 
                                color="whitesmoke"
                                margin="1-0-0-0"
                                border={true}
                                padding="0.1-0.2-0.1-0.2"
                            >
                                1080
                            </Placeholder>
                            <Placeholder 
                                background="white"
                                margin="1-0-0-0"
                                border={true}
                                padding="0.1-0.2-0.1-0.2"
                                fontWeight="bold"
                            >
                                HD
                            </Placeholder>
                        </Wrapper>

                        {/* Type */}
                        <Placeholder 
                            color="whitesmoke"
                            margin="1.5-0-0-1"
                        >
                            Drama/ Action 
                        </Placeholder>
                    </Wrapper>

                    {/* Watch Movie Button */}
                    <Buttons
                        background="Default"
                        hoverBackground="Default"
                        hoverBorder="Default"
                        padding="1rem 2rem 1rem 2rem"
                        margin="3-0-0-0" 
                    >
                        <Wrapper display="flex">
                            <PlayArrowIcon/> 
                            <Placeholder 
                                color="white"
                                fontWeight="bold"
                            >
                                PLAY MOVIE
                            </Placeholder>   
                        </Wrapper>
                        
                    </Buttons>

                </Wrapper>
                
            </Container>

            {/* Section 2 - About Section */}
            <Container
                id="about"
            >
                <Wrapper display="flex">
                    <Rows>
                        {/* Movie Poster */}
                        <Column md={5}>
                            <Wrapper display="flex">
                                <Image
                                    src="https://res.cloudinary.com/emacon-production/image/upload/v1627463113/Nairobarry/Untitled_1.75.1_olm98i.jpg"
                                    width="416px"
                                    height="439px"
                                    margin="3-0-0-0" 
                                />
                            </Wrapper>
                        </Column>

                        {/* About Section */}
                        <Column md={7}>
                            <Wrapper
                                margin="5-0-0-0"
                            >
                                {/* Title */}
                                <React.Fragment>
                                   <Title2
                                        fontWeight="bold"
                                    >
                                        About Nairoberry
                                    </Title2>
                                    <Container
                                        background="Default"
                                        height="9px"
                                        width="80px"
                                        margin="1-0-0-0"
                                    /> 
                                </React.Fragment>
                                
                                {/* About */}
                                <Placeholder
                                    padding="0-2-0-0"
                                    margin="3-0-0-0"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book. It has survived not only five centuries, but also the leap into 
                                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker including 
                                    versions of Lorem Ipsum.
                                </Placeholder>
                            </Wrapper>
                        </Column>
                    </Rows>
                </Wrapper>
            </Container>

            {/* Sponsors */}
            <Container id="sponsors">
                <Sponsors/>
            </Container>

            {/* Our Team */}
            <Container
                id="team"
                margin="4-0-0-0"
            >
                <OurTeam/>
            </Container>

            {/* Contact Form */}
            <Container
                id="contact-us"
                margin="4-0-0-0"
            >
                <ContactForm/>
            </Container>

            {/* Footer */}
            <Container
                margin="4-0-0-0"
            >
                <Footer/>
            </Container>
        </Section>
    )
}

export default LandingPage
