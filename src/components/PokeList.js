import React from 'react';
import Pokemon from './Pokemon'

const PokeList = props => {
    const onClickHandler = event => {
        props.onClickHandler(event.currentTarget.id)
    }
    return (
        <ul className="pokelist">
            {props.pokemonArray.map(item => {
                return (
                    <li key={item.id} id={item.name} onClick = {onClickHandler} className={`pokelist__item ${props.selected.indexOf(item.name)!==-1 ? 'selected' : null}`}>
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