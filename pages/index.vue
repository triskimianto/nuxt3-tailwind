<template>
    <NuxtLayout>
        <div class="boxed-content-wrapper section-padding last-section-padding">
            <div id="featured-section">
                <h2 class="featured-title">Recipes Of The Day - <span>Indonesian Cuisine</span></h2>
                <div id="featured-menu" class="featured-menu">
                    <MenuCard v-for="menu in featuredMenus" :key="menu.id" :to="`recipe/${menu.slug}`" :title="menu.title" :imageSrc="menu.imageSrc" />
                </div>
            </div>
        </div>
        <div class="boxed-content-wrapper section-padding last-section-padding">
            <h2 class="section-title">Chicken Recipes <span>Around The World</span></h2>
            <div class="recipes-menu">
                <MenuCard v-for="menu in chickenMenus" :key="menu.slug" :to="`/recipe/${menu.slug}`" :title="menu.title" :imageSrc="menu.imageSrc" />
            </div>
        </div>
    </NuxtLayout>
    <!-- <NuxtLayout :name="content">
        <div class="flex flex-col py-4 lg:px-4 justify-between">
            <NuxtLink to="/tugas-9" class="max-w-sm w-full rounded-lg bg-white my-2 lg:max-w-full lg:flex hover:shadow-lg hover:text-violet-700">                
                <div class="px-6 py-4">
                    <h1 class="text-2xl hover:text-violet-700">
                        Tugas 9 - 
                        <span class="font-bold text-2xl hover:text-violet-700">Loop dan Menampilkan JSON</span>        
                    </h1>
                </div>
            </NuxtLink>
            <NuxtLink to="/tugas-10" class="max-w-sm w-full rounded-lg bg-white my-2 lg:max-w-full lg:flex hover:shadow-lg hover:text-violet-700">                
                <div class="px-6 py-4">
                    <h1 class="text-2xl hover:text-violet-700">
                        Tugas 10 - 
                        <span class="font-bold text-2xl hover:text-violet-700">Fungsi (Function)</span>        
                    </h1>
                </div>
            </NuxtLink>
        </div>
        <div class="flex px-4 py-2">
            <h1 class="text-2xl text-black font-bold">
                Recipes Of The Day 
                <span class="text-xl text-violet-500">Indonesian Cuisine</span>
            </h1>
        </div>
        <div class="flex flex-col py-4 md:flex-row justify-between">
            <card link="/recipes/sambaltempe" :url="url1" :alt="alt1" :title="title1" :menuTag="menuTag1"></card>
            <card link="/recipes/rawon" :url="url2" :alt="alt2" :title="title2" :menuTag="menuTag2"></card>
            <card link="/recipes/ayambetutu" :url="url3" :alt="alt3" :title="title3" :menuTag="menuTag3"></card>        
        </div>
    </NuxtLayout> -->
</template>

<script setup>

    // head meta
    useHead({
        title: 'Cooking Recipes',
    });

    // route
    const route = useRoute();
    console.log(route.params);

    // featured menu data
    // let menus = [ 
    //     {
    //         id: 0,
    //         imageSrc: '/images/img5.jpg',
    //         title: 'Resep SAMBAL TEMPE GOANG Khas Sunda',
    //         isFeatured: 'yes',
    //     },
    //     {    
    //         id: 1,
    //         imageSrc: '/images/img6.jpg',     
    //         title: 'Resep RAWON KHAS JAWA TIMUR',
    //         isFeatured: 'yes',
    //     },
    //     {
    //         id: 2,
    //         imageSrc: '/images/img7.jpg',
    //         title: 'Resep AYAM BETUTU KOMPLIT Khas Bali',
    //         isFeatured: 'yes',
    //     }
    // ];
    import menus from '~/assets/api/recipes.json'

    const featuredMenus = menus.filter((m) => m.isFeatured.toLowerCase() == 'yes');

    const chickenMenus = menus.filter((m) => {
        return m.categories.some((c) => c.toLowerCase() === 'chicken');
    });
</script>

<style scoped>
.featured-title{
    @apply text-[24px] lg:text-[28px] font-medium leading-7 lg:leading-8 mb-3;
}

.featured-title span{
    @apply text-violet-700;
}

.featured-menu{
    @apply grid grid-cols-1 xl:grid-cols-3 gap-3 h-auto;
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