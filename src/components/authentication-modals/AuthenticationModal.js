import React, { useState, useRef} from 'react'
import axios from 'axios'
import { Backdrop, Checkbox, CircularProgress, FormControlLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Spinner } from 'react-bootstrap'
import { Buttons, Column, Form, Image, Link, Placeholder, Rows, Title2, Title3, Title4, Wrapper } from '../styled-components/StyledComponents';
import FacebookIcon from '@material-ui/icons/Facebook';
// import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@material-ui/icons/Close';
import './AuthenticationModal.css'
// import { auth } from '../../firebase';
import firebase, {auth, googleprovider,facebookprovider} from '../../firebase'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: '1rem 0rem 0rem 0rem'
        },
    },
}));

function AuthenticationModal({ show, onHide, type }) {
    const classes = useStyles();
    const [modalType, setModalType] = useState(type);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [rememberMe, setRememberMe] = useState(false);
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [signInLoading, setSignInLoading] = useState(false);
    const [signUpLoading, setSignUpLoading] = useState(false);
    const [error, setError] = useState(false)
    const emailRef =useRef(null);
    const passwordRef =useRef(null);

    const signInWithGoogle = e => {
        e.preventDefault();
        auth.signInWithPopup(googleprovider).then(user =>{
            alert("welcome 👍 ");
            console.log(user)
        })
        .catch(error =>alert(error.message))
    };
    const signInWithFacebook = e => {
        e.preventDefault();
        auth.signInWithPopup(facebookprovider).then(user =>{
            alert("welcome 👍 ");
            console.log(user)
        })
        .catch(error =>alert(error.message))
    };
    // const signInWithFacebook = () =>{
    //     var provider = new firebase.auth.FacebookAuthProvider();
    //     provider.addScope('user_birthday');
    //     firebase.auth().signInWithPopup(provider).then((result)=>{
    //       console.log('result', result);
    //     }).catch((error)=>{
    //       console.log('error', error);
    //     })
    // }
    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    }

    const handlePrivacyPolicy = () => {
        setPrivacyPolicy(!privacyPolicy);
    }

    const signIn = (e) => {
        e.preventDefault();
        setSignInLoading(true);
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user =>{
            alert("welcome 👍 ");
            console.log(user)
        }).catch(error =>{
            alert(error.message)
        });
    }

    const signUp = (e) => {
        e.preventDefault();
        // setSignUpLoading(true);
        

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user =>{
            alert("user created 👍 ");
            console.log(user)
        }).catch(error =>{
            alert(error.message)
        });
        // const signUpData = {
        //     name: name,
        //     email: email,
        //     phoneNumber: phoneNumber,
        //     password: password,
        //     privacyPolicy: privacyPolicy
        // }

    }

    return (
        <React.Fragment>
            {
                modalType === "signIn" ? 
                (
                    <Modal
                        show={show}
                        onHide={() => {
                            onHide();
                            setSignInLoading(false)
                        }}
                        size="lg"
                        centered
                    >
                        <Modal.Body>
                            <Wrapper display="flex" justifyContent="end">
                                <Link 
                                    hoverColor="Default"
                                    onClick={() => {
                                        onHide();
                                        setSignInLoading(false)
                                    }}
                                >
                                    <CloseIcon/>
                                </Link>
                            </Wrapper>
                            <Rows>
                                <Column md={7}>
                                    <Wrapper display="flex">
                                        <Image
                                            src="images/avant.png"
                                            alt="Avant Tv"
                                            width="50px"
                                            height="50px"
                                            margin="3-0-0-0"
                                        />
                                    </Wrapper>
                                    <Wrapper display="flex" margin="1.5-0-0-0">
                                        <Title4 fontWeight='bold'>SIGN IN TO CONTINUE</Title4>
                                    </Wrapper>

                                    {/*//TODO: Sign In Form */}
                                   <div className="signin">
                                       <form action="">
                                           <input ref={emailRef}type='email'/>
                                           <input ref={passwordRef}type='password'/>
                                           <button onClick={signIn}>Sign In</button>
                                           
                                       </form>
                                   </div>
                                    {/* Don't Have an Account */}
                                    <Wrapper display="flex" margin="1.5-0-3-0">
                                        <Placeholder>
                                            {`Don't have an account? fill up your details and `}
                                            <Link
                                                color="red"
                                                decoration={true}
                                                hoverColor="primary"
                                                onClick={signUp}
                                            >
                                                Sign Up Now
                                            </Link>
                                            
                                        </Placeholder>
                                    </Wrapper>
                                    
                                </Column>
                                <Column md={4}>
                                    <Wrapper display="flex">
                                        <Image
                                            src="images/naiposter.png"
                                            width="216px"
                                            height="239px"
                                            margin="3-0-0-0" 
                                        />
                                    </Wrapper>
                                    <Wrapper display="flex" margin="1-0-0-0">
                                        <Title4 fontWeight="bold">NAIROBERRY</Title4>
                                    </Wrapper>
                                    <Wrapper display="flex" margin="1.5-0-0-0">
                                        <Link width="100%">
                                            {/* //TODO:user authentication */}
                                            <Buttons background="Default" width="100%" hoverBackground="Default" onClick={signInWithFacebook}>
                                            <FacebookIcon/>
                                                Sign In with Facebook</Buttons>
                                        </Link>
                                    </Wrapper>
                                    <Wrapper display="flex" margin="1-0-0-0">
                                        <Link width="100%">
                                            <Buttons background="Default" width="100%" onClick={signInWithGoogle}>
                                                {/* <GoogleIcon/> */}
                                                Sign In with Google
                                            </Buttons>
                                        </Link>
                                    </Wrapper>
                                </Column>
                            </Rows>
                        </Modal.Body>
                    </Modal>
                ) :
                (
                    <></>
                ) && 
                modalType === "signUp" ? (
                    <Modal
                        show={show}
                        onHide={() => {
                            onHide();
                            setSignUpLoading(false);
                        }}
                        size="lg"
                        centered
                    >
                        <Modal.Body>
                        <Wrapper display="flex" justifyContent="end">
                            <Link 
                                hoverColor="Default"
                                onClick={() => {
                                    onHide();
                                    setModalType("signIn");
                                    setSignUpLoading(false);
                                }}
                            >
                                <CloseIcon/>
                            </Link>
                        </Wrapper>
                        <Rows>
                                <Column md={7}>
                                    <Wrapper display="flex">
                                        {/* //TODO:PLACE THEAVANT LOGOHERE  */}
                                        <Image
                                            src="images/avant.png"
                                            alt="Avant Tv"
                                            width="50px"
                                            height="50px"
                                            margin="3-0-0-0"
                                        />
                                    </Wrapper>
                                    <Wrapper display="flex" margin="1.5-0-0-0">
                                        <Title4 fontWeight='bold'>SIGN UP TO CONTINUE</Title4>
                                    </Wrapper>

                                    {/*//TODO: Sign Up Form */}
                                    <Wrapper display="flex">
                                        <Form 
                                            padding="0-8"
                                        >
                                            {/* <TextField
                                                error
                                                fullWidth
                                                id="standard-error-helper-text"
                                                label="Error"
                                                defaultValue="Hello World"
                                                helperText="Incorrect entry."
                                            /> */}
                                            {/* <TextField
                                                fullWidth
                                                required
                                                type="text"
                                                label="Name"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                            /> */}
                                            <TextField
                                                fullWidth
                                                required
                                                ref={emailRef} 
                                                type="email"
                                                label="Email Address"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                            {/* <TextField
                                                fullWidth
                                                required
                                                type="text"
                                                label="Phone Number"
                                                value={phoneNumber}
                                                onChange={e => setPhoneNumber(e.target.value)}
                                            /> */}
                                            <TextField
                                                fullWidth
                                                required
                                                ref={passwordRef}
                                                type="password"
                                                label="Password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                            {/* <TextField
                                                fullWidth
                                                required
                                                type="password"
                                                label="Confirm Password"
                                                value={confirmPassword}
                                                onChange={e => setConfirmPassword(e.target.value)}
                                            /> */}
                                            {/* <Wrapper display="flex" justifyContent="start" margin="1-0-0-0">
                                                <FormControlLabel
                                                    control={
                                                    <Checkbox
                                                        checked={privacyPolicy}
                                                        onChange={handlePrivacyPolicy}
                                                        name="Privacy Policy"
                                                        // color="primary"
                                                    />
                                                    }
                                                    label="Accept terms and conditions"
                                                />
                                            </Wrapper> */}
                                            <Wrapper display="flex" margin="1-0-0-0">
                                                <Buttons
                                                    background="Default"
                                                    hoverBackground="Default" 
                                                    width="100%"
                                                    // onclick={register}
                                                >
                                                    {
                                                        signUpLoading ? (
                                                            <Spinner animation="border" variant="light" />
                                                        ):
                                                        (
                                                            <React.Fragment>
                                                                Sign Up
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    
                                                </Buttons>
                                            </Wrapper>
                                        </Form>
                                    </Wrapper>

                                    {/* Don't Have an Account */}
                                    <Wrapper display="flex" margin="1.5-0-3-0">
                                        <Placeholder>
                                            {`Already have an account? `}
                                            <Link
                                                color="red"
                                                decoration={true}
                                                hoverColor="primary"
                                                onClick={() => setModalType("signIn")}
                                            >
                                                Sign in
                                            </Link>
                                        </Placeholder>
                                    </Wrapper>
                                    
                                </Column>
                                <Column md={4}>
                                    <Wrapper display="flex" margin="8-0-0-0"> 
                                        <Image
                                            src="images/poster1 .png"
                                            width="216px"
                                            height="239px"
                                            margin="3-0-0-0" 
                                        />
                                    </Wrapper>
                                    <Wrapper display="flex" margin="1-0-0-0">
                                        <Title4 fontWeight="bold">NAIROBERRY</Title4>
                                    </Wrapper>
                                </Column>
                            </Rows>
                        </Modal.Body>
                    </Modal>
                ) : (
                    <></>
                ) &&
                modalType === "forgotPassword" ? (
                    <Modal
                        show={show}
                        onHide={onHide}
                        size="lg"
                        centered
                    >
                        <Modal.Body>
                        <Wrapper display="flex" justifyContent="end">
                            <Link 
                                hoverColor="Default"
                                onClick={() => {
                                    onHide()
                                    setModalType("signIn")
                                }}
                            >
                                <CloseIcon/>
                            </Link>
                        </Wrapper>
                                
                            <Wrapper display="flex">
                                {/* //TODO:place avant logo here  */}
                                <Image
                                    src="https://res.cloudinary.com/emacon-production/image/upload/v1627376803/Nairobarry/Samchi_Systems_2_B_dy8zvf.jpg"
                                    alt="Avant Tv"
                                    width="50px"
                                    height="50px"
                                    margin="3-0-0-0"
                                />
                            </Wrapper>
                            <Wrapper display="flex" margin="1.5-0-0-0">
                                <Title4 fontWeight='bold'>Forgot Password ?</Title4>
                            </Wrapper>
                            <Wrapper display="flex" margin="1-0-0-0">
                                <Placeholder  textAlign="center">Please enter the email you used to create the account, then submit. Once you submit you will recieve an email with a link that will allow you to change your password.</Placeholder>
                            </Wrapper>

                            {/* Sign Up Form */}
                            <Wrapper display="flex">
                                <Form 
                                    padding="0-8"
                                >
                                    {/* <TextField
                                        error
                                        fullWidth
                                        id="standard-error-helper-text"
                                        label="Error"
                                        defaultValue="Hello World"
                                        helperText="Incorrect entry."
                                    /> */}
                                    <TextField
                                        fullWidth
                                        required
                                        type="text"
                                        label="Email Address"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <Wrapper display="flex" margin="1.5-0-3-0">
                                        <Buttons
                                            background="Default"
                                            hoverBackground="Default" 
                                            width="100%"
                                        >
                                            Submit
                                        </Buttons>
                                    </Wrapper>
                                </Form>
                            </Wrapper>  
                        </Modal.Body>
                    </Modal>
                ) : (
                    <></>
                )
            }
        </React.Fragment>
        
    )
}

export default AuthenticationModal


