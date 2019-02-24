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
        let foundBooks = {};
        console.log("searching for ", searchTerm);
        //call google books api 
        await fetch(`${API_URL}?q=${searchTerm}&key=${API_KEY}`)
            .then(response => {
                if(!(response.status === 200)) console.error("Error getting book data from api");
                console.log(response);
                return response.json();
            }) 
            //get JSON data and put it into foundBooks
            .then((json) => {
                foundBooks = json.items;
                return foundBooks;
            });
        return foundBooks;
    }

    deleteQuery = () => {
        this.setState({query: ''});
    }
    
    getBookData = async () => {
        const bookData = await this.searchBookAPI(this.state.query);
        console.log(bookData);
        //set state to hold the matching books data
        this.props.setBookData(bookData);
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
                    className="delete-search"
                    onClick={this.deleteQuery}
                >
                x
                </button>
                </div>
                <button 
                    className="submit-search" 
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        this.getBookData();
                        this.deleteQuery();
                    }}
                >
                submit
                </button>
            </div>
        );
    }
}