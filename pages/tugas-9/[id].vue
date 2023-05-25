<template>
    <NuxtLayout :name="content">
        
        <div class="flex px-2 py-4" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <NuxtLink to="/" class="inline-flex items-center text-sm font-medium text-violet-500 hover:text-violet-700">
                        <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <NuxtLink to="/tugas-9/" class="ml-1 text-sm font-medium text-violet-500 hover:text-violet-700 md:ml-2">Produk</NuxtLink>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <span class="ml-1 text-sm font-medium text-gray-700 md:ml-2">{{ produk?.nama }}</span>
                    </div>
                </li>
            </ol>
        </div>

        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 px-2">
                <img :src="produk?.image" class="rounded-lg">
            </div>
            <div class="w-full md:w-1/2 px-2">
                <h1 class="text-2xl font-bold">{{ produk?.nama }}</h1>
                <h1 class="text-relaxed">Terjual <span class="text-violet-700">{{ produk?.detail.terjual }}</span> | Rating <span class="text-violet-700">{{ produk?.detail.rating }}</span></h1>
                <div class="py-4">
                    <div v-if="produk?.diskon != 0">
                        <h1 class="text-3xl font-bold">Rp {{ produk?.harga - produk?.harga * produk?.diskon }}</h1>
                        <div class="flex flex-row py-2">
                            <h1 class="w-1/6 bg-red-200 rounded text-center text-red-700">{{ produk?.diskon * 100 }}%</h1>
                            <h1 class="w-5/6 text-gray-500 ml-2"><s>Rp {{ produk?.harga }}</s></h1>
                        </div>
                    </div>                    
                    <h1 v-else class="text-3xl font-bold">Rp {{ produk?.harga }}</h1>                    
                </div>
                <hr class="h-px my-2 bg-violet-300 border-0">
                <div class="py-2">
                    <h1 class="font-bold mb-2">Deskripsi</h1>
                    <p class="text-relaxed">{{ produk?.deskripsi }}</p>
                </div>
            </div>            
        </div>    
        <div class="w-full">
            <hr class="h-px mx-2 my-8 bg-violet-300 border-0">
            <h1 class="text-xl font-bold px-2">Ulasan</h1>
            <div class="flex flex-col md:flex-row mt-2">
                <div class="w-full md:w-1/3 px-2">
                    <h1>&#11088; <span class="text-6xl">{{ produk?.detail.rating }}</span><span class="text-gray-500">/5</span></h1>
                </div>
                <div class="w-full md:w-2/3 px-2">
                    <div v-for="u in produk?.detail.ulasan" :key="u.nama" class="w-full py-2">
                        <div class="flex">
                            <h1 class="w-1/2 text-xl font-bold">{{ u.nama }}</h1>
                            <h1 class="w-1/2 text-xl text-gray-500 text-end">{{ u.tanggal }}</h1>
                        </div>
                        <h1 class="text-xl py-2">{{ u.komentar }}</h1>
                        <hr class="h-px my-2 bg-violet-300 border-0">
                    </div>
                </div>                
            </div>
        </div>                
    </NuxtLayout>
</template>

<script setup>
    // layout
    const content = 'content';
    
    // route
    const route = useRoute();
    const id = route.params.id;
    console.log(id);

    // json produk
    let produk = [
        {
            id: 1,
            nama: "BMW Seri 3 Wagon E30 - Merah",
            deskripsi: "Mobil BMW Seri 3 station wagon (estate) kode produksi E30 berwarna merah",
            harga: 1000000000,
            diskon: 0,
            image:
            "https://images.unsplash.com/photo-1628387826782-743f4a077b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                ulasan: [
                    {
                        nama: "User 1",
                        komentar: "Produk bagus",
                        tanggal: "01-05-2023",
                    },
                    {
                        nama: "User 2",
                        komentar: "Produk bagus",
                        tanggal: "03-05-2023",
                    },
                ],
                rating: 4.5,
                terjual: 2
            }
        },
        {
            id: 2,
            nama: "BMW Seri 3 Wagon E36 - Hitam",
            deskripsi: "a",
            harga: 1500000000,
            diskon: 0.001,
            image:
            "https://images.unsplash.com/photo-1662990537036-ccd27eb1c011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                ulasan: [
                    {
                        nama: "User 1",
                        komentar: "Produk bagus",
                        tanggal: "01-05-2023",
                    },
                    {
                        nama: "User 2",
                        komentar: "Produk bagus",
                        tanggal: "03-05-2023",
                    },
                ],
                rating: 5.0,
                terjual: 1
            }
        },
        {
            id: 3,
            nama: "Honda Civic Type-R 10th gen - Gray",
            deskripsi: "a",
            harga: 1070000000,
            diskon: 0.02,
            image:
            "https://images.unsplash.com/photo-1682020245785-4619e7a89d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                ulasan: [
                    {
                        nama: "User 1",
                        komentar: "Produk bagus",
                        tanggal: "01-05-2023",
                    },
                    {
                        nama: "User 2",
                        komentar: "Produk bagus",
                        tanggal: "03-05-2023",
                    },
                ],
                rating: 4.5,
                terjual: 5
            }
        },
        {
            id: 4,
            nama: "Kia Carnival - Gray",
            deskripsi: "a",
            harga: 928000000,
            diskon: 0.025,
            image:
            "https://images.unsplash.com/photo-1653022779664-3a9d0616548c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                ulasan: [
                    {
                        nama: "User 1",
                        komentar: "Produk bagus",
                        tanggal: "01-05-2023",
                    },
                    {
                        nama: "User 2",
                        komentar: "Produk bagus",
                        tanggal: "03-05-2023",
                    },
                ],
                rating: 4.5,
                terjual: 3
            }
        },
        {
            id: 5,
            nama: "Nissan GT-R R34 - Biru",
            deskripsi: "a",
            harga: 1500000000,
            diskon: 0.001,
            image:
            "https://images.unsplash.com/photo-1611312752514-9439fdba223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                ulasan: [
                    {
                        nama: "User 1",
                        komentar: "Produk bagus",
                        tanggal: "01-05-2023",
                    },
                    {
                        nama: "User 2",
                        komentar: "Produk bagus",
                        tanggal: "03-05-2023",
                    },
                ],
                rating: 5.0,
                terjual: 1
            }
        },
        {
            id: 6,
            nama: "Mini Cooper S 3-doors - Merah",
            deskripsi: "a",
            harga: 1029000000,
            diskon: 0.01,
            image:
            "https://images.unsplash.com/photo-1590778846913-de794a6bb4ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                ulasan: [
                    {
                        nama: "User 1",
                        komentar: "Produk bagus",
                        tanggal: "01-05-2023",
                    },
                    {
                        nama: "User 2",
                        komentar: "Produk bagus",
                        tanggal: "03-05-2023",
                    },
                ],
                rating: 4.5,
                terjual: 5
            }
        },
        {
            id: 7,
            nama: "Audi A3 Sportback - Biru",
            deskripsi: "a",
            harga: 678000000,
            diskon: 0.02,
            image:
            "https://images.unsplash.com/photo-1604505298512-2356bb171174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
            detail: {
                ulasan: [
                    {
                        nama: "User 1",
                        komentar: "Produk bagus",
                        tanggal: "01-05-2023",
                    },
                    {
                        nama: "User 2",
                        komentar: "Produk bagus",
                        tanggal: "03-05-2023",
                    },
                ],
                rating: 4.5,
                terjual: 4
            }
        },
        {
            id: 8,
            nama: "Subaru BRZ - Hitam",
            deskripsi: "a",
            harga: 825000000,
            diskon: 0.01,
            image:
            "https://images.unsplash.com/photo-1549909165-1c253ead6865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
            detail: {
                ulasan: [
                    {
                        nama: "User 1",
                        komentar: "Produk bagus",
                        tanggal: "01-05-2023",
                    },
                    {
                        nama: "User 2",
                        komentar: "Produk bagus",
                        tanggal: "03-05-2023",
                    },
                ],
                rating: 4.5,
                terjual: 5
            }
        }        
    ];

    // find id
    produk = produk.find((p) => p.id == id);
    console.log(produk);
</script>