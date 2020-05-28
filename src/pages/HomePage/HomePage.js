import React from 'react'
// import './HomePage.scss'
import Directory from '../../components/Directory/Directory'
import styled from 'styled-components'

const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 50px 80px;
`

export default function HomePage() {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}
