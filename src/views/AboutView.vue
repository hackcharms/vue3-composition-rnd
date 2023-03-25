<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div v-hello="{ name: 'Zubair Ahmad', age: '12' }" class="text-red-500"></div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    /* min-height: 100vh; */
    display: flex;
    align-items: center;
  }
}
</style>
