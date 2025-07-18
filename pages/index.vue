<script setup lang="ts">
  const trapCollectionApi = useTrapCollectionApi();

  const { data: response } = await useAsyncData('game', () => {
    console.log('Fetching game data...');
    return trapCollectionApi.Game.getGames();
  });
</script>

<template>
  <div class="w-dvw h-dvh flex flex-row justify-center items-center">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <p class="text-lg mt-4">Number of Games: {{ response?.num.toString() }}</p>
  </div>
</template>
