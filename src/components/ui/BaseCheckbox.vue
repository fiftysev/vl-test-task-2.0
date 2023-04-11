<script setup lang="ts">
import { computed } from 'vue';
import { useAttrs } from 'vue';

type CheckboxProps = {
  label?: string;
  modelValue?: unknown;
};

const props = defineProps<CheckboxProps>();
const attrs = useAttrs();

const emit = defineEmits<{
  (e: 'update:modelValue', payload: unknown): void;
}>();

const isChecked = computed(() => {
  if (props.modelValue instanceof Array) {
    return props.modelValue.includes(attrs.value);
  }
  return props.modelValue === attrs.trueValue;
});

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (props.modelValue instanceof Array) {
    let newValue = [...props.modelValue];
    if (target.checked) {
      newValue.push(attrs.value);
    } else {
      newValue.splice(newValue.indexOf(attrs.value), 1);
    }
    emit('update:modelValue', newValue);
  } else {
    emit('update:modelValue', target.checked ? attrs.trueValue : attrs.falseValue);
  }
};
</script>

<template>
  <div class="input-container">
    <input
      type="checkbox"
      name="checkbox"
      class="checkbox"
      v-bind="$attrs"
      @input="handleInput"
      :checked="isChecked"
    />
    <label v-if="label" for="checkbox"> {{ label }} </label>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .checkbox {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: $primaryColor;
  }
}
</style>
