import React from 'react';
import PropTypes from 'prop-types';


const Pokemon = props => {
    return (
        <React.Fragment>
            <img className="pokemon-img" src={props.imgUrl} alt={props.pokeName}/>
            <span className="pokemon-name">{props.pokeName}</span>
            <ul className="type-list">
                {props.pokeTypes.map((item, index) => {
                    return <li key={index} className="type-list__item">{item}</li>
                })}
            </ul>
        </React.Fragment>
    )
}
Pokemon.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    types: PropTypes.array
}
export default Pokemon;