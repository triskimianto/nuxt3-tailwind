<template>
    <NuxtLayout :name="content">
        <div class="bg-white rounded-lg p-8">
            <div class="flex items-center justify-center h-16">
                <span class="text-2xl font-bold text-center">Spesial! Resep RAWON KHAS JAWA TIMUR [Menu IdulAdha]</span>
            </div>
            <div class="flex flex-col py-8 md:flex-row justify-between">
                <div class="w-full md:w-1/2 mb-8 md:mb-0">
                    <h3 class="text-xl font-bold mb-2">Bahan:</h3>
                    <ul class="list-disc pl-6">
                        <li>500 gr daging sapi sengkel</li>
                        <li>2 batang serai, geprek, potong</li>
                        <li>2 lembar daun salam</li>
                        <li>5 lembar daun jeruk</li>
                        <li>1 buah tomat merah</li>
                        <li>1,5 liter air</li>
                        <li>¾ sdm garam</li>
                        <li>2 sdt kaldu bubuk / penyedap</li>
                        <li>1,5 sdm gula pasir</li>
                        <li>½ sdt merica</li>
                        <li>1 batang daun bawang, potong</li>
                    </ul>
                    <h3 class="text-xl font-bold mb-2 mt-4">Bahan Bumbu Halus:</h3>
                    <ul class="list-disc pl-6">
                        <li>6 siung bawang putih</li>
                        <li>10 siung bawang merah</li>
                        <li>5 buah keluak</li>
                        <li>4 butir kemiri sangrai</li>
                        <li>3 cm kunyit</li>
                        <li>50 ml minyak goreng</li>
                        <li>50 ml air</li>                                 
                    </ul>
                    <h3 class="text-xl font-bold mb-2 mt-4">Bahan Sambal:</h3>
                    <ul class="list-disc pl-6">
                        <li>20 buah cabai rawit merah</li>
                        <li>3 siung bawang putih</li>
                        <li>50 ml air</li>
                        <li>¼ sdt garam</li>
                        <li>½ sdt gula pasir</li>
                        <li>¼ sdt kaldu bubuk / penyedap</li>
                        <li>Minyak secukupnya</li>
                    </ul>
                    <h3 class="text-xl font-bold mb-2 mt-4">Pelengkap:</h3>
                    <ul class="list-disc pl-6">
                        <li>Telur asin</li>
                        <li>Bawang goreng</li>
                        <li>Jeruk nipis</li>
                        <li>Kecambah</li>
                    </ul>
                </div>
                <div class="w-full md:w-1/2">
                    <h3 class="text-xl font-bold mb-2">Langkah Memasak:</h3>
                    <ol class="list-decimal pl-6">
                        <li class="mb-2">Haluskan bawang putih, bawang merah, kemiri, keluak, kunyit, dan minyak kemudian masukkan air, blender kembali hingga halus</li>
                        <li class="mb-2">Tumis bumbu halus di api sedang kecil hingga keluar minyak lalu masukkan serai, daun jeruk dan daun salam, tumis hingga wangi</li>
                        <li class="mb-2">Masukkan air, masak hingga mendidih lalu pindahkan ke dalam presto</li>
                        <li class="mb-2">Masukkan daging, tomat merah, daun bawang, garam, kaldu bubuk, merica, dan gula pasir, presto selama 60 menit</li>
                        <li class="mb-2">Untuk sambal, masukkan cabai rawit merah dan bawang putih ke dalam food processor, haluskan</li>
                        <li class="mb-2">Panaskan sedikit minyak, tumis cabai rawit sesaat lalu masukkan air, garam, gula pasir, dan kaldu bubuk, masak hingga menyusut, sisihkan</li>
                        <li class="mb-2">Susun rawon di dalam mangkuk, tambahkan telur asin, kecambah, jeruk nipis, sambal, dan bawang goreng</li>
                        <li class="mb-2">Rawon siap disajikan</li>
                    </ol>
                </div>
            </div>
            <div class="flex items-center justify-center">
                    <iframe class="w-full rounded-lg h-96" src="https://www.youtube.com/embed/XYev1tljzUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const content = 'content';
</script>