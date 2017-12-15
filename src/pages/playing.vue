<template>
  <div>
    <video id="media" :src="currentVideoUrl" playsinline webkit-playsinline="true"  x5-playsinline x-webkit-airplay="true" x5-video-player-type="h5" x5-video-player-fullscreen="true" style="object-fit: fill;width: 100%">
  </div>
</template>

<script>
  export default {
    props: []
    data () {
      return {

      }
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>