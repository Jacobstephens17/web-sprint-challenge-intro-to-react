import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
border:3px solid #0000CD;
width:25%;
margin:auto;
flex-wrap:wrap;
margin:3rem 3rem;
color:#0000CD;
padding:3rem;
`

export default function CharacterCard(props){

    const { character, name, birth_year, gender, homeworld, height } = props;

    return(
        <StyledCard>
            <h1>{character.name}</h1>
            <h3>Gender: {character.gender}, Height: {character.height}in</h3>
            <h3>Born in {character.birth_year} on {character.homeworld} planet</h3>
        </StyledCard>
    )
}