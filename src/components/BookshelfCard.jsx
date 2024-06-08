import React from 'react';

function BookshelfCard({ title, author, editionCount, onRemove }) {
  return (
    <div className="bookshelf-card custom-scrollbar bg-transparent shadow-lg border-2 border-green-600 overflow-y-auto sm:w-[200px] sm:h-[200px] xl:h-[250px] xl:w-[300px] rounded-lg p-4 m-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-lg">{author ? `Author: ${author.join(', ')}` : 'Unknown Author'}</p>
      <p className="text-lg">Edition Count: {editionCount}</p>
      <button
        className="mt-2 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
        onClick={onRemove}
      >
        Remove Book
      </button>
    </div>
  );
}

export default BookshelfCard;
