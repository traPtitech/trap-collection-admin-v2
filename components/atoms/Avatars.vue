
<script setup lang="ts">

  interface Props {
    usernames: string[];
    max?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    bordered?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    max: 5,
    size: 'md',
    bordered: true,
  });

  const usernames_filtered = computed((): string[] => {
    return props.usernames.slice(0, props.max);
  });

  const plusClass = computed(() => {
    const base =
      'ml-[-6px] bg-gray-200 rounded-full flex justify-center items-center truncate';

    const borderedClass = props.bordered
      ? 'border-2 border-white'
      : '';

    const sizeClass = {
      xs: 'w-6 h-6 text-[9px]',
      sm: 'w-7 h-7 text-[10.5px]',
      md: 'w-8 h-8 text-[12px]',
      lg: 'w-9 h-9 text-[13.5px]',
      xl: 'w-10 h-10 text-[15px]',
    }[props.size];

    return [base, borderedClass, sizeClass].join(' ');
  });

  const plusText = computed(() => {
    return "+"+(props.usernames.length - props.max);
  });

</script>

<template>
  <div class="flex">
    <AtomsAvatar
      v-for="username in usernames_filtered"
      :key="username"
      :username="username"
      :bordered="bordered"
      :size="size"
      class="-ml-1.5 bg-white"
    />
    <div  v-if="usernames.length > max" :class="plusClass">{{ plusText }}</div>
  </div>
</template>
