import { getGames } from '~/api-client';

export function useGames() {
  const { data, pending, error, refresh } = useAsyncData(
    'games',
    async () => {
      const response = await getGames({});
      return response.data;
    },
    // 認証クッキーはブラウザ側にあるため、取得はクライアントで行う（SSR では叩かない）
    { server: false }
  );

  return { data, pending, error, refresh };
}
