import React, { useState, useEffect } from 'react';
import Search from '/src/components/Search';
import AdvancedFilters from './components/AdvancedFilters.jsx';
import SearchResults from '/src/components/SearchResults';

import './App.css';

export default function App() {
  const [autos, setAutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState({
    milesPerGallon: '',
    cylinders: '',
    displacement: '',
    horsepower: '',
    weightInLbs: '',
    acceleration: '',
    year: '',
    origin: '',
  });
  const [searchResults, setSearchResults] = useState([]);

  // Define la función handleBasicSearchChange
  const handleBasicSearchChange = (value) => {
    setSearchTerm(value);
  };

  // Define la función handleAdvancedSearchChange
  const handleAdvancedSearchChange = (field, value) => {
    setAdvancedSearch({
      ...advancedSearch,
      [field]: value,
    });
  };

  // Define la función resetAdvancedSearch
  const resetAdvancedSearch = () => {
    setAdvancedSearch({
      milesPerGallon: '',
      cylinders: '',
      displacement: '',
      horsepower: '',
      weightInLbs: '',
      acceleration: '',
      year: '',
      origin: '',
    });
  };

  useEffect(() => {
    // Carga los datos del archivo JSON local
    fetch('/src/data/Cars.json')
// Ruta al archivo JSON local
      .then((response) => response.json())
      .then((data) => {
        setAutos(data);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []); // El segundo argumento vacío asegura que se carguen los datos solo una vez al montar el componente

  return (
    <div className="App">
      <h1>Buscador de Autos</h1>

      {/* Búsqueda Básica */}
      <Search
        searchTerm={searchTerm}
        handleBasicSearchChange={handleBasicSearchChange}
        performSearch={() => {}}
      />

      {/* Filtros Avanzados */}
      <AdvancedFilters
        advancedSearch={advancedSearch}
        onFilterChange={(field, value) => handleAdvancedSearchChange(field, value)}
        onReset={resetAdvancedSearch}
      />

      {/* Mostrar Resultados */}
      <SearchResults searchResults={searchResults} />
    </div>
  );
}
