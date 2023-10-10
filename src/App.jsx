import React, { useState, useEffect } from 'react';
import Search from '/src/components/Search.jsx';
import AdvancedFilters from '/src/components/AdvancedFilters.jsx';
import SearchResults from '/src/components/SearchResults.jsx';

import './App.css';

export default function App() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState({
    MilesPerGallon: '',
    Cylinders: '',
    Displacement: '',
    Horsepower: '',
    Weight_in_lbs: '',
    Acceleration: '',
    Year: '',
    Origin: '',
  });
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('/src/data/Cars.json')
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  useEffect(() => {
    const performSearch = () => {
      setSearchResults(
        cars.filter((auto) => {
          const searchTermMatch = Object.values(auto).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          );

          const milesPerGallonMatch =
            advancedSearch.MilesPerGallon === '' || auto.Miles_per_Gallon === parseFloat(advancedSearch.MilesPerGallon);
          const cylindersMatch = advancedSearch.Cylinders === '' || auto.Cylinders === parseInt(advancedSearch.Cylinders);
          const displacementMatch =
            advancedSearch.Displacement === '' || auto.Displacement === parseFloat(advancedSearch.Displacement);
          const horsepowerMatch = advancedSearch.Horsepower === '' || auto.Horsepower === parseInt(advancedSearch.Horsepower);
          const weightInLbsMatch = advancedSearch.Weight_in_lbs === '' || auto.Weight_in_lbs === parseInt(advancedSearch.Weight_in_lbs);
          const accelerationMatch =
            advancedSearch.Acceleration === '' || auto.Acceleration === parseFloat(advancedSearch.Acceleration);
          const yearMatch = advancedSearch.Year === '' || auto.Year === advancedSearch.Year;
          const originMatch = advancedSearch.Origin === '' || auto.Origin.toLowerCase().includes(advancedSearch.Origin.toLowerCase());

          return (
            searchTermMatch &&
            milesPerGallonMatch &&
            cylindersMatch &&
            displacementMatch &&
            horsepowerMatch &&
            weightInLbsMatch &&
            accelerationMatch &&
            yearMatch &&
            originMatch
          );
        })
      );
    };

    performSearch();
  }, [searchTerm, advancedSearch, cars]);

  const handleBasicSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleAdvancedSearchChange = (field, value) => {
    setAdvancedSearch({
      ...advancedSearch,
      [field]: value,
    });
  };

  return (
    <div className="App">
      <h1>Buscador de Cars</h1>
      <Search
        searchTerm={searchTerm}
        handleBasicSearchChange={handleBasicSearchChange}
        performSearch={() => {}}
      />
      <button onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}>
        {showAdvancedFilters ? 'Ocultar Filtros Avanzados' : 'Mostrar Filtros Avanzados'}
      </button>
      {showAdvancedFilters && (
        <AdvancedFilters
          advancedSearch={advancedSearch}
          onFilterChange={(field, value) => handleAdvancedSearchChange(field, value)}
        />
      )}
      <SearchResults searchResults={searchResults} />
    </div>
  );
}
