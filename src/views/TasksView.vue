<script setup lang="ts">
import {
  BaseCheckbox,
  BaseInputGroup,
  BaseRadioButton,
  BaseCard
} from '@/components/ui';
</script>

<template>
  <main class="layout">
    <aside class="menu">
      <base-card>
        <base-input-group heading="Сортировка">
          <base-radio-button label="Сначала новые" />
          <base-radio-button label="Сначала старые" />
        </base-input-group>
      </base-card>
      <base-card>
        <base-input-group heading="Приоритет">
          <base-checkbox label="Low"/>
          <base-checkbox label="Normal"/>
          <base-checkbox label="High"/>
        </base-input-group>
        <base-input-group heading="Отметка">
          <base-checkbox label="Research"/>
          <base-checkbox label="Design"/>
          <base-checkbox label="Development"/>
        </base-input-group>
      </base-card>
    </aside>
  </main>
</template>

<style lang="scss">
.layout {
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(200px, 18%) 1fr;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }

  .menu {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
