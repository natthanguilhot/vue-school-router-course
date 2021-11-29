<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <router-link v-for="destination in destinations" :key="destination.id" :to="{name: 'Destination.show', params:{id: destination.id, slug: destination.slug}}">
        <h2>{{destination.name}}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data(){
    return {
      destinations : sourceData.destinations,
    }
  },
};
</script>
