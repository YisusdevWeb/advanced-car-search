import React from 'react';

export default function SearchResults({ searchResults }) {
  return (
    <div>
      <h2>Resultados de la Búsqueda</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Miles por Galón</th>
            <th>Cilindros</th>
            <th>Desplazamiento</th>
            <th>Potencia (HP)</th>
            <th>Peso (lbs)</th>
            <th>Aceleración</th>
            <th>Año</th>
            <th>Origen</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((auto, index) => (
            <tr key={index}>
              <td>{auto.Name}</td>
              <td>{auto.Miles_per_Gallon}</td>
              <td>{auto.Cylinders}</td>
              <td>{auto.Displacement}</td>
              <td>{auto.Horsepower}</td>
              <td>{auto.Weight_in_lbs}</td>
              <td>{auto.Acceleration}</td>
              <td>{auto.Year}</td>
              <td>{auto.Origin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
