import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

export default function CharacterList(props){

    const { characters } = props;

    
    return (
        <div>
            {characters.map( character => { return <CharacterCard character={character} key={character.name} /> } ) }
        </div>
    )
}


