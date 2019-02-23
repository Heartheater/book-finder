import React from 'react';

export default function Book({data}) {
    return(
        <div className="book">
            <img src={data.volumeInfo.imageLinks.thumbnail} alt={`${data.volumeInfo.title} cover`} className="book-cover"/>
            <h4 className="book-title">{data.volumeInfo.title}</h4>
            <div className="misc-book-info">
                <p className="book-author">
                    By {data.volumeInfo.authors.map(author => author.toString())}
                </p>
                <p className="publish-date">
                    Published ∙ {data.volumeInfo.publishedDate.split("-").join("/")}
                </p>
                <p className="page-count">{data.volumeInfo.pageCount} Pages</p>

            </div>

            <p className="book-snippet">
                {data.searchInfo.textSnippet}
            </p>
            <a href={data.volumeInfo.infoLink} className="book-info-btn">
                More Info
            </a>
        </div>
    );
}