import React from 'react';
import BookshelfCard from './BookshelfCard';
import { useState } from 'react';

function Bookshelf() {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const clearBookshelf = () => {
    localStorage.removeItem('bookshelf');
    setBookshelf([]);
  };

  return (
    <div className="dark:bg-gray-800 min-h-screen dark:text-white p-4">
      <h1 className="text-4xl font-semibold mb-4">My Bookshelf</h1>
      {bookshelf.length === 0 ? (
        <p className="text-xl">There are no books in your bookshelf.</p>
      ) : (
        <div>
          <button onClick={clearBookshelf} className="mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Clear Bookshelf
          </button>
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {bookshelf.map((book, index) => (
              <BookshelfCard
                key={index}
                title={book.title}
                author={book.author}
                editionCount={book.editions}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookshelf;
