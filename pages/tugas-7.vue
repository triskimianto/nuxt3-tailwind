<template>
    <NuxtLayout :name="content">
        <div class="bg-white rounded-lg p-8">
            <div class="mx-auto px-4">
                <h1 class="text-xl font-bold mb-2">1. Static Variable</h1>
                <p class="text-gray-800 leading-relaxed mb-2">
                    Pi = <span class="font-bold">{{ pi }}</span>
                </p>
                <h1 class="text-xl font-bold mb-2">2. Dynamic Variable</h1>
                <p class="text-gray-800 leading-relaxed mb-2">
                    r = <span class="font-bold">{{ r }}</span>
                </p>
                <h1 class="text-xl font-bold mb-2">3. Creation Using Both Variables</h1>
                <p class="text-gray-800 leading-relaxed mb-2">
                    L = <span class="font-bold">{{ luas }}</span>
                </p>
                <h1 class="text-xl font-bold mb-2">4. Array Manipulation</h1>
                <ul class="list-disc text-gray-800 leading-relaxed mb-2">
                    <li class="ml-10 mb-2">Array = <span class="font-bold">{{ myArrayP }}</span></li>
                    <li class="ml-10 mb-2">Array = <span class="font-bold">{{ reversedArray }}</span></li>
                    <li class="ml-10 mb-2">Array = <span class="font-bold">{{ joinedArray }}</span></li>
                    <li class="ml-10 mb-2">Array = <span class="font-bold">{{ splicedArray }}</span></li>
                    <li class="ml-10 mb-2">Array = <span class="font-bold">{{ slicedArray }}</span></li>                    
                </ul>
                <div class="flex flex-row py-2">
                    <div class="w-1/3 py-2 px-2">
                        <img class="rounded" :src="produk.image">
                    </div>
                    <div class="w-1/3 py-2 px-2">
                        <h1 class="w-full text-xl font-bold mb-2">{{ produk.nama }}</h1>
                        <h1 class="w-full mb-4">Terjual <span class="text-gray-500">{{ produk.detail.terjual }}</span> • Rating <span class="text-gray-500">{{ produk.detail.rating }}</span></h1>
                        <h1 class="w-full text-2xl font-bold mb-2">Rp {{ setelahDiskon }}</h1>
                        <div class="flex flex-row">
                            <h1 class="w-1/6 bg-red-200 rounded text-center text-red-700 font-bold">{{ produk.diskon * 100 }}%</h1>
                            <h1 class="w-5/6 text-gray-500 line-through ml-2">Rp {{ produk.harga }}</h1>
                        </div>
                        
                    </div>
                    <div class="w-1/3">c</div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    //layout
    const content = 'content';

    // static & dynamic variables
    const pi = 3.14;
    let r = prompt("Masukkan nilai jari-jari (r): ");
    let luas = pi * r * r;

    // Array
    let myArray = [1, 2, 3, 4, 5];
    let myArrayP = myArray;

    // Reverse array
    let reversedArray = myArray.reverse();

    // Join array elements into a string
    let joinedArray = myArray.join("-");

    // Splice array
    let splicedArray = myArray.splice(1, 3);

    // Slice array
    let slicedArray = myArray.slice(2);

    let produk = {
        nama: "BMW Seri 3 Wagon - E30",
        deskripsi: "BMW seri 3 wagon kode E30 berwarna merah",
        stok: 3,
        harga: 1000000000,
        diskon: 0.01,
        image:
          "https://images.unsplash.com/photo-1628387826782-743f4a077b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        detail: {
          komentar: [
            {
              nama: "Tito",
              komentar: "Produk ini bagus",
              tanggal: "2023-05-01"
            },
            {
              nama: "Riski",
              komentar: "Sangat puas dengan produk ini",
              tanggal: "2023-05-03"
            }
          ],
          rating: 4.5,
          terjual: 2
        }
      };

      let setelahDiskon = produk.harga - (produk.harga * produk.diskon);
</script>