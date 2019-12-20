import React from 'react';
import PokeList from './PokeList'
import PokemonArray from '../data/data.json'
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonArray: PokemonArray
    }
  }
  render() {
    return (
      <div className="App">
        <PokeList pokemonArray={this.state.pokemonArray}/>
      </div>
    );
  }
}

export default App;
