import React, { useState } from 'react'
import MobileNavigation from '../common/MobileNavigation';
import Navigation from '../common/Navigation'
import { Container, Image, Section, Wrapper } from '../styled-components/StyledComponents'

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
                  <MobileNavigation isOpen={mobileNav} toggle={toggle}/>
                </Wrapper>

                {/* Hero Content */}
                <Wrapper
                    display='flex'
                    alignItems='center'
                >
                    
                </Wrapper>
                

                
                
            </Container>
        </Section>
    )
}

export default LandingPage
