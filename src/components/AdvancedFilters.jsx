// components/AdvancedFilters.js
import React from 'react';
import MilesPerGallonFilter from './MilesPerGallon';
// Importa otros componentes de filtro avanzado

export default function AdvancedFilters({ advancedSearch, onFilterChange, onReset }) {
  // Verifica si advancedSearch está definido antes de acceder a sus propiedades
  const milesPerGallonValue = advancedSearch?.milesPerGallon || '';

  return (
    <div className="advanced-filters">
      <h2>Filtro Avanzado</h2>
      <MilesPerGallonFilter
        value={milesPerGallonValue}
        onChange={(value) => onFilterChange('milesPerGallon', value)}
      />
      {/* Renderiza otros componentes de filtro avanzado aquí */}
      <button onClick={onReset}>Restablecer Filtros</button>
    </div>
  );
}
