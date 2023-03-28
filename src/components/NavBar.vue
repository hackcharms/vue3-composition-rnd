<script lang="ts" setup>
import { useLocal } from '@/composable/local'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const languages = ['en', 'hi', 'fr']
const { getLang, setLang } = useLocal()
const openLang = ref(false)
const showSideBar = ref(false)
const legalLinks = [
  {
    label: 'Privacy policy',
    to: '/'
  },
  {
    label: 'Privacy policy2',
    to: '/'
  }
]
const mainLinks = [
  {
    label: 'Home Page',
    to: '/'
  },
  {
    label: 'About',
    to: '/about'
  }
]
</script>
<template>
  <!-- Navbar start -->
  <nav
    class="sticky top-0 z-40 flex w-full flex-row justify-end bg-gray-700 px-4 sm:justify-between"
  >
    <ul class="breadcrumb flex-row items-center py-4 text-lg text-white sm:flex">
      <li class="inline">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="inline" v-show="$route.name !== 'home'">
        <span>{{ $route.name }}</span>
      </li>
    </ul>
    <div>
      <button
        type="button"
        @click="openLang = !openLang"
        class="py-4 pr-3 relative inline-flex justify-between justify-items-center text-white hover:text-gray-400 mr-2"
      >
        <svg
          class="w-5 h-5"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .4C4.705.4.399 4.707.399 10c0 5.293 4.306 9.6 9.601 9.6 5.293 0 9.6-4.307 9.6-9.6 0-5.293-4.307-9.6-9.6-9.6zm8.188 9.6c0 1.873-.636 3.6-1.696 4.98-.3-.234-.619-.867-.319-1.523.303-.66.382-2.188.312-2.783-.066-.594-.375-2.025-1.214-2.039-.838-.012-1.413-.289-1.911-1.283-1.033-2.068 1.939-2.465.906-3.609-.289-.322-1.783 1.322-2.002-.869-.014-.157.135-.392.336-.636 3.244 1.09 5.588 4.157 5.588 7.762zM8.875 1.893c-.196.382-.713.537-1.027.824-.684.619-.978.533-1.346 1.127-.371.594-1.567 1.449-1.567 1.879s.604.936.906.838c.302-.1 1.099-.094 1.567.07.469.166 3.914.332 2.816 3.244-.348.926-1.873.77-2.279 2.303-.061.225-.272 1.186-.285 1.5-.025.486.344 2.318-.125 2.318-.471 0-1.738-1.639-1.738-1.936 0-.297-.328-1.338-.328-2.23 0-.891-1.518-.877-1.518-2.062 0-1.068.823-1.6.638-2.113-.181-.51-1.627-.527-2.23-.59a8.213 8.213 0 0 1 6.516-5.172zM7.424 17.77c.492-.26.542-.596.988-.613.51-.023.925-.199 1.5-.326.51-.111 1.423-.629 2.226-.695.678-.055 2.015.035 2.375.689a8.159 8.159 0 0 1-7.089.945z"
          ></path>
        </svg>
        <span class="capitalize self-center align-middle pl-1 pr-3"> {{ getLang }}</span>
        <svg
          :class="[openLang ? '-rotate-90' : 'rotate-90', `w-4 h-4`]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path d="M5 14l7-6.5L5 1" stroke="currentColor" stroke-linecap="square"></path>
        </svg>
        <div
          v-show="openLang"
          class="absolute rounded border border-red-400 bg-gray-100 w-32 top-12 right-0"
        >
          <ul>
            <li
              v-for="lang in languages"
              :key="lang"
              :class="[
                getLang === lang && 'bg-gray-300',
                'text-black text-left px-2 bg-gray-300 hover:bg-gray-400'
              ]"
              @click="setLang(lang)"
            >
              {{ lang }}
            </li>
          </ul>
        </div>
      </button>
      <button
        @click="showSideBar = !showSideBar"
        type="button"
        class="py-4 text-2xl text-white hover:text-gray-200"
      >
        <svg
          v-if="!showSideBar"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </nav>
  <!-- Navbar end -->

  <!-- Sidebar start-->
  <div class="z-40">
    <div class="relative">
      <nav
        v-show="showSideBar"
        class="absolute left-0 top-0 flex w-3/4 flex-col overflow-y-auto bg-gray-700 pt-6 pb-8 sm:max-w-xs lg:w-80"
      >
        <!--  navigation group -->
        <div class="px-4 pb-6" v-if="mainLinks.length">
          <h3 class="mb-2 text-xs font-medium uppercase text-gray-500">Main</h3>
          <ul class="mb-8 text-sm font-medium">
            <li v-for="{ to, label } in mainLinks" :key="label">
              <RouterLink
                class="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                :to="to"
              >
                <span class="select-none">{{ label }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- navigation group end-->

        <!-- legal start -->
        <div class="px-4 pb-6" v-if="legalLinks.length || true">
          <h3 class="mb-2 text-xs font-medium uppercase text-gray-500">Legal</h3>
          <ul class="mb-8 text-sm font-medium">
            <li v-for="{ to, label } in legalLinks" :key="label">
              <RouterLink
                class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                :to="to"
              >
                <span class="select-none">{{ label }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="mx-auto lg:ml-80"></div>
  </div>
</template>
<style scoped>
ul.breadcrumb li + li::before {
  content: '\276F';
  padding-left: 8px;
  padding-right: 4px;
  color: inherit;
}

ul.breadcrumb li span {
  opacity: 60%;
}

/* #sidebar {
  -webkit-transition: all 300ms cubic-bezier(0, 0.77, 0.58, 1);
  transition: all 300ms cubic-bezier(0, 0.77, 0.58, 1);
}

#sidebar.show {
  transform: translateX(0);
}

#sidebar ul li a.active {
  background: #1f2937;
  background-color: #1f2937;
} */
</style>
