import React ,{ useState }  from 'react';
import './LoginScreen.css';
import { Buttons, Column, Container, Image, Link, MenuBars, Rows, ScrollLinks, Wrapper } from '../components/styled-components/StyledComponents'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
function LoginScreen(){
    const [modalOpen, setModalOpen] = useState(false);
    const handleModal = () => {
        setModalOpen(!modalOpen);
    }
    return (
        <div className= "loginScreen">
    <div className= "loginScreen__background">
        <img 
        className="loginScreen__logo"
        src= "images/avant.png" alt=""/>
        <button className="loginScreen__button"
                                    
                                    onClick={handleModal}
                                >
                                <AccountCircleOutlinedIcon/> Sign In/ Sign Up  
                                </button>
         <div className= "loginScreen__gradient"/>                       
    </div>
    <div className= "loginScreen__body">
        <>
        <h1>
       Unlimited films,TV programmes and more
        </h1>
        </>
    </div>
    </div>
    );
}
export default LoginScreen;