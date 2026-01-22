<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    username: string;
    bordered?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    bordered: false,
  });

  const srcString = computed(() => {return "https://q.trap.jp/api/v3/public/icon/" + props.username;});
  const altString = computed(() => {return "@" + props.username;});

  const iconClass = computed(() => {
    const base =
      'h-[30px] w-[30px] rounded-full';

    const borderedClass = props.bordered
      ? 'border-2 border-white'
      : '';

    return [base, borderedClass].join(' ');
  });
</script>

<template>
  <img :src="srcString" :alt="altString" :class="iconClass">
</template>
