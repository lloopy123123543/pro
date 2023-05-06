<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <div class="container mx-auto flex">
      <header class="flex text-xl w-full justify-between pt-10">
        <div class="text-rose-800 font-bold">LOGO</div>
        <div class="lg:flex lg:space-x-5 hidden">
          <div>Калькулятор</div>
          <div>Монтаж окон</div>
          <div>Контакты</div>
          <div>Личный кабинет</div>
        </div>
        <div class="flex lg:hidden">
          <div class="">
            <div>Калькулятор</div>
            <div>Монтаж окон</div>
            <div>Контакты</div>
            <div>Личный кабинет</div>
          </div>
        </div>
      </header>
    </div>
    <HelloWorld />
  </div>
</template>

<style scoped></style>
