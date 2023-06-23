<script lang="ts" setup>
const action = () => {
  window.alert('action performed')
}
const cancel = () => {
  window.alert('action canceled')
  emit('update:modelValue', false)
}
defineProps(['modelValue'])
const emit = defineEmits<{
  (event: 'update:modelValue', modelValue: boolean): void
  (event: 'opened'): void
  (event: 'closed'): void
}>()

const CloseModal = () => {
  emit('update:modelValue', false)
}
const OpenModal = () => {
  emit('update:modelValue', true)
}
</script>
<template>
  <div>
    <button @click="OpenModal">Click to Open it</button>
    <div
      v-show="modelValue"
      class="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style="background: rgba(0, 0, 0, 0.7)"
    >
      <div
        class="border border-teal-500 shadow-lg bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Header</p>
            <button class="cursor-pointer z-50" @click="CloseModal">
              <svg
                class="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                ></path>
              </svg>
            </button>
          </div>
          <!--Body-->
          <div class="my-5">
            <p>
              Inliberali Persius Multi iustitia pronuntiaret expeteretur sanos didicisset laus
              angusti ferrentur arbitrium arbitramur huic desiderent.?
            </p>
          </div>
          <!--Footer-->
          <slot :cancel="cancel" :action="action">
            <div class="flex justify-end pt-2">
              <button
                class="focus:outline-none px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                @click.prevent="cancel"
              >
                Cancel
              </button>
              <button
                class="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                @click.prevent="action"
              >
                Confirm
              </button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
