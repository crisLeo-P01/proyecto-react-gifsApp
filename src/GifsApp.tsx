import { CustomHeader } from './components/CustomHeader';
import { SearchBar } from './components/SearchBar';
import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { UseGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
  const { handleSearch, previousTerms, handleTermCLicked, gifs } = UseGifs();

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
