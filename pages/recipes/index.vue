<template>
    <NuxtLayout :name="content">
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
    </NuxtLayout>
</template>

<script setup>
    // route
    const route = useRoute();
    console.log(route.params);

    // layout
    const content='content';

    // data
    const url1 = '/images/img1.jpg';
    const alt1= 'Photo by amirali mirhashemian on Unsplash';
    const title1 = 'Burger recipe';
    const menuTag1 = 'burger';
    const url2 = '/images/img2.jpg';
    const alt2= 'Photo by Bawah Reserve on Unsplash';
    const title2 = 'Rendang recipe';    
    const menuTag2 = 'rendang';
    const url3 = '/images/img3.jpg';
    const alt3= 'Photo by Mahmoud Fawzy on Unsplash';
    const title3 = 'Sushi roll recipe';
    const menuTag3 = 'sushi';
    const url4 = '/images/img4.jpg';
    const alt4= 'Cheese Burger';
    const title4 = 'Resep Cheese Burger Ala IN-N-OUT California Amerika';
    const menuTag4 = 'burger';
    const url5 = '/images/img5.jpg';
    const alt5 = 'Sambal Tempe';
    const title5 = 'Resep SAMBAL TEMPE GOANG Khas Sunda';
    const menuTag5 = 'tempe';
    const url6 = '/images/img6.jpg';
    const alt6 = 'Rawon';
    const title6 = 'Resep RAWON KHAS JAWA TIMUR';    
    const menuTag6 = 'rawon';
    const url7 = '/images/img7.jpg';
    const alt7 = 'Ayam Betutu';
    const title7 = 'Resep AYAM BETUTU KOMPLIT Khas Bali';
    const menuTag7 = 'ayam';
</script>