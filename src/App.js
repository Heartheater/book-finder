import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main id="app">
        <h1 id="app-title">Book Finder</h1>
        <div className="search-bar-container">
          <div className="search-bar">
            <input className="search-input" type="text"></input>
            <button className="delete-search">x</button>
          </div>
          <button className="submit-search" type="submit">submit</button>
        </div>

        <section className="results-container">
        
          <div className="book">
            <img src="https://images.penguinrandomhouse.com/cover/9780375823459" alt="golden-compass-cover" className="book-cover"/>
            <h4 className="book-title">The Golden Compass</h4>
            <p className="book-author">By Philip Pullman</p>
            <button className="book-info-btn">View more</button>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
