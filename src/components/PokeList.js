import React from 'react';
import Pokemon from './Pokemon'

const PokeList = props => {
    return (
        <ul className="pokelist">
            {props.pokemonArray.map((item, index) => {
                return (
                    <li key={index} className="pokelist__item">
                        <Pokemon
                        pokeName = {item.name}
                        imgUrl = {item.url}
                        pokeTypes = {item.types}
                        />
                    </li>
                )
            })}
        </ul>
    )
}
export default PokeList;