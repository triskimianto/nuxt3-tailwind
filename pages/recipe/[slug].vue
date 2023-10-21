<template>
    <NuxtLayout>
        <div class="full-content-wrapper">
            <HeadingBanner :title="selectedSlug.title" :imageSrc="selectedSlug.imageSrc" />
        </div>
        <div class="boxed-content-wrapper">
            <div class="first-section">
                <div class="video-content section-padding">
                    <div class="h-full">
                        <YoutubeFrame :ytSrc="ytSrc" id="ytFrame"/>
                    </div>
                </div>
                <div class="ingredients-content section-padding">
                    <div class="h-full">
                        <div class="ingredients-section" v-for="i in ingredients" :key="i.title">
                            <h2 class="subtitle">{{ i.title }}</h2>
                            <ul class="ingredient-list" v-html="i.content"></ul>                                
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        <div class="boxed-content-wrapper section-padding last-section-padding">
            <h2 class="subtitle">{{ steps.title }}</h2>
            <ol class="step-list" v-html="steps.content"></ol> 
        </div>
    </NuxtLayout>
</template>

<style scoped>
.first-section{
    @apply h-full flex flex-col md:flex-row-reverse items-stretch;
}

.video-content{
    @apply flex-1 w-full md:w-[60%];
}

.ingredients-content{
    @apply flex-1 w-full md:w-[40%];
}

.ingredients-section{
    @apply mb-4;
}

.ingredients-section:last-child{
    @apply mb-0;
}

.subtitle{
    @apply text-[20px] lg:text-[24px] font-medium leading-6 lg:leading-7 mb-2;
}

.subtitle::after{
    content: ': ';
}

.ingredient-list {
    @apply list-disc list-inside;
}

.step-list{
    @apply list-inside list-decimal;
}

</style>

<script setup>
    import menus from '~/assets/api/recipes.json';

    const route = useRoute();
    console.log(route);

    const selectedSlug = menus.filter((m) => m.slug === route.params.slug)[0];

    // get ingredients
    const ingredients = ref(selectedSlug.ingredients);

    // get steps
    const steps = ref(selectedSlug.steps[0]);

    //get embed youtube url
    const extractVideoId = (url) => {
    const match = url.match(/(?:\/|v=)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
    };

    const ytSrcId = extractVideoId(selectedSlug.videoSrc);
    const ytSrc = `https://www.youtube.com/embed/${ytSrcId}`;
    console.log(ytSrc);

    // sticky video
    const ytFrame = ref(null);

    const onScroll = () => {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            ytFrame.value.classList.add('sticky', 'top-[120px]');        
        }else{
            ytFrame.value.classList.remove('sticky', 'top-[120px]');
            ytFrame.classList.add('top-0');            
        }
    }

    onMounted(() => {
        ytFrame.value = document.querySelector('#ytFrame');
        window.addEventListener('scroll', onScroll);
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', onScroll);
    })

    //page meta
    useHead({
        title: selectedSlug.title + ' - Cooking Recipes',
    })
</script>
