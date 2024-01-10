import React, { useEffect, useState } from 'react';
import './App.css';
import FetchCSVData from './FetchCSVData';

function App() {
    const { csvData, fetchCSVData } = FetchCSVData();
  
    useEffect(() => {
        fetchCSVData();
    }, []); 

    // Accede al objeto individual después de que csvData se haya actualizado
    const objetoIndividual = csvData[0]; // Por ejemplo, el tercer objeto

    console.log(objetoIndividual)
    return (
        <div className="App">
            {/* Otros elementos y contenido aquí */}

        {/* Renderizar el título de objetoIndividual */}
        {objetoIndividual && (
            <div>
                <h2>Título: {objetoIndividual.TITULO}</h2>
                <p>Categoria: {objetoIndividual.CATEGORÍA}</p>
                <p>Título: {objetoIndividual.TITULO}</p>
                <p>Título: {objetoIndividual.TITULO}</p>
            </div>
        )}
        </div>
    );
}

export default App;
