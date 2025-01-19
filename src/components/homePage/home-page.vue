<template>
  <div class="home-page-container">
    <div class="landing">
      <div class="text">
        <h1 class="title-container">Shop-n-all</h1>
        <h2 class="sub-title-container">Your fashion expert!</h2>
        <div class="title-details">
          <p>
            All the new additions can be found here, on Shop-n-All. <br /> Start buying today!
          </p>
        </div>
        <div class="call-to-action-container">
          <a class="button-landing-page" href="/shop">
            <Button :text="'Shop now.'" :color="'whitesmoke'" :fontSize="'1.5em'" />
          </a>
          <i class="mouse-icon fa-3x fa fa-solid fa-computer-mouse"></i>
        </div>
      </div>
      <div class="hero"></div>
    </div>
    <Parallax :data="parallaxImgs" />
  </div>
</template>

<script>
import Button from "../button/button.vue";
import Parallax from "../parallax/parallax.vue";
import parallaxImg1 from "../../../utils/imgs-landing-page/parallaxImg-min.webp";
import parallaxImg2 from "../../../utils/imgs-landing-page/parallaxImg2-min.webp";
import parallaxImg3 from "../../../utils/imgs-landing-page/parallaxImg3-min.webp";
import parallaxImg4 from "../../../utils/imgs-landing-page/parallaxImg4-min.webp";
import parallaxImg5 from "../../../utils/imgs-landing-page/parallaxImg5-min.webp";

export default {
  components: {
    Button,
    Parallax
  },
  data() {
    return {
      parallaxImgs: [
        {
          img: parallaxImg1,
          text: 'Sneakers',
          position: 'bottom'
        },
        {
          img: parallaxImg2,
          text: 'Jackets',
          position: 'center'
        },
        {
          img: parallaxImg3,
          text: 'Hats',
          position: 'top'
        },
        {
          img: parallaxImg4,
          text: 'Women',
          position: 'top'
        },
        {
          img: parallaxImg5,
          text: 'Men',
          position: 'top'
        }
      ]
    };
  }
};
</script>

<style>
@import './home-page.css';
</style>
