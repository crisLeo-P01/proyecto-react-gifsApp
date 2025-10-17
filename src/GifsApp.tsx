import { useState } from 'react';
import { CustomHeader } from './components/CustomHeader';
import { SearchBar } from './components/SearchBar';
import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from './mock-data/gifs.mock';

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

    const handleTermCLicked = (term: string) => {
        console.log({ term });
    };

    // el handle significa que es un manejador de evento
    const handleSearch = (query: string) => {
        console.log({ query });
    };

    return (
        <>
            {/* Header */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el gif perfecto"
            />

            {/* Search */}
            <SearchBar
                placeholder="Busca lo que quieras"
                onQuery={handleSearch}
            />

            {/* Búsqueda previas */}
            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={handleTermCLicked}
            />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    );
};
