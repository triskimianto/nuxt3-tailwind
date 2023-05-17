<template>
    <NuxtLayout :name="content">
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
    </NuxtLayout>
</template>

<script setup>
    // route
    const route = useRoute();
    console.log(route.params);

    // layout
    const content='content';

    //data
    const url1 = '/images/img5.jpg';
    const alt1= 'Sambal Tempe';
    const title1 = 'Resep SAMBAL TEMPE GOANG Khas Sunda';
    const menuTag1 = 'tempe';
    const url2 = '/images/img6.jpg';
    const alt2= 'Rawon';
    const title2 = 'Resep RAWON KHAS JAWA TIMUR';    
    const menuTag2 = 'rawon';
    const url3 = '/images/img7.jpg';
    const alt3= 'Ayam Betutu';
    const title3 = 'Resep AYAM BETUTU KOMPLIT Khas Bali';
    const menuTag3 = 'ayam';
</script>