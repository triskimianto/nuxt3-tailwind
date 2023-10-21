<template>
  <header class="navbar">
    <div class="navbar-wrapper">
      <NuxtLink to="/" class="nav-brand"> Cooking Recipes </NuxtLink>
      <div class="nav-menu-list">
        <HeaderMenu />
      </div>
      <div @click="toggleMenu" id="mobile-menu-toggler" class="nav-mobile-menu-toggler">
        <div class="nav-toggler-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
    <div v-if="isMenuOpen" id="mobile-menu" class="navbar-mobile-menu">
        <div class="navbar-mobile-menu-wrapper">
            <div class="nav-mobile-menu-list">
                <HeaderMenu />
            </div>
        </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  @apply bg-white w-full sticky top-0 z-50;
}

.navbar-wrapper {
  @apply w-full flex justify-between items-center p-4 border-b border-gray-300;
}

.nav-brand {
  @apply text-violet-700 hover:text-pink-500 text-xl lg:text-2xl font-bold;
}

.nav-menu-list {
  @apply hidden lg:flex justify-start items-center gap-2;
}

.nav-mobile-menu-toggler {
  @apply flex lg:hidden p-1.5 rounded border-2 border-violet-700 border-opacity-50 hover:border-opacity-100;
}

.nav-toggler-icon{
    @apply text-violet-700;
}

.navbar-mobile-menu{
    @apply absolute z-10 bg-black bg-opacity-50 w-full h-screen;
}

.navbar-mobile-menu-wrapper{
    @apply bg-white w-full p-4;
}

.nav-mobile-menu-list{
    @apply w-full flex flex-col justify-start items-start gap-3
}
</style>

<script setup>
    import {ref} from 'vue';

    const isMenuOpen = ref(false);
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    }
</script>