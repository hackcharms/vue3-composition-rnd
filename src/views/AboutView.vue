<template>
  <div>
    <h1>This is an about page</h1>
  </div>
  <!-- <div v-hello="{ name: 'Zubair Ahmad', age: '12' }" class="text-red-500"></div> -->
  <div v-bold.hello="`Hello there`" class="p-12 border border-red-300">this is my div</div>
  <div v-blur.hello="changeBlured" class="p-12 border border-red-300 mt-3">this is my div</div>
  {{ $translate('greetings.hello') }}
  {{ $translate('greeting.hello') }}
  <p>cuusrent lang==>{{ getLang }}</p>
  <button @click="setLang('mr')">change language</button>
  {{ getLang }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useLocal } from '@/composable/local'
const { getLang, setLang } = useLocal()
const changeBlured = ref(true)
const event = () => {
  window.alert('clicked')
}
</script>
