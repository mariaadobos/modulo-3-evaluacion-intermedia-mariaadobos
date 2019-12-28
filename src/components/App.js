import React from 'react';
import PokeList from './PokeList'
import PokemonArray from '../data/data.json'
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonArray: PokemonArray,
      isFavourite: ''
    }
    this.onClickHandler = this.onClickHandler.bind(this)
    //this.markAsFavourite = this.markAsFavourite.bind(this)
  }

  onClickHandler(data){
    if (this.state.isFavourite === ''){
      this.setState({isFavourite: 'selected'})
      //data.closest('li').classList.add('selected')
    } else{
      this.setState({isFavourite: ''})
      //
    }
    //this.markAsFavourite(data)
  }
  
  render() {
    return (
      <div className="App">
        <h1 className="App__title">Mi lista de Pokemon</h1>
        <PokeList 
        pokemonArray={this.state.pokemonArray}
        onClickHandler = {this.onClickHandler}
        selected = {this.state.isFavourite}
        />
      </div>
    );
  }
}

export default App;
