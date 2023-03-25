<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

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
