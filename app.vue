<template>
  <div class="container mx-auto">
    <!-- header -->
    <NuxtLayout :name="header"></NuxtLayout>
    <!-- content -->
    <NuxtLayout :name="content">
      <div class="flex items-center justify-center h-16">
          <span class="text-2xl font-bold text-center">Resep Cheese Burger Ala IN-N-OUT California Amerika [Sausnya Special]</span>
      </div>
      <div class="flex flex-col py-8 md:flex-row justify-between">
          <div class="w-full md:w-1/2 mb-8 md:mb-0">
              <h3 class="text-xl font-bold mb-2">Bahan Saus:</h3>
              <ul class="list-disc pl-6">
                  <li>8 sdm mayonaise</li>
                  <li>3 sdm saus tomat</li>
                  <li>1 sdm saus sambal</li>
                  <li>1 sdm kecap inggris / worcestershire sauce</li>
                  <li>1 sdt bubuk paprika</li>
                  <li>1 sdt bubuk bawang putih</li>
                  <li>2 sdm gula</li>
                  <li>1 sdm cuka</li>
                  <li>2 sdm daun bawang cincang</li>
                  <li>2 sdm pickles gherkins cincang</li>
                  <li>Garam</li>
              </ul>
              <h3 class="text-xl font-bold mb-2 mt-4">Caramelized Onion:</h3>
              <ul class="list-disc pl-6">
                  <li>3 buah bawang bombai, iris</li>
                  <li>3 sdm minyak</li>
                  <li>1 sdm mentega</li>
                  <li>1 siung bawang putih, iris (opsional)</li>
                  <li>Sejumput daun thyme (opsional)</li>
                  <li>⅓ sdt garam</li>
                  <li>¼ sdt merica</li>                                    
              </ul>
              <h3 class="text-xl font-bold mb-2 mt-4">Bahan Lainnya:</h3>
              <ul class="list-disc pl-6">
                  <li>4 buah roti burger</li>
                  <li>400 gr daging giling dengan lemak</li>
                  <li>1 sdm mentega</li>
                  <li>Lada hitam</li>
                  <li>Garam</li>
                  <li>Keju slice red chedda</li>
                  <li>Iceberg lettuce</li>
                  <li>1 buah tomat, iris</li>                                    
              </ul>
          </div>
          <div class="w-full md:w-1/2">
              <h3 class="text-xl font-bold mb-2">Langkah Memasak:</h3>
              <ol class="list-decimal pl-6">
                  <li class="mb-2">Untuk membuat saus, campurkan pickled gherkins dan daun bawang cincang di dalam mangkuk kemudian tambahkan kecap inggris, bubuk paprika, bubuk bawang putih, gula, dan cuka lalu aduk rata. Masukkan saus sambal, saus tomat, dan mayonaise lalu aduk hingga tercampur, boleh juga ditambahkan sedikit garam jika dirasa perlu</li>
                  <li class="mb-2">Untuk membuat caramelized onion, panaskan minyak kemudian tumis bawang bombai iris dengan api besar hingga layu lalu tambahkan bawang putih dan daun thyme kemudian bumbui dengan garam dan merica</li>
                  <li class="mb-2">Kecilkan api, dan masak bawang hingga kecokelatan sambil sesekali diaduk dan tambahkan mentega lalu matikan api</li>
                  <li class="mb-2">Untuk membuat patty, ambil daging giling (ukuran disesuaikan dengan besar roti burger) lalu lempar-lemparkan dengan menggunakan kedua tangan supaya menyatu kemudian grill lalu pipihkan dengan spatula dan bumbui dengan garam dan lada hitam</li>
                  <li class="mb-2">Balikkan patty dan beri keju red cheddar diatasnya lalu masak hingga matang dan keju meleleh. Patty bisa ditutup dengan pan supaya keju cepat meleleh</li>
                  <li class="mb-2">Belah dua roti burger, kemudian panggang dengan sedikit mentega hingga bagian dalamnya kecokelatan</li>
                  <li class="mb-2">Susun roti burger, olesi dengan saus kemudian tambahkan tomat, iceberg lettuce, daging patty, caramelized onion, saus, sedikit lada hitam, dan tutup dengan roti burger</li>
                  <li class="mb-2">Cheese burger siap disajikan</li>
              </ol>
          </div>
      </div>
      <div class="flex items-center justify-center">
              <iframe class="w-full rounded-lg h-96" src="https://www.youtube.com/embed/KiHBmYx_G9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </NuxtLayout>
    <!-- footer -->
    <NuxtLayout :name="footer"></NuxtLayout>
  </div>
</template>

<style>
  .container{
    max-width: 100%;
  }
</style>

<script setup>
  const header = 'header'
  const content = 'content'
  const footer = 'footer'
</script>