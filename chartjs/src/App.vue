<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/line">line</RouterLink>
        <RouterLink to="/multiline">multiline</RouterLink>
        <RouterLink to="/stackbar">stackbar</RouterLink>
        <RouterLink to="/groupbar">groupbar</RouterLink>
        <RouterLink to="/groupstackbar">groupstackbar</RouterLink>
      </nav>

  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
  
</script>
<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
