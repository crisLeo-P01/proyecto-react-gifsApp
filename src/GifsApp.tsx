import { useState } from 'react';
import { CustomHeader } from './components/CustomHeader';
import { SearchBar } from './components/SearchBar';
import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { getGifsByQuery } from './gifs/actions/get-gifs-by -query.action';
import type { Gif } from './gifs/interfaces/gif.interface';

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermCLicked = (term: string) => {
    console.log({ term });
  };

  // el handle significa que es un manejador de evento
  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 8));

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      {/* Búsqueda previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermCLicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
