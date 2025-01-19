<template>
  <a :href="`/shop/${data.text}`">
    <div
        class="parallax"
        :style="{ backgroundImage: `url(${data.imgUsed})`, backgroundPosition: data.position }"
    >
      <div class="content-container">
        <p>{{ data.text }}</p>
        <!-- Add additional interactive elements here -->
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          this.data.imgUsed = this.data.img
          observer.disconnect()
        }
      })
    }, { threshold: 0.05 })
    observer.observe(this.$el)
  }


};

</script>

<style scoped>
/* Add styles here if needed */
</style>
