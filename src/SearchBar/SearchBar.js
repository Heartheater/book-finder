import React, {Component} from 'react';
import {API_KEY} from '../api-key';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
        }
    }
   async searchBookAPI(searchTerm) {
        //google books api url
        const API_URL = `https://www.googleapis.com/books/v1/volumes`;
        let foundBooks = [];
        let success = false;
        if(!searchTerm || searchTerm == "" || searchTerm == " ") return;

        //call google books api 
        await fetch(`${API_URL}?q=${searchTerm}&key=${API_KEY}`)
            .then(response => {
                if(!(response.status === 200)) {
                    console.error("Error getting book data from api");
                }
                console.log(response);
                return response.json();
            }) 
            //get JSON data and put it into foundBooks
            .then((json) => {
                foundBooks = json.items;
                success = true;
                return foundBooks;
            })
            .catch((error) => {
                success = false;
                return console.error(error);
            });

        if(success)
            return foundBooks;
        else 
            return -1;
    }

    deleteQuery = () => {
        document.querySelector('.search-input').value = "";
        this.setState({query: ''});
    }
    
    getBookData = async () => {
        const bookData = await this.searchBookAPI(this.state.query);

        if(bookData === -1){
            return this.props.handleError(true);
        }
        else if(!bookData || bookData === []){
            return this.props.handleError(true,"No books were found.");
        }
        else if(this.props.hadError) {
            //if the search previously returned an error, reset it now
            this.props.handleError(false);
        }
        console.log(bookData);
        //set state to hold the matching books data
        return this.props.setBookData(bookData);
    }

    render() {
        return(
            <div className="search-bar-container">
                <div className="search-bar">
                <input 
                    className="search-input" 
                    type="text"
                    onChange={(e) => {
                        e.preventDefault();
                        const inputVal = e.target.value.toString().toLowerCase();
                        this.setState({query: inputVal});
                    }}
                >
                </input>
                <button 
                    className="delete-search-btn"
                    onClick={this.deleteQuery}
                >
                x
                </button>
                </div>
                <button 
                    className="submit-search-btn" 
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        //return if there is no search query
                        if(!this.state.query) return;
                        this.getBookData();
                        this.deleteQuery();
                    }}
                >
                Search
                </button>
            </div>
        );
    }
}