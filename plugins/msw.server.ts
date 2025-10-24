export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  if (config.public.useMockApi) {
    const { server } = await import('~/mocks/server');

    server.listen({
      onUnhandledRequest: 'bypass'
    });

    console.log('[MSW] Mock API enabled (server-side)');
  }
});
