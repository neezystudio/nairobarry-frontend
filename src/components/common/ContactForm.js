import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core'
import { Buttons, Column, Container, Form, Placeholder, Rows, Title2, Title4, Wrapper } from '../styled-components/StyledComponents'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: '1rem 0rem 0rem 0rem'
        },
    },
}));

function ContactForm() {
    const classes = useStyles();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    return (
        <Wrapper display="flex" margin="8-0-0-0">
            <Rows>
                {/* Contact Information */}
                <Column md={5}>
                    <Wrapper>
                        <Wrapper>
                            <Wrapper
                                display="flex"
                                justifyContent="end"
                            >
                                <Title2 fontWeight="bold">GET IN TOUCH</Title2> 
                            </Wrapper>
                           
                           <Wrapper display="flex" justifyContent="end">
                                <Container
                                    background="Default"
                                    height="9px"
                                    width="80px"
                                    margin="1-0-0-0"
                                />  
                           </Wrapper>
                        </Wrapper>

                        <Wrapper>
                            <Wrapper
                                display="flex" 
                                justifyContent="end"
                                margin="1.5-0-0-0"
                            >
                                <Title4>Our Contact Details</Title4>
                            </Wrapper>
                           {[
                                'info@nairoberry@gmail.com',
                                '+254 701 230892',
                                'Nairobi, Kenya'
                            ].map((data, index) => (
                                <Wrapper 
                                    key={index} 
                                    display="flex" 
                                    justifyContent="end"
                                    margin="1-0-0-0"
                                >
                                    <Placeholder>{data}</Placeholder>
                                </Wrapper>
                            ))} 
                        </Wrapper>
                        
                        
                    </Wrapper>
                </Column>

                {/* Contact Form */}
                <Column md={7}>
                    <Form>
                        {/* <TextField
                            error
                            fullWidth
                            id="standard-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Incorrect entry."
                        /> */}
                        <Rows>
                            <Column md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Name"
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Column>
                            <Column md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Email Address"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Column>
                        </Rows>
                        <Rows margin="1-0-0-0">
                            <Column md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Phone Number"
                                    type="number"
                                    value={phoneNumber}
                                    onChange={e => setPhoneNumber(e.target.value)}
                                />
                            </Column>
                            <Column md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Subject"
                                    type="text"
                                    value={subject}
                                    onChange={e => setSubject(e.target.value)}
                                />
                            </Column>
                        </Rows>
                        <Wrapper margin="1-0-0-0" padding="0-1-0-1">
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={4}
                                label="Subject"
                                type="text"
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                            /> 
                        </Wrapper>
                        
                        <Buttons
                            background="Default"
                            hoverBackground="Default"
                            hoverBorder="Default"
                            margin="2-0-0-1"
                        >
                            SEND MESSAGE
                        </Buttons>
                    </Form>
                </Column>
            </Rows>
            
        </Wrapper>
    )
}

export default ContactForm
