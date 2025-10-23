import { describe, expect, test } from 'vitest';
import { getGifsByQuery } from './get-gifs-by-query.action';

describe('getGifsByQuery', () => {
  test('should return a list of gifs', async () => {
    // Llama a la función con una consulta de ejemplo
    const gifs = await getGifsByQuery('goku');

    // Verifica que la respuesta sea un array de gifs con la estructura esperada
    const [gif1] = gifs;

    // Verifica que se hayan retornado 10 gifs
    expect(gifs.length).toBe(10);

    // Verifica la estructura del primer gif
    expect(gif1).toStrictEqual({
      id: expect.any(String),
      height: expect.any(Number),
      width: expect.any(Number),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
