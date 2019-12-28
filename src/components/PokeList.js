import React from 'react';
import Pokemon from './Pokemon'

const PokeList = props => {
    
    return (
        <ul className="pokelist">
            {props.pokemonArray.map(item => {
                return (
                    <li key={item.id} className="pokelist__item">
                        <Pokemon
                        pokeName = {item.name}
                        imgUrl = {item.url}
                        pokeTypes = {item.types}
                        onClickHandler = {props.onClickHandler}
                        selected = {props.selected}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default PokeList;