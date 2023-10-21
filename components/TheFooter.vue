<template>
    <footer class="footer">
        <div class="footer-wrapper">
            <NuxtLink to="https://titoriskimianto.my.id/" class="footer-logo">
                <img src="/images/tr-640-640-black.png" alt="tr logo">
            </NuxtLink>
            <div class="footer-copy">
                <p>Created by <NuxtLink to="https://titoriskimianto.my.id/" class="underline">Tito Riskimianto</NuxtLink></p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer{
        @apply border-t border-gray-300 w-full;
    }

    .footer-wrapper{
        @apply flex flex-col md:flex-row justify-between items-center p-4 gap-3;
    }

    .footer-logo img{
        @apply w-6 h-6;
    }

    .footer-copy{
        @apply text-[#404040] text-[16px] lg:text-[text-20px] font-extralight leading-5 lg:leading-6;
    }
</style>