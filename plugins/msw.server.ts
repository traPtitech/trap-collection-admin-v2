export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  if (config.public.useMockApi) {
    const { createMockServer } = await import('~/mocks/server');

    // SSR の API クライアントは絶対 URL を使うため、同じ baseUrl でハンドラを生成する。
    const server = createMockServer(`${config.public.apiUrl}/api/v2`);

    server.listen({
      onUnhandledRequest: 'bypass'
    });

    console.log('[MSW] Mock API enabled (server-side)');
  }
});
