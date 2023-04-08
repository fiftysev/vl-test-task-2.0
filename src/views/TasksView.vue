<script setup lang="ts">
import { BaseCheckbox, BaseButton, BaseInputGroup, BaseRadioButton } from '@/components/ui';
</script>

<template>
  <main>
    <base-input-group heading="Сортировка">
      <base-button variant="primary">Добавить задачу</base-button>
      <base-checkbox label="Checkbox" checked="true" />
      <base-radio-button label="Radio" />
    </base-input-group>
  </main>
</template>

<style lang="scss"></style>
