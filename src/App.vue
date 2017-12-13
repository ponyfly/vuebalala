<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import './style/reset.styl'

  export default {
    name: 'app'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app {width: 750px; margin: 0 auto;min-height:100%; font-size: 0; background-color: #000; position: relative}
</style>
