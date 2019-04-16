import React, { Component } from 'react';
import Cards from '../Cards';
import Scoreboard from '../Scoreboard';

import data from './card-info';

let characterArr = data.characters;

class CardContainer extends Component {

  state = {

    clickedSeq: [],

    charArr: characterArr,

    currentScore: 0,

    highScore: 0
  };

  handleClick = (name) => {

    console.log("onClick triggered");

    if (this.state.clickedSeq.includes(name)) {

      alert("You lose!");

      this.setState({
        clickedSeq: [],
        charArr: characterArr,
        currentScore: 0
      });

    } else if (this.state.clickedSeq.length === 11) {

      alert("You win!  Congratulations!");

      this.setState({
        clickedSeq: [],
        charArr: characterArr,
        currentScore: 0,
        highScore: 12
      });

    } else {

      let newCharArr = [...this.state.charArr];

      newCharArr.sort((a, b) => 0.5 - Math.random());

      let newClickSeq = [...this.state.clickedSeq, name];

      let newScore = this.state.currentScore + 1;
      let newHighScore = this.state.highScore;

      newScore > this.state.highScore ? newHighScore = newScore : newHighScore = this.state.highScore;

      this.setState({
        clickedSeq: newClickSeq,
        charArr: newCharArr,
        currentScore: newScore,
        highScore: newHighScore,
      });

    }
  };

  render() {

    return (
      <div className="App container-fluid">

        <header className="row">
          < Scoreboard
            currentScore={this.state.currentScore}
            highScore={this.state.highScore}
          />
        </header>


        <section className="row instructions align-middle d-inline pt-4">
          <div className="col-md-12 text-center instructions pt-3">
            <h3 className="instruct">Click on an image to earn points, but don't click on any more than once!</h3>
          </div>
        </section>


        <main className="row mb-5 pb-5">
          < Cards
            characters={this.state.charArr}
            handleClick={this.handleClick}
          />
        </main>


        <footer className="row ">
          <div className="col-md-12 text-center">
            <p><i>Craig Harshaw</i></p>
          </div>
        </footer>

      </div>
    );
  }
}

export default CardContainer;
