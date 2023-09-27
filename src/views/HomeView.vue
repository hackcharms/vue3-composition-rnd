<script setup lang="ts">
import type { Post } from '@/types'
// import PublishedPost from '@/components/PublishedPost.vue'
// import PublishedPostType from '@/components/PublishedPostType.vue';
import TheModal from '@/components/TheModal.vue'
// import TestComponent from '@/components/TestComponent.vue'
import { ref } from 'vue'
import TheWelcome from '@/components/TheWelcome.vue'

const text = ref('')

const logEvent = (event: Event) => {
  console.log(event)
}
const posts: Post[] = [
  {
    title: 'This is Title of plant',
    image: 'https://i.imgur.com/5dmBrx6.jpg',
    body: "Well, aren't you going up to the lake tonight, you've been planning it for two weeks.",
    user: {
      id: 2,
      name: 'Hackcharms',
      is_verified: true,
      labels: []
    }
  }
]
const modal = ref(false)
</script>

<template>
  <main>
    <div>
      hello Home Page
      <v-alert type="success" title="Alert title"> Hlleo this is dialog </v-alert>
      <the-modal v-model="modal" v-slot="{ action, cancel }">
        <button
          @click="cancel"
          class="focus:outline-none px-4 bg-xgreen-500 p-3 ml-3 rounded-lg text-white hover:bg-green-400"
        >
          closed
        </button>
        <button
          @click="action"
          class="focus:outline-none px-4 bg-green-500 p-3 ml-3 rounded-lg text-white hover:bg-green-400"
        >
          Action
        </button>
      </the-modal>
    </div>
    <v-text-field v-model="text" v-translate.hola="text" class="border" />
    <input v-model="text" v-translate.hola="text" class="border" />
    {{ text }}
  </main>
</template>
