<template>
    <nav class="bg-gradient-to-r from-violet-400 to-pink-400 py-4">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <span class="text-2xl text-white font-bold">Cooking Recipes</span>
                    </div>                
                </div>
                <div class="hidden md:flex items-center">
                    <div class="flex space-x-4">
                        <NuxtLink href="/" class="text-2xl text-gray-100 hover:text-white">Home</NuxtLink>
                        <NuxtLink href="/recipes" class="text-2xl text-gray-100 hover:text-white">Recipes</NuxtLink>
                        <NuxtLink href="/about" class="text-2xl text-gray-100 hover:text-white">About</NuxtLink>
                    </div>
                </div>
                <div class="flex md:hidden">
                    <button class="text-gray-100 hover:text-white focus:outline-none">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>