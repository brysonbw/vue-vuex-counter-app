<template>
  <main>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Counter Vuex Example</h1>
    <!-- Counter State-->
    <TheCounter />
    <div class="btn-container">
      <!-- Increment Count Button/Component-->
      <IncrementCounterButton />
      &nbsp;&nbsp;
      <!-- Reset Count Button/Component -->
      <ResetCounterButton />
      &nbsp;&nbsp;
      <!-- Decrement Count Button/Component -->
      <DecrementCounterButton />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import TheCounter from '@/components/TheCounter.vue';
import IncrementCounterButton from '@/components/IncrementCounterButton.vue';
import DecrementCounterButton from '@/components/DecrementCounterButton.vue';
import ResetCounterButton from '@/components/ResetCounterButton.vue';

export default Vue.extend({
  components: {
    TheCounter,
    IncrementCounterButton,
    DecrementCounterButton,
    ResetCounterButton,
  },
});
</script>

<style scoped>
.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
