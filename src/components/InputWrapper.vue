<template>
  <div>
    <v-text-field
      v-model="msg"
      :rules="computedRules"
      @update:model-value="($event) => emit('update:modelValue', $event)"
    />
  </div>
</template>

<script lang="ts" setup>
import { decodeString } from '@/utils/rules';
import { computed, ref } from 'vue';
const props = defineProps<{
  rules: any | any[];
  modelValue: string;
}>();
const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();
const msg = ref();
const computedRules = computed(() => {
  if (!props.rules) return [];
  const value = decodeString(props.rules);
  return value;
});
</script>
