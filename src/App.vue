<template>
  <TheNavigation/>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
// Leçon numéro 18 : Experience cards
export default {
  components: {TheNavigation},
  beforeCreate() {
    this.$options.components.TheNavigation = require('./components/TheNavigation.vue').default;
  },
}
</script>

<style>
</style>
