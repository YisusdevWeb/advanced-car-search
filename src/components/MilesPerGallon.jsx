// components/MilesPerGallonFilter.js (o nombre similar para otros componentes)
import React from 'react';

function MilesPerGallonFilter({ value, onChange }) {
  return (
    <div>
      <label>Miles por Galón:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default MilesPerGallonFilter;
