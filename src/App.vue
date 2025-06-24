<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />

    <router-view/>
  </div>
</template>

<script setup>
  import Sidebar from './components/Sidebar.vue';
</script>


<style lang="scss">
:root {
  --santa-fe: #b17650;
  --shingle-fawn: #6c5036;
  --asphalt: #0d0805;
  --minsk: #542e85;
  --black-marlin: #3f2e1a;
  --kelp: #4f4f36;
  --avocado: #878761;
  --bossanova: #412950;
  --chino: #cec69f;
  --zeus: #2b2c1a;
  --primary: #963391;
  --primary-alt: #5b4061;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #e0e5eb;
  --sidebar-width: 200px;
}

@font-face {
  font-family: Audiowide;
  src: url('../src/fonts/Audiowide-Regular.ttf');
}

@font-face {
  font-family: Pixelify;
  src: url('../src/fonts/PixelifySans-VariableFont_wght.ttf');
}
@font-face {
  font-family: SyneMono;
  src: url('../src/fonts/SyneMono-Regular.ttf');
}
@font-face {
  font-family: Calligraphy;
  src: url('../src/fonts/UnifrakturMaguntia-Regular.ttf');
}

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Pixelify';
  color: var(--black-marlin);
}

#app {
  margin: 0;
  padding: 0;
}

body {
  background: var(--chino);
  place-items:unset;
  min-width:100%;
}

button{
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display:flex;

  main {
    flex: 1 1 0;
    padding: 10px;
  }
  @media (max-width: 768px) {
    
  }
}

</style>
