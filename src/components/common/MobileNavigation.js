import React from 'react'
import { Container, Wrapper } from '../styled-components/StyledComponents'

function MobileNavigation({ isOpen }) {
    return (
        <Container
            type="mobileNav"
            position="fixed"
            background="Default"
            isOpen={isOpen}
        >
            
        </Container>
    )
}

export default MobileNavigation
