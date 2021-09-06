import React, { useState } from 'react'
import axios from 'axios'
import { Backdrop, Checkbox, CircularProgress, FormControlLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Spinner } from 'react-bootstrap'
import { Buttons, Column, Form, Image, Link, Placeholder, Rows, Title2, Title3, Title4, Wrapper } from '../styled-components/StyledComponents';
import FacebookIcon from '@material-ui/icons/Facebook';
import CloseIcon from '@material-ui/icons/Close';

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

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    }

    const handlePrivacyPolicy = () => {
        setPrivacyPolicy(!privacyPolicy);
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        setSignInLoading(true);

        const signInData = {
            email: email,
            password: password
        }

        axios.post('BASE_URL/login', signInData)
        .then(res => {
            console.log(res);
            setSignInLoading(false);
            localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            console.log(err);
            setError(true);
        })
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        setSignUpLoading(true);

        const signUpData = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            privacyPolicy: privacyPolicy
        }

        axios.post('BASE_URL/signup', signUpData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            setError(true);
        })
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
                                            src="https://res.cloudinary.com/emacon-production/image/upload/v1627376803/Nairobarry/Samchi_Systems_2_B_dy8zvf.jpg"
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
                                    <Wrapper display="flex">
                                        <Form 
                                            padding="0-8"
                                        >
                                            {/* Email Address */}
                                            {
                                                error ? (
                                                    <TextField
                                                        error
                                                        fullWidth
                                                        type="text"
                                                        label="Email Address"
                                                        defaultValue={email}
                                                        helperText="Incorrect email."
                                                        onChange={e => setError(false)}
                                                    /> 
                                                ) : (
                                                    <TextField
                                                        fullWidth
                                                        type="text"
                                                        label="Email Address"
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value)}
                                                    />
                                                )
                                            }
                                            {/* Password */}
                                            {
                                                error ? (
                                                    <TextField
                                                        error
                                                        fullWidth
                                                        type="password"
                                                        label="Password"
                                                        defaultValue={password}
                                                        helperText="Incorrect password."
                                                        onChange={e => setError(false)}
                                                    /> 
                                                ) : (
                                                    <TextField
                                                        fullWidth
                                                        type="password"
                                                        label="Password"
                                                        value={password}
                                                        onChange={e => setPassword(e.target.value)}
                                                    />
                                                )
                                            }
                                            <Wrapper display="flex" justifyContent="start">
                                                <Rows>
                                                    <Column md={6}>
                                                        <Wrapper margin="1-0-0-0">
                                                            <FormControlLabel
                                                                control={
                                                                <Checkbox
                                                                    checked={rememberMe}
                                                                    onChange={handleRememberMe}
                                                                    name="Remember Me"
                                                                    // color="primary"
                                                                />
                                                                }
                                                                label="Remember Me"
                                                            />
                                                        </Wrapper>
                                                        
                                                    </Column>
                                                    <Column md={6}>
                                                        <Wrapper display="flex" justifyContent="end" margin="1.5-0-0-0">
                                                            <Link hoverColor="Default" onClick={() => setModalType("forgotPassword")}>Forgot Password?</Link>
                                                        </Wrapper>
                                                    </Column>
                                                </Rows>
                                                
                                            </Wrapper>
                                            <Wrapper display="flex" margin="1-0-0-0">
                                                <Buttons 
                                                    background="Default"
                                                    hoverBackground="Default" 
                                                    width="100%"
                                                    onClick={handleSignIn}
                                                >
                                                    {
                                                        signInLoading ? (
                                                            <Spinner animation="border" variant="light" />
                                                        ) :
                                                        (
                                                            <React.Fragment>
                                                                Sign In
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
                                            {`Don't have an account? `}
                                            <Link
                                                color="red"
                                                decoration={true}
                                                hoverColor="primary"
                                                onClick={() => {
                                                    setModalType("signUp");
                                                    setSignInLoading(false);
                                                }}
                                            >
                                                Sign Up
                                            </Link>
                                        </Placeholder>
                                    </Wrapper>
                                    
                                </Column>
                                <Column md={4}>
                                    <Wrapper display="flex">
                                        <Image
                                            src="https://res.cloudinary.com/emacon-production/image/upload/v1627463113/Nairobarry/Untitled_1.75.1_olm98i.jpg"
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
                                            <Buttons background="Default" width="100%" hoverBackground="Default">
                                                Sign In with Google</Buttons>
                                        </Link>
                                    </Wrapper>
                                    <Wrapper display="flex" margin="1-0-0-0">
                                        <Link width="100%">
                                            <Buttons background="Default" width="100%">
                                                <FacebookIcon/>
                                                Sign In with Facebook
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
                                        <Image
                                            src="https://res.cloudinary.com/emacon-production/image/upload/v1627376803/Nairobarry/Samchi_Systems_2_B_dy8zvf.jpg"
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
                                            <TextField
                                                fullWidth
                                                required
                                                type="text"
                                                label="Name"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                            />
                                            <TextField
                                                fullWidth
                                                required
                                                type="text"
                                                label="Email Address"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                            <TextField
                                                fullWidth
                                                required
                                                type="text"
                                                label="Phone Number"
                                                value={phoneNumber}
                                                onChange={e => setPhoneNumber(e.target.value)}
                                            />
                                            <TextField
                                                fullWidth
                                                required
                                                type="password"
                                                label="Password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                            <TextField
                                                fullWidth
                                                required
                                                type="password"
                                                label="Confirm Password"
                                                value={confirmPassword}
                                                onChange={e => setConfirmPassword(e.target.value)}
                                            />
                                            <Wrapper display="flex" justifyContent="start" margin="1-0-0-0">
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
                                            </Wrapper>
                                            <Wrapper display="flex" margin="1-0-0-0">
                                                <Buttons
                                                    background="Default"
                                                    hoverBackground="Default" 
                                                    width="100%"
                                                    onclick={handleSignUp}
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
                                            src="https://res.cloudinary.com/emacon-production/image/upload/v1627463113/Nairobarry/Untitled_1.75.1_olm98i.jpg"
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
