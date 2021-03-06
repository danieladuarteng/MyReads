import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
    render() {
        const { shelf, title, books, onChangeShelf } = this.props;
        return (
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    <ol className="books-grid">
                        {books.filter(book => book.shelf === shelf).map(book => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    imageLinks={book.imageLinks}
                                    onChange={(e) => onChangeShelf(e, book)}
                                    shelf={book.shelf}
                                    title={book.title}
                                />
                            </li>
                        ))}
                    </ol>

                </div>
            </div>
        )
    }
}

export default BookShelf
