<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    label?: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
    icon?: string | undefined;
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    label: '',
    variant: 'primary',
    icon: undefined,
    disabled: false
  });

  const emit = defineEmits<{
    click: [event: MouseEvent];
  }>();

  const buttonClass = computed(() => {
    const base =
      'flex gap-3 items-center font-extrabold rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors px-4 py-1.5 text-base';

    const variants = {
      primary:
        'bg-primary-500 text-white hover:enabled:bg-primary-600 focus-visible:ring-primary-500',
      secondary:
        'bg-transparent border-primary-500 border-2 text-primary-500 hover:enabled:border-primary-600 hover:enabled:bg-primary-50 focus-visible:ring-primary-500',
      tertiary:
        'bg-transparent text-primary-500 hover:enabled:bg-neutral-100 focus-visible:ring-primary-500',
      danger:
        'bg-transparent border-danger-500 border-2 text-danger-500 hover:enabled:border-danger-600 hover:enabled:bg-danger-50 focus-visible:ring-danger-500'
    };

    const disabledClass = props.disabled
      ? 'opacity-50 cursor-not-allowed'
      : 'cursor-pointer';

    return [base, variants[props.variant], disabledClass].join(' ');
  });
</script>

<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="emit('click', $event)"
  >
    <Icon v-if="icon" :name="icon" class="h-5 w-5" />
    <span>{{ label }}</span>
  </button>
</template>
