<script setup lang="ts">
import TimeCheck from './components/TimeCheck.vue'
</script>

<template>
  <div class="content">
    <header>
      <h1>時間範囲チェック</h1>
    </header>
    <main>
      <TimeCheck />
    </main>
  </div>
  <footer>
    <a href="https://ja.vuejs.org/" target="_blank" rel="noopener">
      <span>Created with</span>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="20" height="20"
    /></a>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

footer {
  a {
    width: 100%;
    display: flex;
    place-items: center;
    justify-content: center;
    padding: 2rem 0;
    color: var(--vt-c-divider-dark-1);
  }

  img {
    margin-left: 10px;
  }
}

@media (min-width: 1024px) {
  .content {
    margin: 0 auto;
    display: flex;
    place-items: center;
    justify-content: center;

    header,
    main {
      width: 100%;
    }
  }
}
</style>
