<script setup lang="ts">
  // Component Preview Page
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-8">Component Preview</h1>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">BaseButton</h2>

      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2">Variants</h3>
        <div class="flex flex-wrap gap-2">
          <AtomsBaseButton label="Primary" variant="primary" />
          <AtomsBaseButton label="Secondary" variant="secondary" />
          <AtomsBaseButton label="Tertiary" variant="tertiary" />
          <AtomsBaseButton label="Danger" variant="danger" />
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2">With Icons</h3>
        <div class="flex flex-wrap gap-2">
          <AtomsBaseButton
            label="Primary"
            variant="primary"
            icon="material-symbols:home-rounded"
          />
          <AtomsBaseButton
            label="Secondary"
            variant="secondary"
            icon="material-symbols:check-rounded"
          />
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2">Disabled</h3>
        <div class="flex flex-wrap gap-2">
          <AtomsBaseButton
            label="Disabled Primary"
            variant="primary"
            :disabled="true"
          />
          <AtomsBaseButton
            label="Disabled Secondary"
            variant="secondary"
            :disabled="true"
          />
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">NavButton</h2>

      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2">Examples</h3>
        <div class="flex flex-wrap gap-2">
          <AtomsNavButton
            label="All Games"
            icon="material-symbols:globe-asia"
            href="https://trap.jp"
          />
          <AtomsNavButton
            label="Your Games"
            :active="true"
            icon="material-symbols:person"
          />
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">HeaderLink</h2>

      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2">Examples</h3>
        <div class="flex flex-wrap gap-2">
          <AtomsHeaderLink
            label="Games"
            href="https://trap.jp"
            active
          />
          <AtomsHeaderLink
            label="Editions"
            href="https://trap.jp"
          />
        </div>
      </div>
    </section>

  </div>
</template>
