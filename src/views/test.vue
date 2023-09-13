<template>
    <div>
        <InputWrapper v-model="msg" rules="min:2|in_array:hey,hi,bye" />
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import InputWrapper from '@/components/InputWrapper.vue';
const msg = ref('Hello World!');
</script>
  