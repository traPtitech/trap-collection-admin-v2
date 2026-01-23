<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    username: string;
    bordered?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';


  }

  const props = withDefaults(defineProps<Props>(), {
    bordered: false,
    size: 'md',
  });

  const srcString = computed(() => {return "https://q.trap.jp/api/v3/public/icon/" + props.username;});
  const altString = computed(() => {return "@" + props.username;});

  const iconClass = computed(() => {
    const base =
      'rounded-full';

    const borderedClass = props.bordered
      ? 'border-2 border-white'
      : '';

    const sizeClass = {
      xs: 'w-6 h-6',
      sm: 'w-7 h-7',
      md: 'w-8 h-8',
      lg: 'w-9 h-9',
      xl: 'w-10 h-10',
    }[props.size];

    return [base, borderedClass, sizeClass].join(' ');
  });
</script>

<template>
  <img :src="srcString" :alt="altString" :class="iconClass">
</template>
