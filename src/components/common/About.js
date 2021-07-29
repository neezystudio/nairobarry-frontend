import React from 'react'
import { Column, Container, Image, Placeholder, Rows, Title2, Wrapper } from '../styled-components/StyledComponents'

function About() {
    return (
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
    )
}

export default About
