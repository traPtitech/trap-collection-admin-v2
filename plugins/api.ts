import { client } from '@/api-client/client.gen';
import { createConfig } from '~/api-client/client';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  // SSR では絶対 URL が必要。クライアントでは Vite proxy 経由の相対 URL を使う。
  const baseUrl = import.meta.server
    ? `${config.public.apiUrl}/api/v2`
    : '/api/v2';

  client.setConfig(createConfig({ baseUrl }));
});
