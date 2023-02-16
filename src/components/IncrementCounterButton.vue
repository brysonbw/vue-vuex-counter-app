<template>
  <button @click="increment">Increment</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  data() {
    return {};
  },
  methods: {
    ...mapActions(['increment']),
  },
});
</script>
