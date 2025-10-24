import { getMe } from '~/api-client';

export interface User {
  id: string;
  name: string;
  // Add other user properties as needed
}

export const useAuth = () => {
  const user = ref<User | null>(null);
  const isAuthenticated = computed(() => !!user.value);
  const isLoading = ref(false);

  /**
   * Check authentication status by calling getMe API
   */
  const checkAuth = async (): Promise<boolean> => {
    try {
      isLoading.value = true;
      const response = await getMe();

      // Check if response contains error (401/403)
      if (response.error) {
        const statusCode = response.response?.status;

        if (statusCode === 401 || statusCode === 403) {
          user.value = null;
          return false;
        }
      }

      // If we get here, authentication was successful
      user.value = response.data as User;
      return true;
    } catch (error: unknown) {
      // Handle caught errors as well
      const errorStatus =
        (error as { status?: number; response?: { status?: number } })
          ?.status ??
        (error as { status?: number; response?: { status?: number } })?.response
          ?.status;
      if (errorStatus === 401 || errorStatus === 403) {
        user.value = null;
        return false;
      }
      // Other errors should be logged but not treated as auth failure
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  /**
   * Initiate OAuth login flow
   */
  const login = async () => {
    console.log('Initiating OAuth login...');

    // Always use /api/v2 - proxy handles dev environment automatically
    const redirectUrl = '/api/v2/oauth2/code';
    console.log('Redirecting to:', redirectUrl);

    window.location.href = redirectUrl;
  };

  /**
   * Clear user session
   */
  const logout = () => {
    user.value = null;
    // Optionally call logout API here if needed
  };

  /**
   * Force redirect to login if not authenticated
   */
  const requireAuth = async () => {
    const isAuth = await checkAuth();
    if (!isAuth) {
      await login();
    }
    return isAuth;
  };

  return {
    user: readonly(user),
    isAuthenticated,
    isLoading: readonly(isLoading),
    checkAuth,
    login,
    logout,
    requireAuth
  };
};
