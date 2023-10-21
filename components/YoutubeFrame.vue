<template>
    <div class="video-wrapper">
        <iframe :src="ytSrc" frameborder="0" class="video-content"></iframe>
    </div>
</template>

<style scoped>
.video-wrapper{
    @apply w-full h-auto;
}

.video-content{
    @apply w-full h-auto aspect-video; 
}
</style>

<script setup>
const props = defineProps({
    ytSrc: String
});
</script>