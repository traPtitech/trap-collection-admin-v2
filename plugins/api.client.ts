// plugins/api.client.ts
import { client } from '@/api-client/client.gen';
import { createConfig } from '~/api-client/client';

export default defineNuxtPlugin(() => {
  client.setConfig(
    createConfig({
      baseUrl: '/api/v2'
    })
  );
});
