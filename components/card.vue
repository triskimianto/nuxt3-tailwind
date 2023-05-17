<template>
    <NuxtLink :to="link" class="max-w-sm rounded-lg bg-white my-4 md:mx-4 hover:shadow-lg hover:text-violet-700">
        <img class="w-full rounded-tl-lg rounded-tr-lg" :src="url" :alt="alt">
        <div class="px-6 py-4">
            <span class="font-bold text-xl mb-2">{{ title }}</span>        
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gradient-to-r from-violet-200 to-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ menuTag }}</span>
            <span class="inline-block bg-gradient-to-r from-violet-200 to-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#recipe</span>            
        </div>
    </NuxtLink>
</template>

<script setup>
 const props = defineProps({
    link: String,
    url: String,
    alt: String,
    title: String,
    menuTag: String,
 })
</script>