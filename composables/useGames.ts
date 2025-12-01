import { getGames } from '~/api-client';

export function useGames() {
  const { data, pending, error, refresh } = useAsyncData('games', async () => {
    const response = await getGames({});
    return response.data;
  });

  return { data, pending, error, refresh };
}
