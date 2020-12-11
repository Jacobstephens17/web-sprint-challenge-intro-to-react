import React from 'react'
import styled from 'styled-components'


export default function CharacterCard(props){
    const { character, name, image, birth_year, gender, homeworld, height } = props;

    return(
        <div>
            <h1>{character.name}</h1>
            <h3>Gender: {character.gender}, Height: {character.height}in</h3>
            <h3>Born in {character.birth_year} on {character.homeworld} planet</h3>
        </div>
    )
}