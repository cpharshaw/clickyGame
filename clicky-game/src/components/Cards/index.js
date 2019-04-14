import React, { Component } from 'react';
import data from './card-info';

let characterArr = data.characters;

class Cards extends Component {

  state = {

    clickedSeq: [],

    charArr: characterArr

  };



  handleClick = function(name) {

    console.log("onClick triggered");

    if (this.state.clickedSeq.includes(name)) {

      alert("You lose!");

      this.setState({
        clickedSeq: [],
        charArr: characterArr
      });  
      
      // console.log("name: " + name);
      // console.log("clickedSeq: " + this.state.clickedSeq);

    } else if (this.state.clickedSeq.length === 11) { 
    
      alert("You win!  Congratulations!");

      this.setState({
        clickedSeq: [],
        charArr: characterArr
      });        
    
    } else {

      // console.log("You live to see another click...");

      let newCharArr = [...this.state.charArr];

      newCharArr.sort((a, b) => 0.5 - Math.random());

      let newClickSeq = [...this.state.clickedSeq, name];

      // console.log(newClickSeq);

      this.setState({ 
        clickedSeq: newClickSeq,
        charArr: newCharArr
      });

      // console.log("name: " + name);
      // console.log("clickedSeq: " + newClickSeq);

    }
  };





  render() {

    return (
      <div className="col-md-12">
        <div className="container d-flex flex-wrap justify-content-center">
          {
            this.state.charArr.map((character, i) =>
              <img 
                key = {i} 
                id = {"charImg" + i} 
                className = "img-thumbnail m-3" 
                src = {character.src} 
                data-name = {character.name} 
                alt = {character.name} 
                onClick = {() => this.handleClick(character.name)}
              />
            )
          }
        </div>
      </div>
    );
  }


}

export default Cards;
