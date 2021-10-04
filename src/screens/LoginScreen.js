import React ,{ useState }  from 'react';
import './LoginScreen.css';
import { Buttons, Column, Container, Image, Link, MenuBars, Rows, ScrollLinks, Wrapper } from '../components/styled-components/StyledComponents'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
function LoginScreen(){
    const [modalOpen, setModalOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
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
       NAIROBBERY
        </h1>
        <h2>
            watch anywhere. cancel at any time
        </h2>
        <h3>Ready to watch, enter your email to create your account or restart your membership</h3>
        <div classname= "loginScreen__input">
            <form>
                <input type="email" placeholder="Email Address" />
                <button className="loginScreen__getStarted"
                onClick={handleModal}
                >
                    GET STARTED
                </button>
            </form>
        </div>
        </>
    </div>
    </div>
    );
}
export default LoginScreen;