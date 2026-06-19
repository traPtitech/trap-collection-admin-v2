
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

  const normalizedMax = computed(() => Math.max(0, Math.floor(props.max)));

  const usernames_filtered = computed((): string[] => {
    return props.usernames.slice(0, normalizedMax.value);
  });

  const plusClass = computed(() => {
    const base = 'bg-gray-200 rounded-full flex justify-center items-center truncate';

    const margin = normalizedMax.value == 0 ? '' : 'ml-[-6px]'

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

    return [base, margin,borderedClass, sizeClass].join(' ');
  });

  const plusText = computed(() => {
    return "+"+(props.usernames.length - normalizedMax.value);
  });

</script>

<template>
  <div class="flex">
    <AtomsAvatar
      v-for="(username, index) in usernames_filtered"
      :key="`${username}+${index}`"
      :username="username"
      :bordered="bordered"
      :size="size"
      class="-ml-1.5 bg-white"
    />
    <div  v-if="usernames.length > max" :class="plusClass">{{ plusText }}</div>
  </div>
</template>
