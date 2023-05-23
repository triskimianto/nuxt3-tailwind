<template>
    <NuxtLayout :name="content">
        <div class="max-w-sm w-full rounded-lg bg-white mb-8 lg:max-w-full lg:flex">                
            <div class="w-full px-6 py-4">
                <div class="flex flex-row">
                    <NuxtLink to="/" class="w-1/4 text-xl hover:text-pink-700">Kembali</NuxtLink>
                    <h1 class="w-2/3 text-xl">
                        Tugas 9 - 
                        <span class="font-bold text-xl text-violet-700">Loop dan Menampilkan JSON</span>        
                    </h1>
                </div>                
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <!-- looping untuk card (v-for) -->
            <div v-for="p in produk" :key="p.id" class="bg-white rounded-lg hover:shadow-md">
              <img :src="p.image" class="rounded-tl-lg rounded-tr-lg" />
              <div class="px-4 py-2">
                <h1 class="text-xl">{{ p.nama }}</h1>
                <h1 class="text-2xl font-bold mt-2">Rp {{ p.harga - p.harga * p.diskon }}</h1>
                <div class="flex flex-row py-2">
                    <h1 class="w-1/6 bg-red-200 rounded text-center text-red-700">{{ p.diskon * 100 }}%</h1>
                    <h1 class="w-5/6 text-gray-500 ml-2"><s>Rp {{ p.harga }}</s></h1>
                </div>
                <h1>Rating <span class="text-gray-500">{{ p.detail.rating }}</span> | Terjual <span class="text-gray-500">{{ p.detail.terjual }}</span></h1>
              </div>              
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    //layout
    const content = 'content';

    // json produk
    let produk = [
        {
            id: 1,
            nama: "BMW Seri 3 Wagon E30 - Merah",
            harga: 1000000000,
            diskon: 0.01,
            image:
            "https://images.unsplash.com/photo-1628387826782-743f4a077b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                rating: 4.5,
                terjual: 2
            }
        },
        {
            id: 2,
            nama: "BMW Seri 3 Wagon E36 - Hitam",
            harga: 1500000000,
            diskon: 0.001,
            image:
            "https://images.unsplash.com/photo-1662990537036-ccd27eb1c011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                rating: 5.0,
                terjual: 1
            }
        },
        {
            id: 3,
            nama: "Honda Civic Type-R 10th gen - Gray",
            harga: 1070000000,
            diskon: 0.02,
            image:
            "https://images.unsplash.com/photo-1682020245785-4619e7a89d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                rating: 4.5,
                terjual: 5
            }
        },
        {
            id: 4,
            nama: "Kia Carnival - Gray",
            harga: 928000000,
            diskon: 0.025,
            image:
            "https://images.unsplash.com/photo-1653022779664-3a9d0616548c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                rating: 4.5,
                terjual: 3
            }
        },
        {
            id: 5,
            nama: "Nissan GT-R R34 - Biru",
            harga: 1500000000,
            diskon: 0.001,
            image:
            "https://images.unsplash.com/photo-1611312752514-9439fdba223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                rating: 5.0,
                terjual: 1
            }
        },
        {
            id: 6,
            nama: "Mini Cooper S 3-doors - Merah",
            harga: 1029000000,
            diskon: 0.01,
            image:
            "https://images.unsplash.com/photo-1590778846913-de794a6bb4ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            detail: {
                rating: 4.5,
                terjual: 5
            }
        },
        {
            id: 7,
            nama: "Audi A3 Sportback - Biru",
            harga: 678000000,
            diskon: 0.02,
            image:
            "https://images.unsplash.com/photo-1604505298512-2356bb171174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
            detail: {
                rating: 4.5,
                terjual: 4
            }
        },
        {
            id: 8,
            nama: "Subaru BRZ - Hitam",
            harga: 825000000,
            diskon: 0.01,
            image:
            "https://images.unsplash.com/photo-1549909165-1c253ead6865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
            detail: {
                rating: 4.5,
                terjual: 5
            }
        }        
    ];
</script>