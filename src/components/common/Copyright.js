import { Divider, Typography } from '@material-ui/core'
import React from 'react'
import { Link, Placeholder } from '../styled-components/StyledComponents'

function Copyright() {
    return (
        <React.Fragment>
            <Divider />
            <Placeholder 
                color='white'
            >
                {'Copyright © '}
                <Link 
                    color="white" 
                    href="https://victor-githui.netlify.app/"
                    decoration={true}
                >
                    Avant Films
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
                {` | Website designed & developed by `}
                <Link 
                    color="white" 
                    href="https://victor-githui.netlify.app/" 
                    target="_blank"
                    decoration={true}
                >
                    Samchi Systems and Solutions
                </Link>{'.'}
            </Placeholder>
        </React.Fragment>
    )
}

export default Copyright
