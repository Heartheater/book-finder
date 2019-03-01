import React from 'react';

function getBookDesc(string) {
    let desc = string;
    let maxStrLength = 28;
    //for some reason there's a lot of things like "&#39;" appearing in the book desc. 
    //This replaces them
    desc = desc.replace(/&#39;/g,"'");
    desc = desc.replace(/&quot;/g,'"');

    desc = truncateString(desc, maxStrLength);

    return desc + "...";
}

function truncateString(string,maxLength) {
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
                    Publisher: {data.volumeInfo.publisher ? data.volumeInfo.publisher : "Unknown"}
                </p>
                {data.volumeInfo.pageCount ? 
                    <p className="page-count">{data.volumeInfo.pageCount} Pages</p>
                    : 
                    null
                }

            </div>

            <p className="book-snippet">
                {(data.searchInfo && data.searchInfo.textSnippet) ? 
                    getBookDesc(data.searchInfo.textSnippet)
                    :
                    "No description available."
                }
            </p>
            <a href={data.volumeInfo.infoLink} className="book-info-btn">
                More Info
            </a>
        </div>
    );
}