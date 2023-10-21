<template>
    <div class="container">
        <TheHeader />
        <slot />
        <TheFooter />
    </div>
</template>

<style scoped>
  .container{
    @apply max-w-full;
  }
</style>