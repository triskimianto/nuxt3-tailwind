<template>
    <NuxtLayout :name="content">
        <div class="bg-white rounded-lg p-8">
            <div class="flex items-center justify-center h-16">
                <span class="text-2xl font-bold text-center">Ekonomis Tetap Spesial! Resep SAMBAL TEMPE GOANG Khas Sunda</span>
            </div>
            <div class="flex flex-col py-8 md:flex-row justify-between">
                <div class="w-full md:w-1/2 mb-8 md:mb-0">
                    <h3 class="text-xl font-bold mb-2">Bahan:</h3>
                    <ul class="list-disc pl-6">
                        <li>200 gr tempe</li>
                        <li>2 siung bawang putih</li>
                        <li>25 gr cabai rawit merah</li>
                        <li>45 gr cabai rawit hijau</li>
                        <li>1,5 sdt gula pasir</li>
                        <li>1 sdt kaldu jamur / penyedap</li>
                        <li>1 sdt garam</li>
                        <li>3-4 sdm minyak panas</li>                        
                    </ul>
                    <h3 class="text-xl font-bold mb-2 mt-4">Pelengkap:</h3>
                    <ul class="list-disc pl-6">
                        <li>Nasi</li>
                        <li>Kerupuk</li>                        
                    </ul>                
                </div>
                <div class="w-full md:w-1/2">
                    <h3 class="text-xl font-bold mb-2">Langkah Memasak:</h3>
                    <ol class="list-decimal pl-6">
                        <li class="mb-2">Potong tempe lalu goreng hingga kecokelatan, tiriskan</li>
                        <li class="mb-2">Di dalam ulekan masukkan bawang putih, garam, kaldu jamur, dan gula kemudian haluskan</li>
                        <li class="mb-2">Masukkan cabai rawit hijau dan cabai rawit merah, haluskan</li>
                        <li class="mb-2">Panaskan minyak, tuang minyak panas ke dalam sambal, aduk rata</li>
                        <li class="mb-2">Masukkan tempe lalu hancurkan, aduk rata</li>
                        <li class="mb-2">Sambal tempe goang siap disajikan</li>                        
                    </ol>
                </div>
            </div>
            <div class="flex items-center justify-center">
                    <iframe class="w-full rounded-lg h-96" src="https://www.youtube.com/embed/tpOwpZYZ9lE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const content = 'content';
</script>