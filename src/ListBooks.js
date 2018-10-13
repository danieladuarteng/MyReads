import React from 'react'
import PropTypes from 'prop-types'

//criando o componente ListBooks
//statelesse function component, só tem return
function ListBooks(props){
    
    return (
        <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {props.books.filter(book=> book.shelf==='currentlyReading').map(book=> (
                                <li key={book.title}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ 
                                                width: 128, height: 193,  
                                                backgroundImage: `url(${book.imageLinks.thumbnail})` 
                                            }}></div>
                                            <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={(e) => props.onChangeShelf(e, book)}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option  value="none">None</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {props.books.filter(book=> book.shelf==='wantToRead').map(book=> (
                                <li key={book.title}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ 
                                                width: 128, height: 193,  
                                                backgroundImage: `url(${book.imageLinks.thumbnail})` 
                                            }}></div> 
                                            <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={(e) => props.onChangeShelf(e, book)}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option  value="none">None</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.books.filter(book=> book.shelf==='read').map(book=> (
                            <li key={book.title}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ 
                                                width: 128, height: 193,  
                                                backgroundImage: `url(${book.imageLinks.thumbnail})` 
                                        }}></div>
                                        <div className="book-shelf-changer">
                                        <select  value={book.shelf} onChange={(e) => props.onChangeShelf(e,book)}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none" >None</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

ListBooks.propTypes ={
    books: PropTypes.array.isRequired,//aqui falo que minha prop books precisa ser um array
    onChangeShelf: PropTypes.func.isRequired,//e aqui que a onChangeShelf seja uma função
}
export default ListBooks