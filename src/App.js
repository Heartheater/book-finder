import React, { Component } from 'react';
import './App.css';
import Book from './Book/Book';
import SearchBar from './SearchBar/SearchBar';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: []
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
    console.log(json);
    return this.setState({bookData: json});
  }

  render() {
    return (
      <main id="app">
      <header id="app-header">
          <h1 className="title">Book Finder</h1>
          <SearchBar
            setBookData={this.setBookData}
          />
      </header>
       
        <section className="results-container">
          {(this.state.bookData && this.state.bookData.length > 0) ? 
            this.showBooks()
            :
            <p className="no-books-found">No books were found.</p>
          }
          {console.log(this.state.bookData)}
        </section>
      </main>
    );
  }
}

export default App;
