<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    disabled: false
  });

  const emit = defineEmits<{
    click: [event: MouseEvent];
  }>();

  const buttonClass = computed(() => {
    const base =
      'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';

    const variants = {
      primary:
        'bg-primary-500 text-white hover:bg-primary-700 focus:ring-primary-500',
      secondary:
        'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-500',
      danger:
        'bg-danger-500 text-white hover:bg-danger-700 focus:ring-danger-500'
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };

    const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : '';

    return [
      base,
      variants[props.variant],
      sizes[props.size],
      disabledClass
    ].join(' ');
  });
</script>

<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>
