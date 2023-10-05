// SearchResults.js
import React from 'react';

export default function SearchResults({ searchResults }) {
  return (
    <div>
      <h2>Resultados de la Búsqueda</h2>
      <ul>
        {searchResults.map((auto, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {auto.Name}, <strong>Origen:</strong> {auto.Origin}
          </li>
        ))}
      </ul>
    </div>
  );
}


