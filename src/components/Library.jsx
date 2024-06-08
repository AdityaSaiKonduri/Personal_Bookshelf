import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

function Library() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [resultCount, setResultCount] = useState(10);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const fetchBooks = async () => {
    if (query.length >= 1) {
      const q = query.replace(" ", "_");
      const response = await fetch(`https://openlibrary.org/search.json?q=${q}&limit=${resultCount}&page=1`);
      if (response.ok) {
        const data = await response.json();
        setResults(data.docs);
      }
    } 
    else {
      setResults([]);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [query, resultCount]);

  const addToBookshelf = (bookTitle, authorName, editionCount) => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    const bookData = { title: bookTitle, author: authorName, editions: editionCount };

    if (!bookshelf.some(book => book.title === bookTitle)) {
      bookshelf.push(bookData);
      localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
      alert(`${bookTitle} added to your bookshelf.`);
    } 
    else {
      alert(`${bookTitle} is already in your bookshelf.`);
    }
  };

  const handleNumberOfResults = (e) => {
    setResultCount(e.target.value);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-semibold mb-3'>Library</h1>
      <div className='flex flex-row justify-center items-center'>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for a book..."
          className='max-w-96 sm:w-48 md:w-96 py-2 px-2 border border-black bg-green-500/20 rounded-lg dark:placeholder-green-100 m-4'
        />
        <input
          type="number"
          value={resultCount}
          onChange={handleNumberOfResults}
          placeholder='Number of results'
          className='w-10 sm:w-10 lg:w-28 p-2 border border-black bg-green-500/20 rounded-lg dark:placeholder-green-100 m-4'
        />
      </div>
      <div className='overflow-auto'>
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {results.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author_name}
              editionCount={book.edition_count}
              onAddToBookshelf={() => addToBookshelf(book.title, book.author_name, book.edition_count)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
