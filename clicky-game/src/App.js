import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';


class App extends Component {  
  < CardContainer />;
}

export default App;



class App extends Component {
  
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
            character
          
          />
        </main>


        <footer className="row ">
          <div className="col-md-12 text-center">
            <p>This is the footer</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
