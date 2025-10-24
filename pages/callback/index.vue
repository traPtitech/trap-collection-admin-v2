<script setup lang="ts">
  // OAuth Callback Handling Page

  import { getCallback } from '~/api-client';

  const route = useRoute();
  const router = useRouter();
  const { checkAuth } = useAuth();

  const isProcessing = ref(true);
  const error = ref<string | null>(null);

  onMounted(async () => {
    try {
      // Get authorization code from query parameters
      const code = route.query.code as string;

      if (!code) {
        error.value = 'Authorization code not found';
        return;
      }

      // Process OAuth callback
      await getCallback({
        query: {
          code
        }
      });

      // Verify authentication was successful
      const isAuth = await checkAuth();

      if (isAuth) {
        // Redirect to intended page or home
        const redirectTo = (route.query.redirect as string) || '/';
        await router.push(redirectTo);
      } else {
        error.value = 'Authentication verification failed';
      }
    } catch (err: unknown) {
      console.error('OAuth callback error:', err);
      error.value = 'Authentication failed. Please try again.';
    } finally {
      isProcessing.value = false;
    }
  });
</script>

<template>
  <div class="w-dvw h-dvh flex flex-col justify-center items-center">
    <div v-if="isProcessing" class="text-center">
      <h1 class="text-2xl font-bold mb-4">Authenticating...</h1>
      <p class="text-gray-600">Please wait while we process your login.</p>
    </div>

    <div v-else-if="error" class="text-center">
      <h1 class="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
      <p class="text-gray-600 mb-4">{{ error }}</p>
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        @click="$router.push('/')"
      >
        Return to Home
      </button>
    </div>

    <div v-else class="text-center">
      <h1 class="text-2xl font-bold text-green-600 mb-4">
        Authentication Successful
      </h1>
      <p class="text-gray-600">Redirecting...</p>
    </div>
  </div>
</template>
