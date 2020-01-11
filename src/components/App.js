import React from 'react';
import PokeList from './PokeList'
import PokemonArray from '../data/data.json'
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonArray: PokemonArray,
      favourites: []
    }
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(name){
    if (this.state.favourites.indexOf(name)===-1){
      this.setState(prevState => ({
        favourites: [...prevState.favourites, name]
        
      }))
    } else {
      const favouritesArray = this.state.favourites
      const index = favouritesArray.indexOf(name)
      favouritesArray.splice(index, 1)
      this.setState({
        favourites: favouritesArray
      })
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1 className="App__title">Mi lista de Pokemon</h1>
        <PokeList 
        pokemonArray={this.state.pokemonArray}
        onClickHandler = {this.onClickHandler}
        selected = {this.state.favourites}
        />
      </div>
    );
  }
}

export default App;
