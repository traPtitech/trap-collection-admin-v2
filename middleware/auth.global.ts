export default defineNuxtRouteMiddleware(async (to) => {
  // Skip auth check for callback page to avoid infinite redirects
  if (to.path === '/callback') {
    return;
  }

  // Only run on client side to access cookies
  if (import.meta.server) {
    return;
  }

  // Skip auth check when using mock API
  const config = useRuntimeConfig();
  if (config.public.useMockApi) {
    return;
  }

  const { requireAuth } = useAuth();

  try {
    await requireAuth();
  } catch (error) {
    console.error('Authentication middleware error:', error);
  }
});
