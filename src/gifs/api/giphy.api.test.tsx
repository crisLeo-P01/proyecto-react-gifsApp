import { describe, expect, test } from 'vitest';
import { giphyApi } from './giphy.api';

describe('giphyApi', () => {
  test('should be configured correctly', () => {
    const params = giphyApi.defaults.params; // Obtener los parámetros por defecto

    console.log(params);

    expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs'); // Verifica la URL base

    // Verifica los parámetros individuales
    expect(params.lang).toBe('es');
    expect(params.api_key).toBe(import.meta.env.VITE_GIFHY_API_KEY);

    // Verifica que los parámetros coincidan exactamente
    expect(params).toStrictEqual({
      lang: 'es',
      api_key: import.meta.env.VITE_GIFHY_API_KEY,
    });
  });
});
