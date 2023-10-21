<template>
    <NuxtLayout>
        <div class="boxed-content-wrapper section-padding">
            <h2 class="page-title mb-2 text-center">About</h2>
            <p class="text-center">
                Welcome to cooking recipes! We are passionate about sharing our love for food and cooking with you. Whether you're a beginner or an experienced home cook, our goal is to inspire and empower you to create delicious meals in your own kitchen.
            </p>
        </div>
        <div class="full-content-wrapper section-padding-top">
            <div class="reverse-wrapper bg-purple-50">                
                <div class="image-section">
                    <div class="h-full">
                        <img class="image-figure" src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1492&q=80" alt="Photo by S O C I A L . C U T on Unsplash">
                    </div>
                </div>
                <div class="text-section">
                    <div class="h-full">
                        <h2 class="page-title mb-2">Learn With Ease</h2>
                        <p>
                            Our team of experienced chefs and food enthusiasts has curated a collection of recipes, cooking tips, and step-by-step tutorials to help you master a wide range of culinary techniques. From basic knife skills to advanced pastry techniques, we've got you covered. We believe that cooking should be fun and approachable. That's why our tutorials are designed to be easy to follow, with clear instructions and helpful visuals. We also provide substitution suggestions and variations to accommodate different dietary preferences and restrictions. Explore our recipe library, watch our video tutorials, and join our vibrant cooking community. Whether you're looking to impress your friends with a gourmet dinner or simply want to enjoy a cozy meal at home, we're here to support you on your culinary journey. Happy cooking!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="full-content-wrapper last-section-padding">
            <div class="wrapper">
                <div class="image-section">
                    <div class="h-full">
                        <img class="image-figure" src="https://img.youtube.com/vi/dxjYvC9c_CQ/maxresdefault.jpg" alt="Otak-otak Bakar Recipe's Picture">
                    </div>
                </div>
                <div class="text-section">
                    <div class="h-full">
                        <h2 class="page-title mb-2">Disclaimer</h2>
                        <p>
                            The recipes, images, videos, and other content featured on this website have been sourced from <span><NuxtLink to="https://www.youtube.com/@devinahermawan">Devina Hermawan's Youtube Channel</NuxtLink></span> for the purpose of learning frontend web development using <span><NuxtLink to="https://nuxt.com/">Nuxt</NuxtLink></span> and <span><NuxtLink to="https://tailwindcss.com/">Tailwind CSS</NuxtLink></span>. All credit for the original content goes to <span><NuxtLink to="https://devinahermawan.com/">Devina Hermawan</NuxtLink></span>. This website is solely intended for educational purposes and does not claim ownership of any of the aforementioned content.
                            If you have any concerns or would like to learn more about the content, please visit <span><NuxtLink to="https://www.youtube.com/@devinahermawan">Devina Hermawan's YouTube channel</NuxtLink></span>.
                            Thank you for visiting!
                        </p>
                    </div>
                </div>
            </div>            
        </div>
    </NuxtLayout>
</template>

<style scoped>
.page-title{
    @apply text-[24px] lg:text-[28px] font-medium leading-7 lg:leading-8 mb-3;
}

.reverse-wrapper{
    @apply flex flex-col xl:flex-row-reverse justify-start items-stretch;
}

.wrapper{
    @apply flex flex-col xl:flex-row justify-start items-stretch;
}

.image-section{
    @apply w-full xl:w-1/2 h-auto;
}

.image-figure{
    @apply w-full h-full object-cover;
}

.text-section{
    @apply w-full xl:w-1/2 h-auto px-4 xl:px-8 py-5;
}

.text-section p span{
    @apply underline;
}
</style>

<script setup>
    useHead({
        title: 'About - Cooking Recipes',
    });
</script>