import React, { Component } from 'react';
import './App.css';
import {API_KEY} from './api-key';
import Book from './Book/Book';
const testJson = {
  "items": [
    {
     "kind": "books#volume",
     "id": "ogs_KDUQLSsC",
     "etag": "CfGDkHrf3vo",
     "selfLink": "https://www.googleapis.com/books/v1/volumes/ogs_KDUQLSsC",
     "volumeInfo": {
      "title": "Flowers",
      "authors": [
       "Gail Saunders Smith"
      ],
      "publisher": "Capstone",
      "publishedDate": "2004-09-01",
      "description": "Simple text and photographs depict the parts of flowers and their pollination.",
      "industryIdentifiers": [
       {
        "type": "ISBN_10",
        "identifier": "0736848649"
       },
       {
        "type": "ISBN_13",
        "identifier": "9780736848640"
       }
      ],
      "readingModes": {
       "text": false,
       "image": true
      },
      "pageCount": 24,
      "printType": "BOOK",
      "categories": [
       "Juvenile Nonfiction"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "0.1.1.0.preview.1",
      "imageLinks": {
       "smallThumbnail": "http://books.google.com/books/content?id=ogs_KDUQLSsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
       "thumbnail": "http://books.google.com/books/content?id=ogs_KDUQLSsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=ogs_KDUQLSsC&printsec=frontcover&dq=flowers&hl=&cd=1&source=gbs_api",
      "infoLink": "http://books.google.com/books?id=ogs_KDUQLSsC&dq=flowers&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/Flowers.html?hl=&id=ogs_KDUQLSsC"
     },
     "saleInfo": {
      "country": "US",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
     },
     "accessInfo": {
      "country": "US",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
       "isAvailable": false
      },
      "pdf": {
       "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=ogs_KDUQLSsC&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
     },
     "searchInfo": {
      "textSnippet": "Simple text and photographs depict the parts of flowers and their pollination."
     }
    },
    {
     "kind": "books#volume",
     "id": "1hfMDQAAQBAJ",
     "etag": "wof4Vy8wJQU",
     "selfLink": "https://www.googleapis.com/books/v1/volumes/1hfMDQAAQBAJ",
     "volumeInfo": {
      "title": "The Flower Book",
      "authors": [
       "Rachel Siegfried"
      ],
      "publisher": "Penguin",
      "publishedDate": "2017-02-07",
      "description": "The Flower Book explores 60 flowers, bloom-by-bloom in stunning portraiture. Lush macrophotography allows readers to see the details of each featured flower up close, from the amaryllis in spring, snapdragon in summer, and dahlia in fall to tropical wonders such as orchids and more. Intimate portraits of each flower include quick-reference profiles with tips for choosing the best blooms, care for cut stems, arranging recommendations, colors, shapes, and even growing tips to transform the home, from yard to tabletop. Gorgeous photographs throughout spotlight 30 sample floral arrangements that show how to design and build custom floral arrangements using featured blooms. Plus, a step-by-step techniques section walks beginners through the basics of foliage and fillers, bouquets, and arrangements to make this book as practical as it is beautiful. The Flower Book celebrates all the wonderful qualities of flowers-their sheer beauty, infinite variety, and power to evoke admiration-bloom by exquisite bloom.",
      "industryIdentifiers": [
       {
        "type": "ISBN_13",
        "identifier": "9781465464538"
       },
       {
        "type": "ISBN_10",
        "identifier": "1465464530"
       }
      ],
      "readingModes": {
       "text": false,
       "image": true
      },
      "pageCount": 224,
      "printType": "BOOK",
      "categories": [
       "Crafts & Hobbies"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "1.1.1.0.preview.1",
      "panelizationSummary": {
       "containsEpubBubbles": false,
       "containsImageBubbles": false
      },
      "imageLinks": {
       "smallThumbnail": "http://books.google.com/books/content?id=1hfMDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
       "thumbnail": "http://books.google.com/books/content?id=1hfMDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=1hfMDQAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=2&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=1hfMDQAAQBAJ&source=gbs_api",
      "canonicalVolumeLink": "https://market.android.com/details?id=book-1hfMDQAAQBAJ"
     },
     "saleInfo": {
      "country": "US",
      "saleability": "FOR_SALE",
      "isEbook": true,
      "listPrice": {
       "amount": 25.99,
       "currencyCode": "USD"
      },
      "retailPrice": {
       "amount": 25.99,
       "currencyCode": "USD"
      },
      "buyLink": "https://play.google.com/store/books/details?id=1hfMDQAAQBAJ&rdid=book-1hfMDQAAQBAJ&rdot=1&source=gbs_api",
      "offers": [
       {
        "finskyOfferType": 1,
        "listPrice": {
         "amountInMicros": 2.599E7,
         "currencyCode": "USD"
        },
        "retailPrice": {
         "amountInMicros": 2.599E7,
         "currencyCode": "USD"
        },
        "giftable": true
       }
      ]
     },
     "accessInfo": {
      "country": "US",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
      "epub": {
       "isAvailable": false
      },
      "pdf": {
       "isAvailable": true,
       "acsTokenLink": "http://books.google.com/books/download/The_Flower_Book-sample-pdf.acsm?id=1hfMDQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "webReaderLink": "http://play.google.com/books/reader?id=1hfMDQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
     },
     "searchInfo": {
      "textSnippet": "The Flower Book explores 60 flowers, bloom-by-bloom in stunning portraiture."
     }
    }
  ]
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: testJson.items
    }
  }
  componentDidMount() {
    console.log(this.state.bookData);
    
  }

  showBooks() {
    //maps through bookData array and creates a Book component for each book
    let allBooks = [];
    if(!this.state.bookData) return console.error("ERROR: No book data!");
    this.state.bookData.map((book) => {
      return allBooks.push(<Book data={book} key={book.id}/>);
    });
    return allBooks;
  }

  searchBookAPI(searchTerm) {
    //google books api url
    const API_URL = `https://www.googleapis.com/books/v1/volumes`;
    let foundBooks = {};

    //call google books api 
    fetch(`${API_URL}?q=${searchTerm}&key=${API_KEY}`)
      .then(response => response.json()) 
      //get JSON data and put it into foundBooks
      .then(json => foundBooks = json);
      return foundBooks;
  }
  

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
          {this.showBooks()}
        </section>
      </main>
    );
  }
}

export default App;
