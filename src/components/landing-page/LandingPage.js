import React, { useState } from 'react'
import MobileNavigation from '../common/MobileNavigation';
import Navigation from '../common/Navigation'
import { Buttons, Container, Image, Placeholder, Section, Title1, Wrapper } from '../styled-components/StyledComponents'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
        </Section>
    )
}

export default LandingPage
