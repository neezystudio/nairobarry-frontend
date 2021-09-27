import React, { useState } from 'react'
import { MenuData } from '../../data/MenuData'
import { Buttons, Column, Container, Image, Link, MenuBars, Rows, ScrollLinks, Wrapper } from '../styled-components/StyledComponents'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AuthenticationModal from '../authentication-modals/AuthenticationModal';

function Navigation({ toggle, background }) {
    const [navbar, setNavbar] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(!modalOpen);
    }

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <Container
            display="flex"
            background={background === "black" || navbar ? 'black' : ''}
            padding="1-0-1-0"
            position="fixed"
            height="12vh"
            zIndex="1000"
        >
            {/* Navigation Mobile Optimization */}
            <React.Fragment>
                <MenuBars onClick={toggle}/>
            </React.Fragment>

            {/* Menu */}
            <Wrapper
                navigation={true}
            >
                <Rows>

                    {/* Company Logo */}
                    <Column md={4}>
                        <Wrapper
                            display="flex"
                        >
                            <Image
                                src="images/avant.png"
                                alt="Avant Tv"
                                width="50px"
                                height="50px"
                            />
                        </Wrapper>
                        
                    </Column>

                    {/* Menu Items */}
                    <Column md={4}>
                        <Wrapper
                            display="flex"
                            margin="1.5-0-0-0"
                        >
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

                    {/* Sign In/ Up Button */}
                    <Column md={4}>
                        <Wrapper
                            display="flex"
                            margin="1-0-0-0"
                        >
                            <Link
                                color="white"
                            >
                                <Buttons
                                    background="Default"
                                    hoverBackground="Default"
                                    hoverBorder="Default"
                                    onClick={handleModal}
                                >
                                <AccountCircleOutlinedIcon/> Sign In/ Sign Up  
                                </Buttons>
                            </Link>
                        </Wrapper>
                        
                    </Column>

                </Rows>
            </Wrapper>

            <AuthenticationModal
                show={modalOpen}
                onHide={handleModal}
                type={"signIn"}
            />
            
        </Container>
    )
}

export default Navigation
