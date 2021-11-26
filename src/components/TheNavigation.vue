<template>
    <div id="nav">
        <router-link id="logo" to="/">Vue School Travel App</router-link>
        <router-link v-for="destination in destinations" :key="destination.id" :to="{name: 'Destination.show', params:{id: destination.id, slug: destination.slug}}">{{destination.name}}
        </router-link>
  </div>
</template>
<script>
import sourceData from "@/data.json"
export default {
    data(){
        return {
            destinations: sourceData.destinations,
        }
    },
}
</script>

<style>
#nav .vue-school-active-link {
    color: white;
    opacity: 1;
    border: 2px solid black;
    padding: 2px;
    border-radius: 5px
}
</style>
