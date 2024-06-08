import React from 'react';

function BookshelfCard({ title, author, editionCount }) {
  return (
    <div className="bg-transparent shadow-lg border-2 border-green-600 overflow-y-auto sm:w-[200px] sm:h-[200px] xl:h-[250px] xl:w-[300px] rounded-lg p-4 m-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm">{author ? `Author: ${author.join(', ')}` : 'Unknown Author'}</p>
      <p className="text-sm">Edition Count: {editionCount}</p>
    </div>
  );
}

export default BookshelfCard;
