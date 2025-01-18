<template>
  <div>
    <a
        v-for="(d, id) in data"
        :key="`parallax-${id}`"
        :href="`/shop/${d.text}`"
    >
      <div
          class="parallax"
          :style="{ backgroundImage: `url(${d.img})`, backgroundPosition: d.position }"
      >
        <div class="content-container">
          <p>{{ d.text }}</p>
          <!-- <img :data-name="d.text" @click="expandSection" src="plusSVG" alt=""/> -->
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    // expandSection() {
    //   // Implement functionality for expandSection
    // }
  }
};
</script>

<style>
@import './parallax.css';
</style>
