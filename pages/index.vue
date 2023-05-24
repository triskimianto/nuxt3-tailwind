<template>
    <NuxtLayout :name="content">
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
    </NuxtLayout>
</template>

<script setup>
    // head title
    useHead({
        title: 'Cooking Recipes',
    });

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