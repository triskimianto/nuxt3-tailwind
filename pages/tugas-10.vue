<template>
    <NuxtLayout :name="content">
        <div class="max-w-sm w-full rounded-lg bg-white mb-8 lg:max-w-full lg:flex">                
            <div class="w-full px-6 py-4">
                <div class="flex flex-col md:flex-row">
                    <NuxtLink to="/" class="w-1/4 text-xl hover:text-pink-700">Kembali</NuxtLink>
                    <h1 class="w-2/3 text-xl">
                        Tugas 10 - 
                        <span class="font-bold text-xl text-violet-700">Fungsi (Function)</span>        
                    </h1>
                </div>                
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4">
            <div class="bg-white rounded-lg hover:shadow-md">              
              <div class="px-6 py-4">
                <h1 class="text-xl">1. String = {{ inputString }}</h1>            
                <h1 class="text-xl font-bold pl-5">Hasil = <span class="text-xl text-violet-700">{{ tambahAtPadaString(inputString) }}</span></h1>            
              </div>              
            </div>
            <div class="bg-white rounded-lg hover:shadow-md">              
              <div class="px-6 py-4">
                <h1 class="text-xl">2. Objek = </h1>            
                <ul class="list-none pl-10">
                    <li class="text-xl" v-for="i in inputArrayObjek" :key="i.nama">{ nama: <span>{{ i.nama }}</span>, umur: {{ i.umur }}<span></span> }</li>
                </ul>
                <h1 class="text-xl font-bold pl-5">Hasil = <span class="text-xl text-violet-700"></span></h1>            
                <ul class="list-none pl-10">
                    <li class="text-xl text-violet-700 font-bold" v-for="j in mencariObjekUnik(inputArrayObjek)" :key="j.nama">{ nama: <span>{{ j.nama }}</span>, umur: {{ j.umur }}<span></span> }</li>
                </ul>
              </div>              
            </div>
            <div class="bg-white rounded-lg hover:shadow-md">              
              <div class="px-6 py-4">
                <h1 class="text-xl">3. Array = {{ inputArray }}</h1>            
                <h1 class="text-xl font-bold pl-5">Hasil = <span class="text-xl text-violet-700">{{ akumulasiArray(inputArray) }}</span></h1>            
              </div>              
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    //layout
    const content = 'content';

    // fungsi untuk soal nomor 1
    let tambahAtPadaString = (string) => {
        let wadahString = "";
        let stringSebelum = "";
        
        for(let i = 0; i < string.length; i++){
            let stringSekarang = string[i];
            
            if(stringSekarang === " "){
                wadahString += stringSekarang;
            }else if(stringSebelum === " "){
                wadahString += stringSekarang;
            }else if(stringSekarang === string[0]){
                wadahString += stringSekarang;
            }else{
                wadahString = wadahString + "@" + stringSekarang;
            }
            
            stringSebelum = stringSekarang;
        }
        
        return wadahString;
    }

    //input string
    let inputString = "Hello World";

    // fungsi untuk soal nomor 2
    let mencariObjekUnik = (arrayObjek) => {
        let objekUnik = [];
        let namaUnik = [];
        
        for(let i = 0; i < arrayObjek.length; i++){
            let objekSekarang = arrayObjek[i];
            
            if(!namaUnik.includes(objekSekarang.nama)){
                namaUnik.push(objekSekarang.nama);
                objekUnik.push(objekSekarang);
            }
        }
        
        objekUnik.sort(function (a, b) {        
        if (a.nama.toUpperCase() < b.nama.toUpperCase()) {
        return -1;
        }
        if (a.nama.toUpperCase() > b.nama.toUpperCase()) {
        return 1;
        }
        return 0;
    });
        
        return objekUnik;
    }

    // input array objek
    let inputArrayObjek = [
        { nama: "John", umur: 25 },
        { nama: "Jane", umur: 30 },
        { nama: "John", umur: 35 },
        { nama: "Alice", umur: 28 }
    ];

    // fungsi untuk soal nomor 3
    let akumulasiArray = (array) =>{
        let arrayKu = [];
        let sum = 0;
        
        for(let i=0; i<array.length; i++){
            sum += array[i]
            arrayKu.push(sum);
        }
        
        return arrayKu;
    }

    // input array
    let inputArray = [1,2,3,4,5];
    
</script>