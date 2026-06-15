<script setup lang="ts">
  import type { HeaderNavItem } from '~/components/molecules/HeaderNav.vue';

  interface Props {
    navItems?: HeaderNavItem[];
    username?: string;
    logoTo?: string;
  }

  withDefaults(defineProps<Props>(), {
    navItems: () => [
      { label: 'Games', to: '/' },
      { label: 'Editions', to: '/editions' }
    ],
    username: '',
    logoTo: '/'
  });

  const emit = defineEmits<{
    userMenuToggle: [event: MouseEvent];
  }>();
</script>

<template>
  <header class="flex w-full items-center justify-between bg-white">
    <div class="flex items-center gap-6 px-8 py-4">
      <AtomsLogo :to="logoTo" />
      <MoleculesHeaderNav :items="navItems" />
    </div>
    <div class="flex items-center px-8">
      <MoleculesUserMenu
        :username="username"
        @toggle="(e: MouseEvent) => emit('userMenuToggle', e)"
      />
    </div>
  </header>
</template>
