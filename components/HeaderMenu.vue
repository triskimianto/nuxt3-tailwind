<template>
  <NuxtLink to="/recipes" class="nav-menu-item"> Recipes </NuxtLink>
  <NuxtLink to="/about" class="nav-menu-item"> About </NuxtLink>
</template>

<style scoped>
.nav-menu-item {
  @apply text-violet-700 hover:text-pink-500 text-[16px] lg:text-[text-20px] font-bold leading-5 lg:leading-6 py-0 lg:py-2 px-0 lg:px-3 border-b-2 border-transparent lg:hover:border-pink-500;
}
</style>