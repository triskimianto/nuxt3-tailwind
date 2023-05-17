<template>
    <NuxtLayout :name="content">
        <div class="bg-white rounded-lg p-8">
            <div class="mx-auto px-4">
                <h1 class="text-3xl font-bold mb-4">About Us</h1>
                <p class="text-gray-800 leading-relaxed">
                    Welcome to cooking recipes! We are passionate about sharing our love for food and cooking with you. Whether you're a beginner or an experienced home cook, our goal is to inspire and empower you to create delicious meals in your own kitchen.

                    Our team of experienced chefs and food enthusiasts has curated a collection of recipes, cooking tips, and step-by-step tutorials to help you master a wide range of culinary techniques. From basic knife skills to advanced pastry techniques, we've got you covered.

                    We believe that cooking should be fun and approachable. That's why our tutorials are designed to be easy to follow, with clear instructions and helpful visuals. We also provide substitution suggestions and variations to accommodate different dietary preferences and restrictions.

                    Explore our recipe library, watch our video tutorials, and join our vibrant cooking community. Whether you're looking to impress your friends with a gourmet dinner or simply want to enjoy a cozy meal at home, we're here to support you on your culinary journey.

                    Happy cooking!
                </p>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const content="content"
</script>