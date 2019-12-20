import React from 'react';

const Pokemon = props => {
    return (
        <React.Fragment>
            <img src={props.imgUrl} alt={props.pokeName}/>
            <span>{props.pokeName}</span>
            <ul>
                {props.pokeTypes.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
                        
        </React.Fragment>
    )
}
export default Pokemon;