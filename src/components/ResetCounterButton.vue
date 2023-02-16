<template>
  <button @click="resetCount">reset</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  data() {
    return {};
  },
  methods: {
    ...mapActions(['resetCount']),
  },
});
</script>
