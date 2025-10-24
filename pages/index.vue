<script setup lang="ts">
  import { useGames } from '~/composables/useGames';

  const { data } = useGames();
</script>

<template>
  <div class="w-dvw h-dvh flex flex-row justify-center items-center">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <p class="text-lg mt-4">Number of Games: {{ data?.num.toString() }}</p>
  </div>
</template>
