<script setup lang="ts">
  interface Props {
    username: string;
  }

  defineProps<Props>();

  const emit = defineEmits<{
    toggle: [event: MouseEvent];
  }>();
</script>

<template>
  <button
    type="button"
    class="flex items-center gap-2 rounded px-2 py-0.5 cursor-pointer transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
    @click="emit('toggle', $event)"
  >
    <AtomsAvatar :username="username" size="md" bordered />
    <span class="font-extrabold text-neutral-900 whitespace-nowrap">
      {{ username }}
    </span>
    <Icon
      name="material-symbols:keyboard-arrow-down-rounded"
      class="h-4 w-4 text-neutral-900"
    />
  </button>
</template>
