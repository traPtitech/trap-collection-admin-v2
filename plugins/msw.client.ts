export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  if (config.public.useMockApi) {
    const { worker } = await import('~/mocks/browser');

    await worker.start({
      onUnhandledRequest: 'bypass'
    });

    console.log('[MSW] Mock API enabled');
  }
});
