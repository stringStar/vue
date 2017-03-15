<template>
  <div>
    <div class="index"> 这是插件框</div>
    <router-link to="h5">H5标签</router-link>
    <v-swipe></v-swipe>
  </div>

</template>
<script>
  import vSwipe from 'components/swiper.vue'
  export default{
    data(){

    },
    components: {
      vSwipe
    }
  }
</script>
