<template>
  <main class="page-not-found">
    <h1>404</h1>
    <p>Page Not Found</p>
    <button @click="$router.push('/')">Back to homepage</button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style scoped>
.page-not-found {
  margin-top: 340px;
}
</style>
