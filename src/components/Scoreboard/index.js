import React, { Component } from 'react';



class Scoreboard extends Component {


  render() {

    return (
      <div className="col-md-12">
        <div className="row d-flex justify-content-around ">

            <div className="col-md-4 d-flex justify-content-center">
              {/* <img className="marvelLogo" src="https://www.geekzonia.com/wp-content/uploads/2017/07/marvel.jpeg"/> */}
              <h2 className="mt-3 text-center memory">MARVEL<i> Memory Game</i></h2>
            </div>

            <div className="col-md-4 d-flex justify-content-center">
              <h2 className="mt-3 text-center"><i>Click an image to begin.</i></h2>
            </div>

            <div className="col-md-4 d-flex justify-content-center">
              <h2 className="mt-3 text-center">Score: {this.props.currentScore} | Top Score: {this.props.highScore}</h2>
            </div>

        </div>
      </div>
    );
  }


}

export default Scoreboard;
