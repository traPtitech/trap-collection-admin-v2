<script setup lang="ts">
const keyword = defineModel<string>('keyword');

const onInput = (e: Event) => {
  keyword.value = (e.target as HTMLInputElement).value;
}
</script>

<template>
  <input type="text" class="w-full rounded-full focus-visible:outline-none transition-colors px-5 py-2 cursor-pointer border-2 bg-white text-neutral-600 border-gray-200 focus-visible:border-primary-500 hover:border-gray-300" placeholder="Search" :value="keyword" @input="onInput"/>
</template>
