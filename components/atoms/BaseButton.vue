<script setup lang="ts">
  import { computed } from 'vue';
  import Icon from '@nuxt/icon'

  interface Props {
    label?: string;
    variant?: 'primary' | 'secondary' | 'tertiary' |'danger';
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
      'font-bold rounded-md focus:outline-none focus:ring-0 focus:ring-offset-0 transition-colors px-2 py-2 m-2';

    const variants = {
      primary:
        'bg-primary-500 text-white hover:bg-primary-600',
      secondary:
        'bg-transparent border-primary-500 border-2 text-primary-500 hover:border-primary-600 hover:bg-primary-50',
      tertiary:
        'bg-transparent text-primary-500 hover:bg-neutral-50',
      danger:
        'bg-transparent border-danger-500 border-2 text-danger-500 hover:border-danger-600 hover:bg-danger-50'
    };

    const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : '';

    return [
      base,
      variants[props.variant],
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
    <Icon v-if="icon" :name="icon" class="mr-2"/>
    <span>{{ label }}</span>
  </button>
</template>
