<template>
    <NuxtLayout>
        <div class="full-content-wrapper">
            <HeadingBanner :title="bannerTitle" :imageSrc="bannerSrc" />
        </div>
        <div class="boxed-content-wrapper section-padding last-section-padding">
            <h2 class="section-title"><span>Indonesian</span> Cuisine</h2>
            <div class="recipes-menu">
                <MenuCard v-for="menu in indonesianMenus" :key="menu.slug" :to="`/recipe/${menu.slug}`" :title="menu.title" :imageSrc="menu.imageSrc" />
            </div>
        </div>
        <div class="boxed-content-wrapper section-padding last-section-padding">
            <h2 class="section-title"><span>Chinese</span> Cuisine</h2>
            <div class="recipes-menu">
                <MenuCard v-for="menu in chineseMenus" :key="menu.slug" :to="`/recipe/${menu.slug}`" :title="menu.title" :imageSrc="menu.imageSrc" />
            </div>
        </div>
        <div class="boxed-content-wrapper section-padding last-section-padding">
            <h2 class="section-title"><span>Japanese & Korean</span> Cuisine</h2>
            <div class="recipes-menu">
                <MenuCard v-for="menu in japanesekoreanMenus" :key="menu.slug" :to="`/recipe/${menu.slug}`" :title="menu.title" :imageSrc="menu.imageSrc" />
            </div>
        </div>
        <div class="boxed-content-wrapper section-padding">
            <h2 class="section-title"><span>Western & European</span> Cuisine</h2>
            <div class="recipes-menu">
                <MenuCard v-for="menu in westerneuropeanMenus" :key="menu.slug" :to="`/recipe/${menu.slug}`" :title="menu.title" :imageSrc="menu.imageSrc" />
            </div>
        </div>
        <div class="boxed-content-wrapper section-padding">
            <h2 class="section-title"><span>Middle-Eastern</span> Cuisine</h2>
            <div class="recipes-menu">
                <MenuCard v-for="menu in middleeastMenus" :key="menu.slug" :to="`/recipe/${menu.slug}`" :title="menu.title" :imageSrc="menu.imageSrc" />
            </div>
        </div>
        <div class="boxed-content-wrapper section-padding last-section-padding">
            <h2 class="section-title"><span>Indian & Other Asian</span> Cuisine</h2>
            <div class="recipes-menu">
                <MenuCard v-for="menu in otherasianMenus" :key="menu.slug" :to="`/recipe/${menu.slug}`" :title="menu.title" :imageSrc="menu.imageSrc" />
            </div>
        </div>
    </NuxtLayout>
    <!-- <NuxtLayout :name="content">
        <div class="flex py-2">
            <span class="text-2xl text-black font-bold">Recipes</span>
        </div>
        <div class="flex flex-col py-4 md:flex-row justify-between">
            <card link="/recipes/burger" :url="url4" :alt="alt4" :title="title4" :menuTag="menuTag4"></card>
            <card :url="url1" :alt="alt1" :title="title1" :menuTag="menuTag1"></card>        
            <card :url="url3" :alt="alt3" :title="title3" :menuTag="menuTag3"></card>        
        </div>
        <div class="flex flex-col py-4 md:flex-row justify-between">
            <card :url="url2" :alt="alt2" :title="title2" :menuTag="menuTag2"></card>
            <card link="/recipes/sambaltempe" :url="url5" :alt="alt5" :title="title5" :menuTag="menuTag5"></card>     
        </div>
        <div class="flex flex-col py-4 md:flex-row justify-between">            
            <card link="/recipes/rawon" :url="url6" :alt="alt6" :title="title6" :menuTag="menuTag6"></card>
            <card link="/recipes/ayambetutu" :url="url7" :alt="alt7" :title="title7" :menuTag="menuTag7"></card>      
        </div>
    </NuxtLayout> -->
</template>

<style scoped>
.page-title{
    @apply text-[24px] lg:text-[28px] font-medium leading-7 lg:leading-8 mb-3;
}

.section-title{
    @apply text-[20px] lg:text-[24px] font-medium leading-6 lg:leading-7 mb-3;
}

.section-title span{
    @apply text-violet-700;
}

.recipes-menu{
    @apply grid grid-cols-1 xl:grid-cols-4 gap-3 h-auto;
}
</style>

<script setup>
    // head meta
    useHead({
        title: 'Recipes - Cooking Recipes',
    });

    // route
    const route = useRoute();
    console.log(route.params);

    import menus from '~/assets/api/recipes.json';

    const bannerTitle = "Recipes";
    const bannerSrc = "https://img.youtube.com/vi/dxjYvC9c_CQ/maxresdefault.jpg";

    const indonesianMenus = menus.filter((m) => {
        return m.categories.some((c) => c.toLowerCase() === 'indonesian cuisine');
    });

    const westerneuropeanMenus = menus.filter((m) => {
        return m.categories.some((c) => c.toLowerCase() === 'western & european cuisine');
    });

    const japanesekoreanMenus = menus.filter((m) => {
        return m.categories.some((c) => c.toLowerCase() === 'japanese & korean cuisine');
    });

    const chineseMenus = menus.filter((m) => {
        return m.categories.some((c) => c.toLowerCase() === 'chinese cuisine');
    });

    const middleeastMenus = menus.filter((m) => {
        return m.categories.some((c) => c.toLowerCase() === 'middle-eastern cuisine');
    });

    const otherasianMenus = menus.filter((m) => {
        return m.categories.some((c) => c.toLowerCase() === 'indian & other asian cuisine');
    })
</script>