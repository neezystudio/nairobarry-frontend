import { Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Bars from '../../images/menubar.svg'
import {Link as ScrollLink} from 'react-scroll'

export const Section = styled.section`
    overflow: hidden;
`;

export const Container = styled.div`
    height: ${({height}) => (
        height === "90vh" ? "75vh" : "100%" &&
        height === "9px" ? "9px" : "100%"
    )};
    width: ${({width}) => (
        width === "60px" ? "60px" : "100%"
    )};
    background: ${({background}) => (
        background === "Default" ? "#E50000" : "transparent"
    )};
    background-image: ${({backgroundImage}) => (
        backgroundImage === 'hero' ? "url(https://res.cloudinary.com/emacon-production/image/upload/v1627373022/Nairobarry/Untitled_1.44.1_il1dks.jpg)" : "none"
    )};
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem" 
    )};
`;

export const Wrapper = styled.div`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    justify-content: ${({justifyContent}) => (
        justifyContent === "start" ? "flex-start" : "center" &&
        justifyContent === "end" ? "flex-end" : "center"
    )};
    align-items: ${({alignItems}) => (
        alignItems === "center" ? "center" : "none"
    )};
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem" &&
        margin === "1.5-0-0-0" ? "1.5rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem" &&
        margin === "5-0-0-15" ? "5rem 0rem 0rem 15rem" : "0rem 0rem 0rem 0rem" &&
        margin === "0-0-0-1" ? "0rem 0rem 0rem 1rem" : "0rem 0rem 0rem 0rem"
    )};

    @media screen and (max-width: 768px){
        display: ${({navigation}) => (
            navigation ? "none" : "visible"
        )};
    }
`;

export const Image = styled.img`
    width: ${({width}) => (
        width === "50px" ? "80px" : "100%"
    )};
    height: ${({height}) => (
        height === "50px" ? "80px" : "100%"
    )};
    object-fit: cover;
    background-size: cover;
`;

export const Rows = styled(Row)`
    width: 100% !important;
`;

export const Column = styled(Col)`
`;

export const Buttons = styled(Button)`
    background: ${({background}) => (
        background === "Default" ? "#E50000" : "transparent"
    )};
    border: ${({border}) => (
        border ? "1px Solid #E50000" : "none"
    )};
    padding: ${({padding}) => (
        padding === "1rem 2rem 1rem 2rem" ? "1rem 2rem 1rem 2rem" : "none"
    )};
    margin: ${({margin}) => (
        margin === "3-0-0-0" ? "3rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem"
    )};
    transition: .3s all;

    &:hover {
        background: ${({hoverBackground}) => (
            hoverBackground === "Default" ? "#313131 !important" : "white !important"
        )};
        border: ${({hoverBorder}) => (
            hoverBorder === "Default" ? "1px Solid #E50000" : "none"
        )};
    }
`;

export const Title1 = styled.h1`
    color: ${({color}) => (
        color === "whitesmoke" ? "whitesmoke" : "black" &&
        color === "white" ? "white" : "black"
    )};
    font-weight: ${({fontWeight}) => (
        fontWeight === 'bold' ? 'bold' : ''
    )};
    margin: ${({margin}) => (
        margin === "2-0-0-0" ? "2rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem"
    )};
`;

export const Title2 = styled.h2`
    color: ${({color}) => (
        color === "whitesmoke" ? "whitesmoke" : "black"
    )};
    font-weight: ${({fontWeight}) => (
        fontWeight === 'bold' ? 'bold' : ''
    )};
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem"
    )};
`;

export const Title3 = styled.h3``;

export const Title4 = styled.h4``;

export const Placeholder = styled.p`
    background: ${({background}) => (
        background === "white" ? "white" : "transparent"
    )}; 
    color: ${({color}) => (
        color === "whitesmoke" ? "whitesmoke" : "black" &&
        color === "white" ? "white" : "black" 
    )};
    font-weight: ${({fontWeight}) => (
        fontWeight === 'bold' ? 'bold' : ''
    )};
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem" &&
        margin === "1.5-0-0-0" ? "1.2rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem" &&
        margin === "1.5-0-0-1" ? "1.2rem 0rem 0rem 1rem" : "0rem 0rem 0rem 0rem"
    )};
    border: ${({border}) => (
        border ? "1px Solid whitesmoke" : "none"
    )};
    padding: ${({padding}) => (
        padding === "0.1-0.2-0.1-0.2" ? "0.1rem 0.2rem 0.1rem 0.2rem" : "0rem 0rem 0rem 0rem"
    )};
`;

export const Link = styled.a`
    color: ${({color})  => (
        color === "white" ? "white" : "black"
    )};
`;


// Navigation
export const MenuBars = styled.i`
    display: none;

    @media screen and  (max-width: 768px){
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        margin-right: 2rem;
        margin-top: 1rem;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

export const ScrollLinks = styled(ScrollLink)`
    text-decoration: none;
    color: ${({color}) => (
        color === "white" ? "white" : "black"
    )};
    margin: ${({margin}) => (
        margin === "0-2-0-2" ? "0rem 2rem 0rem 2rem" : "0rem 0rem 0rem 0rem"
    )};
    cursor: pointer !important;

    &:hover {
        text-decoration: ${({decoration}) => (
            decoration ? "underline !important" : "none !important"
        )};
        color: ${({hoverColor}) => (
            hoverColor === "Default" ? "#E50000 !important" : "white !important"
        )};
    }
`;