import React from 'react';
import PropTypes from 'prop-types';


const Pokemon = props => {
    const onClickHandler = event => {
        props.onClickHandler(event.target)
    }
    return (
        <div className={`pokemon-container ${props.selected}`} onClick = {onClickHandler}>
            <img className="pokemon-img" src={props.imgUrl} alt={props.pokeName}/>
            <span className="pokemon-name">{props.pokeName}</span>
            <ul className="type-list">
                {props.pokeTypes.map((item, index) => {
                    return (
                        <li key={index} className="type-list__item">{item}</li>
                    )
                })}
            </ul>
                        
        </div>
    )
}
Pokemon.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    types: PropTypes.array
}
export default Pokemon;