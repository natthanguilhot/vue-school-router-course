<template>
    <section class="destination">
        <div>
            <h1>{{destination.name}}</h1>
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" :alt="destination.name" />
                <p>{{destination.description}}</p>
            </div>
        </div>
    </section>
</template>

<script>
import sourceData from "../data.json";

export default {
    props:{
        id:{
            type: Number,
            required: true,
        }
    },
    computed:{
        destination(){
            return sourceData.destinations.find(
                (destination) => destination.id === this.id
            );
        },
    },
}
</script>

