import React, { Component } from 'react';
import './App.css';
import Book from './Book/Book';
import SearchBar from './SearchBar/SearchBar';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      errorOccured: false
    }
  }

  //maps through bookData array and creates a Book component for each book
  showBooks() {
    let allBooks = [];
    
    this.state.bookData.map((book) => {
      return allBooks.push(<Book data={book} key={book.id}/>);
    });
    return allBooks;
  }

  setBookData = (json) => {
    return this.setState({bookData: json});
  }
  handleError = (errorOccured, details) => {
    if(errorOccured && details){
      return this.setState({errorOccured: details});
    } //if an error occured and no details were given, show default message
    else if(!details && errorOccured){
      return this.setState({errorOccured: "Error getting books, check your network or try again later."});
    }
    else {
      return this.setState({errorOccured: false});
    }
  }

  render() {
    return (
      <main id="app">
      <header id="app-header">
          <h1 className="title">Book Finder</h1>
          <SearchBar
            setBookData={this.setBookData}
            handleError={this.handleError}
            hadError={this.state.errorOccured}
          />
      </header>
        <section className="results-container">

          {this.state.errorOccured ? 
            <p>
              {/* Display error message */}
              {this.state.errorOccured}
            </p>
            :
            (
              (this.state.bookData && this.state.bookData.length > 0) ? 
              this.showBooks()
              :
              <p>Find books by using the search bar above.</p>
            )
          }
          
        </section>
      </main>
    );
  }
}

export default App;
