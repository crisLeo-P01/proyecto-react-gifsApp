import { useState } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by -query.action';
import type { Gif } from '../interfaces/gif.interface';

export const UseGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermCLicked = async (term: string) => {
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
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

  return {
    // properties
    gifs,

    // Methods
    handleTermCLicked,
    handleSearch,
    previousTerms,
  };
};
