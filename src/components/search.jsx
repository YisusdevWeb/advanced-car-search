import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function Search({ searchTerm, handleBasicSearchChange, performSearch }) {
  const [value, setValue] = useState(searchTerm);
  const [suggestions, setSuggestions] = useState([]);
  const [autos, setAutos] = useState([]);

  // Cargar los datos del archivo JSON local (ajusta la ruta según tu estructura de archivos)
  useEffect(() => {
    fetch('/src/data/Cars.json')
 // Ruta al archivo JSON local
      .then((response) => response.json())
      .then((data) => {
        setAutos(data);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  const getSuggestions = (value) => {
    // Filtra las sugerencias basadas en el valor ingresado y en los datos cargados
    return autos
      .filter((auto) =>
        auto.Name.toLowerCase().includes(value.toLowerCase())
      )
      .map((auto) => auto.Name);
  };

  const handleChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleSearchClick = () => {
    // Manejar la búsqueda cuando se hace clic en el botón de búsqueda
    handleBasicSearchChange(value);
    performSearch();
  };

  const inputProps = {
    placeholder: 'Search Car',
    value,
    onChange: handleChange,
  };

  return (
    <Paper component="form">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={handleSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={(suggestion) => <div>{suggestion}</div>}
        inputProps={inputProps}
      />

      <Button disabled>Clear</Button>

      {/* Maneja la búsqueda cuando se hace clic en el botón */}
      <IconButton type="button" aria-label="search" onClick={handleSearchClick}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
