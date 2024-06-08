import React from 'react';

function BookCard({ title, author, editionCount, onAddToBookshelf }) {
  return (
    <div className="book-card custom-scrollbar bg-transparent shadow-lg border-2 border-green-600 overflow-y-auto sm:w-[200px] sm:h-[200px] xl:h-[250px] xl:w-[300px] rounded-lg p-4 m-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm">{author ? `Author: ${author.join(', ')}` : 'Unknown Author'}</p>
      <p className="text-sm">Edition Count: {editionCount}</p>
      <button
        className="mt-2 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
        onClick={onAddToBookshelf}
      >
        Add to Bookshelf
      </button>
    </div>
  );
}

export default BookCard;
