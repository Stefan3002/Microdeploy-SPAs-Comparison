<template>
  <div>
    <ParallaxItem
        v-for="(d, id) in data"
        :key="`parallax-${id}`"
        :data="d"
    />
  </div>
</template>

<script>
import ParallaxItem from "@/components/parallaxItem/parallax-item.vue";

export default {
  components: {ParallaxItem},
  props: {
    data: {
      type: Array,
      required: true
    }
  },


};
</script>

<style>
@import './parallax.css';
</style>
