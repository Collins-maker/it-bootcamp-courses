// Sort.js
import React from 'react';

const Sort = ({ handleSortChange }) => {
  return (
    <div className="sort">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="relevance">Relevance</option>
        <option value="popularity">Popularity</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
