import React from 'react';
import "./BookCard.css"

function BookCard({ title, author, editionCount, onAddToBookshelf }) {
  return (
    <div className="bg-transparent shadow-lg border-2 border-green-600 overflow-y-auto sm:w-[200px] sm:h-[200px] xl:h-[250px] xl:w-[300px] rounded-lg p-4 m-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm">{author ? `Author: ${author.join(', ')}` : 'Unknown Author'}</p>
      <p className="text-sm">Edition Count: {editionCount}</p>
      <button onClick={onAddToBookshelf} className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
        Add to Bookshelf
      </button>
    </div>
  );
}

export default BookCard;
