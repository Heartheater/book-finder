import React from 'react';
function truncateString(string, maxLength) {
    let truncated = string.split(" ").slice(0, maxLength).join(" ");
    return truncated;
}
export default function Book({data}) {
    return(
        <div className="book">
            <img src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : null} alt={`${data.volumeInfo.title} cover`} className="book-cover"/>
            <h4 className="book-title">{data.volumeInfo.title}</h4>
            <div className="misc-book-info">
                <p className="book-author">
                    {(data.volumeInfo.authors && data.volumeInfo.authors.length) > 1 ? 'Authors: ' : 'Author: '}
                    {data.volumeInfo.authors ? 
                        data.volumeInfo.authors.map((author,i) => {
                            if((i + 1) === data.volumeInfo.authors.length)
                            {
                                return author.toString();
                            }
                            else
                                return(`${author}, `);
                        })
                        : 
                        "Unknown"
                    }
                </p>
                <p className="publisher">
                    Published by {data.volumeInfo.publisher}
                </p>
                <p className="page-count">{data.volumeInfo.pageCount} Pages</p>
            </div>

            <p className="book-snippet">
                {(data.searchInfo && data.searchInfo.textSnippet) ? 
                    truncateString(data.searchInfo.textSnippet, 270)
                    :
                    "No description available"
                }
            </p>
            <a href={data.volumeInfo.infoLink} className="book-info-btn">
                More Info
            </a>
        </div>
    );
}