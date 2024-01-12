import React, { useEffect, useState } from 'react';
import FetchCSVData from './FetchCSVData';

function BookSearch() { 
    const { csvData, fetchCSVData } = FetchCSVData();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchCSVData();
    }, []); 

    const searchBooks = (term) => {
        return csvData.filter(book => 
            (book.TITULO ? book.TITULO.toLowerCase().includes(term.toLowerCase()) : false) || 
            (book.AUTORÍA ? book.AUTORÍA.toLowerCase().includes(term.toLowerCase()) : false)
        );
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const books = searchBooks(searchTerm);

    return (
        <div className="BookSearch"> 
            <input type="text" placeholder="Buscar por título o autoría" onChange={handleInputChange} />
            {books.map((book, index) => (
                <div key={index}>
                    <h2><strong>Título:</strong> {book.TITULO}</h2>  
                    <p><strong>Autoría:</strong> {book.AUTORÍA}</p>
                </div>
            ))}
        </div>
    );
}

export default BookSearch; // Cambia la exportación por defecto a BookSearch
