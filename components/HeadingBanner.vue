<template>
    <div class="heading-banner">
        <img class="heading-figure" :src="imageSrc" :alt="title+'\'s picture'">
        <div class="heading-overlay"></div>
        <div class="heading-content">
            <div class="heading-content-wrapper">
                <h2 class="heading-title">{{ title }}</h2>
            </div>            
        </div>
    </div>
</template>

<style scoped>
.heading-banner{
    @apply w-full h-auto relative;
}

.heading-figure{
    @apply w-full h-[120px] xl:h-[240px] object-cover;
}

.heading-overlay{
    @apply w-full h-full bg-black bg-opacity-40 absolute bottom-0;
}

.heading-content{
    @apply absolute z-10 bottom-0 left-0 w-full;
}

.heading-content-wrapper{
    @apply w-full xl:w-[1100px] mx-auto px-4 pb-5 xl:pb-10;
}

.heading-title{
    @apply text-white text-[24px] lg:text-[28px] font-medium leading-7 lg:leading-8 mb-3;
}
</style>

<script setup>
    const prop = defineProps({
        title: String,
        imageSrc: String
    })
</script>