<template>
  <button
      class="button-container"
      @click="clickHandler"
      :style="buttonStyles"
  >
    <div v-if="dividers" class="divider-top"></div>
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    clickHandler: {
      type: Function,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    fontSize: {
      type: String,
      required: true
    },
    dividers: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonStyles() {
      return {
        color: this.color,
        border: `1px solid ${this.color}`,
        fontSize: this.fontSize
      };
    }
  }
};
</script>

<style>
@import './button.css';
</style>
