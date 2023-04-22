<script setup lang="ts">
import { ref } from 'vue';

import HelloWorld from './components/HelloWorld.vue';

const text = ref('Vue3 + TS + Pinia + ESLint + Prettier + Vitest + @testing-library');
</script>

<template>
  <h1>{{ text }}</h1>
  <HelloWorld msg="Ready to build and test!" />
</template>
<styles lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
body {
  background-color: #8e44ad;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}
h1 {
  font-size: 32px;
  font-weight: 700;
}
</styles>
