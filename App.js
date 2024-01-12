import React, { useEffect, useState } from 'react';
import './App.css';
import FetchCSVData from './FetchCSVData';
import BookSearch from './BookSearch';

function App() {
    const { csvData, fetchCSVData } = FetchCSVData();
    const [index, setIndex] = useState(0); // Nuevo estado para el índice

    useEffect(() => {
        fetchCSVData();
    }, []);

    // Accede al objeto individual después de que csvData se haya actualizado
    const objetoIndividual = csvData[index]; // Usa el índice del estado

    const handleInputChange = (event) => { // Nuevo manejador de eventos
        const value = event.target.value;
        if (!isNaN(value) && csvData[value]) { // Verifica que el valor sea un número y que exista un objeto en ese índice
            setIndex(value);
        }
    }
    return (
        <div className="App">
            {/* Otros elementos y contenido aquí */}

            {/* Campo de entrada para el usuario */}
            <input type="number" placeholder="Ingrese un número aquí" onChange={handleInputChange} />

            {/* Renderizar el título de objetoIndividual */}
            {objetoIndividual && (
                <div>
                    {/* AUTORÍA, AñO, CANTIDAD, CATEGORÍA, EDICIÓN, EDITORIAL, ETIQUETA, IDIOMA, IMAGEN, ISBN, NÚMERO, PAÍS, PÁGINAS, RESUMEN, TIPO DE RECURSO, TÍTULO */}
                    <h2><strong>Título:</strong> {objetoIndividual.TITULO}</h2>
                    <p><strong>Autoría:</strong> {objetoIndividual.AUTORÍA}</p>
                    <p><strong>Categoria:</strong> {objetoIndividual.CATEGORÍA}</p>
                    <p><strong>Editorial:</strong> {objetoIndividual.EDITORIAL}</p>
                    <p><strong>ISBN:</strong> {objetoIndividual.ISBN}</p>
                    <p><strong>Año:</strong> {objetoIndividual.AÑO}</p>
                    <p><strong>Resumen:</strong> {objetoIndividual.RESUMEN}</p>
                    <p><strong>Idioma:</strong> {objetoIndividual.IDIOMA}</p>
                    <p><strong>País:</strong> {objetoIndividual.PAÍS}</p>
                    <p><strong>Edición:</strong> {objetoIndividual.EDICIÓN}</p>
                    <p><strong>Páginas:</strong> {objetoIndividual.PÁGINAS}</p>
                    <p><strong>Cantidad:</strong> {objetoIndividual.CANTIDAD}</p>
                    <p><strong>Etiqueta:</strong> {objetoIndividual.ETIQUETA}</p>
                    <p><strong>Imagen:</strong> {objetoIndividual.IMAGEN}</p>
                    <p><strong>Número:</strong> {objetoIndividual.NÚMERO}</p>
                    <p><strong>Tipo de recurso:</strong> {objetoIndividual.TIPO_DE_RECURSO}</p>
                    <img
                        src={objetoIndividual.IMAGEN}
                        alt="example"
                        width="400px"
                        height="600px"
                    />
                </div>
            )}

            {/* Renderizar el componente BookSearch */}
            <br />
            <br />
            <br />
            <BookSearch />

        </div>



    );
}

export default App;
