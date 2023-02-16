<template>
  <h1>{{ counter }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  data() {
    return {};
  },
  computed: {
    ...mapState({ counter: 'count' }),
  },
});
</script>
