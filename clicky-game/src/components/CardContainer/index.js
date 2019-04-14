import React, { Component } from 'react';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';

import data from './card-info';

let characterArr = data.characters;

class CardContainer extends Component {
  
  state = {

    clickedSeq: [],

    charArr: characterArr

  };

  render() {
    return (
      <div className="App container-fluid">

        <header className="row">
            < Scoreboard />
        </header>


        <section className="row vertCenter">
          <div className="col-md-12 text-center test pt-5">
              <h1 className="instruct">Clicky Game!</h1>
              <h3 className="instruct">Click on an image to earn points, but don't click on any more than once!</h3>
          </div>
        </section>


        <main className="row mb-5">
          < Cards 
            characters = {characterArr}
          />
        </main>
        <CardBody
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />

        <footer className="row ">
          <div className="col-md-12 text-center">
            <p>This is the footer</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default CardContainer;
