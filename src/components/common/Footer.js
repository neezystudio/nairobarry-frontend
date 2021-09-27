import React from 'react'
import { MenuData } from '../../data/MenuData'
import { Column, Container, Image, Link, Rows, ScrollLinks, Wrapper } from '../styled-components/StyledComponents'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { SocialIconsData } from '../../data/SocialIcons';
import Copyright from './Copyright';

function Footer() {
    return (
        <Container background="black" padding="2-0-1-0" >
            <Rows>
                <Column md={3}>
                    <Wrapper display="flex">
                        <Image
                            src="images/avant.png"
                            alt="Avant Tv"
                            width="50px"
                            height="50px"
                        />
                    </Wrapper>
                </Column>
                <Column md={6}>
                    <Wrapper display="flex" margin="1-0-0-0">
                        {MenuData.map(data => (
                            <ScrollLinks
                                key={data.id}
                                to={data.link}
                                spy={true}
                                smooth={true}
                                color="white"
                                margin="0-2-0-2"
                                hoverColor="Default"
                            >
                                {data.placeholder}
                            </ScrollLinks>
                        ))}
                    </Wrapper>
                </Column>
                <Column md={3}>
                    <Wrapper display="flex" margin="1-0-0-0">
                        {SocialIconsData.map(socialIcon => (
                            <Link 
                                key={socialIcon.id} 
                                color="white"
                                margin="0-1-0-1"
                                hoverColor="Default"
                            >
                                {
                                    socialIcon.icon === "Facebook" ? 
                                    (
                                        <FacebookIcon/>
                                    ) : 
                                    (
                                        <TwitterIcon/>
                                    )
                                }
                            </Link>
                        ))}
                    </Wrapper>
                </Column>
            </Rows>

            {/* Copyright */}
            <Wrapper 
                display="flex"
                margin="3-0-0-0" 
            >
                <Copyright/>
            </Wrapper>
        </Container>
    )
}

export default Footer
