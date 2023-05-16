<script setup>

import {ref} from 'vue'

const cards = [
  {
    id:1,
    img1: 'https://media.istockphoto.com/id/511061090/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BE%D1%84%D0%B8%D1%81-%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%BB%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=JXTyE-PEYmyuSPQzjflj2CMg3QSLT4VToAPtxdz7SKA=',
    img2: '',
    title: 'Это большое',
    subtitle: 'adskjflaskdfj a;lsdkfj ak;lsdjf ;lksdjlkf jlak;sd lkjf sd'
  },
  {
    id:2,
    img1: 'https://media.istockphoto.com/id/511061090/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BE%D1%84%D0%B8%D1%81-%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%BB%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=JXTyE-PEYmyuSPQzjflj2CMg3QSLT4VToAPtxdz7SKA=',
    img2: '',
    title: 'Title2',
    subtitle: 'Subtitle2'
  },
  {
    id:3,
    img1: 'https://media.istockphoto.com/id/511061090/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BE%D1%84%D0%B8%D1%81-%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%BB%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=JXTyE-PEYmyuSPQzjflj2CMg3QSLT4VToAPtxdz7SKA=',
    img2: '',
    title: 'Title3',
    subtitle: 'Subtitle3'
  },
  {
    id:4,
    img1: 'https://media.istockphoto.com/id/511061090/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BE%D1%84%D0%B8%D1%81-%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%BB%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=JXTyE-PEYmyuSPQzjflj2CMg3QSLT4VToAPtxdz7SKA=',
    img2: '',
    title: 'Title',
    subtitle: 'Subtitle'
  },
  {
    id:5,
    img1: 'https://media.istockphoto.com/id/511061090/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BE%D1%84%D0%B8%D1%81-%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%BB%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=JXTyE-PEYmyuSPQzjflj2CMg3QSLT4VToAPtxdz7SKA=',
    img2: '',
    title: 'Title2',
    subtitle: 'Subtitle2'
  },
  {
    id:6,
    img1: 'https://media.istockphoto.com/id/511061090/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BE%D1%84%D0%B8%D1%81-%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%BB%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=JXTyE-PEYmyuSPQzjflj2CMg3QSLT4VToAPtxdz7SKA=',
    img2: '',
    title: 'Title3',
    subtitle: 'Subtitle3'
  }
]

</script>

<template>
  <div w-full>
    <div class="container mx-auto">
      <div class="w-full bg-slate-600 p-10 space-y-3">
        <div class="text-Main text-xl flex items-center ">lineSubtitle</div>
        <div class="text-white text-8xl font-bold">TITLE</div>
        <div class="text-white lg:w-1/2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates error ipsum
          quas dolorum est minima, praesentium omnis cupiditate pariatur rerum.</div>
        <button class="px-10 py-2 bg-Main">Смотреть</button>
      </div>
    </div>
    <div class="container mx-auto flex justify-center">
      <div class="w-5/6 bg-white grid grid-cols-1 lg:grid-cols-3 shadow-md  mt--1">
        <div class="bg-Main p-10 space-y-2">
          <div class="text-gray-500 font-mono">BigTitle</div>
          <div class="text-3xl font-bold ">Title</div>
          <div class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsum laudantium eius rem
            temporibus, quia quisquam, obcaecati </div>
          <button class="bg-gray-600 text-white px-5 py-2">WorkFlow</button>
        </div>
        <div>
          <div class="flex justify-center items-center h-1/2 p-10 min-h-16 md:border-0 md:border-r-2 md:border-b-2">
            <div><img src="../assets/vue.svg" alt=""></div>
            <div>
              <div class="text-5xl font-bold">Title</div>
              <div class="text-gray-500">Subtitle</div>
            </div>
          </div>
          <div class="flex justify-center items-center h-1/2 p-10  min-h-16 md:border-r-2">
            <div><img src="../assets/vue.svg" alt=""></div>
            <div>
              <div class="text-5xl font-bold">Title</div>
              <div class="text-gray-500">Subtitle</div>
            </div>
          </div>

        </div>
        <div>
          <div class="flex justify-center items-center h-1/2 p-10   min-h-16 md:border-b-2">
            <div><img src="../assets/vue.svg" alt=""></div>
            <div>
              <div class="text-5xl font-bold">Title</div>
              <div class="text-gray-500">Subtitle</div>
            </div>
          </div>
          <div class="flex justify-center items-center h-1/2 p-10  min-h-16">
            <div><img src="../assets/vue.svg" alt=""></div>
            <div>
              <div class="text-5xl font-bold">Title</div>
              <div class="text-gray-500">Subtitle</div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="container mx-auto my-10 grid grid-cols-1">
      <div class="text-Main text-center ">Sub Title</div>
      <div class="text-5xl font-bold pt-4 text-center ">Title</div>
    </div>
    <div  class="container w-full grid md:grid-cols-3 mx-auto space-x-10">
      <div v-for="card in cards" :key="card.id" class="bg-white">
      <img class="w-full h-64 " :src="card.img1">
      <div class="p-5 grid grid-cols-3">
        <div class="col-span-1 p-5"><svg fill="none" stroke="Orange" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
</svg></div>
        <div class="col-span-2">
          <div class="text-4xl">{{ card.title }}</div>
          <div>{{ card.subtitle }}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped></style>