<template>
    <NuxtLink :to="permalink" class="group card">
        <div class="card-header">
            <img class="card-figure" :src="imageSrc" :alt="title+'\'s picture'">
        </div>
        <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
        </div>
    </NuxtLink>
</template>

<style scoped>
    .card{
        @apply w-full h-auto;
    }

    .card-header{
        @apply w-full h-auto rounded overflow-hidden;
    }

    .card-figure{
        @apply w-full h-[200px] object-cover transition ease-in-out duration-500;
    }

    .group:hover .card-figure{        
        @apply scale-110;
    }

    .card-body{
        @apply mt-2;
    }

    .card-title{
        @apply text-[16px] lg:text-[20px] font-medium leading-4 lg:leading-5 line-clamp-2;
    }

    .group:hover .card-title{
        @apply text-pink-500;
    }
</style>

<script setup>
    const props = defineProps({
        permalink: String,
        title: String,
        imageSrc: String,
    })
</script>