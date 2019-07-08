import React, { Component } from 'react';
import Header from './components/header/header'
import Wrapper from "./components/wrapper";
import CharacterCard from './components/charCard'
import './App.css'
import spongebobCharacters from './characters.json'


class App extends Component {

  state = {
    spongebobCharacters
  };


      counterCheck=(name,selectedState)=>{
        let charactersArray = this.state.spongebobCharacters;
        charactersArray.sort(function(a, b){return 0.5 - Math.random()});

        if (selectedState){
            charactersArray.forEach(character=> character.selected = false);
            this.setState({spongebobCharacters: charactersArray, counter: 0})
        } else {
            charactersArray.forEach((character) => {
                if (character.name === name && character.selected === false) {
                    character.selected = true;
                    this.setState({spongebobCharacters: charactersArray, counter: this.state.counter + 1})
                }
            });
        }
      };


    render(){
      return(
        <Wrapper>
            <Header score={this.state.counter} />
            <div className={"container"}>
                <div className={"row"}>
                    {this.state.spongebobCharacters.map((character) => 
                    <CharacterCard  
                    key={character.id} 
                    id ={character.id} 
                    character={character.name} 
                    selected={character.selected} 
                    counterCheck={this.counterCheck}/>)}
                </div>
            </div>
        </Wrapper>
      )
      };
}


export default App;








