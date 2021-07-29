import React from 'react'
import About from '../common/About'
import ContactForm from '../common/ContactForm'
import Footer from '../common/Footer'
import Navigation from '../common/Navigation'
import OurTeam from '../common/OurTeam'
import Sponsors from '../common/Sponsors'
import { Container, Section, Wrapper } from '../styled-components/StyledComponents'

function Streaming() {
    return (
        <Section>
            {/* Navigation */}
            <Wrapper display="flex">
                <Navigation background="black"/>
            </Wrapper>

            {/* Streaming Section */}
            <Wrapper id="home">
                <iframe width="100%" height="700" src="https://www.youtube.com/embed/DyKQ7qtTJag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Wrapper>

            {/* About Movie */}
            <Container id="about">
                <About/>
            </Container>

            {/* Sponsors */}
            <Container>
                <Sponsors/>
            </Container>

            {/* Our Team */}
            <Container id="team">
                <OurTeam/>
            </Container>

            {/* Contact Us */}
            <Container id='contact-us'>
                <ContactForm/>
            </Container>

            {/* Footer */}
            <Container margin="4-0-0-0">
                <Footer/>
            </Container>
        </Section>
    )
}

export default Streaming
