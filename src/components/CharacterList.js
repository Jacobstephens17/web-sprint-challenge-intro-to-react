import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const StyledPage = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
padding:1rem;
justify-content:center;
`

export default function CharacterList(props){

    const { characters } = props;
    
    return (
        <StyledPage> {characters.map( character => { return <CharacterCard character={character} key={character.name} /> } ) } </StyledPage>
    )
}


