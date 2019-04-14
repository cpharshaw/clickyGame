import React, { Component } from 'react';



class Scoreboard extends Component {

  state = {
    name: "",
    src: "",
    clicked: false
  };



  render() {

    return (
      <div className="col-md-12">
        <div className="row d-flex justify-content-around ">

            <div className="col-md-4 d-flex justify-content-center">
              <h2 className="mt-3 text-center">Clicky Game</h2>
            </div>

            <div className="col-md-4 d-flex justify-content-center">
              <h2 className="mt-3 text-center">Click an <i>image to begin.</i></h2>
            </div>

            <div className="col-md-4 d-flex justify-content-center">
              <h2 className="mt-3 text-center">Score: 0 | Top Score: 0</h2>
            </div>

        </div>
      </div>
    );
  }


}

export default Scoreboard;
