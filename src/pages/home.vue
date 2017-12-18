<template>
  <div id="home">
    <div class="tab_2">
      <img class="poster"  alt="">
      <!--<img src="../images/loading.gif" alt="" class="loader">-->
    </div>
    <div class="tab_1">
      <img class="header" src="../images/download2@2x.png" alt="">
    </div>
    <div class="tab_3">
      <img id="play" class="play" src="../images/play@2x.png" alt="play">
    </div>
    <hr class="line">
    <!--<div class="tab_4">
      <h3 class="recommend_title">推荐视频</h3>
      <ul class="recommend_list clearfix">
        <li v-for="(recommendVideo, index) in recommendVideosOne" :key="index">
          <div>
            <img :src="require(`../images/userposter${index + 1}.png`)" alt="">
          </div>
          <span>{{recommendVideo.title}}</span>
        </li>
      </ul>
    </div>-->
    <!--<div class="tab_5">
      <div class="current_opera_wrapper">
        <div class="current_opera">
          <img class="current_opera_img" src="../images/opera1.png" alt="">
          <p class="current_opera_title">balala</p>
        </div>
      </div>
      <h3 class="more_title">推荐视频</h3>
      <ul class="more_list plan_a clearfix">
        <li v-for="(recommendVideo, index) in recommendVideosTwo" :key="index">
          <div>
            <img :src="require(`../images/userposter${index + 5}.png`)" alt="">
          </div>
          <span>{{recommendVideo.title}}</span>
        </li>
      </ul>
      <img class="replay" src="../images/replay@2x.png" alt="">
    </div>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {},
    methods: {},
    created(){
      console.log(this.$store.count);
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body{background-color: #000;}
  .tab_2 {
    position: relative;
    width: 100%;
    height: 750px;
    overflow: hidden;
  }
  .poster {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin:auto;
    width: 100%;
  }
  .tab_3 {
    position: absolute;
    top:0;
    width: 100%;
    height: 750px;
    z-index: 10;
    background-color: rgba(0,0,0,.4);
  }
  .tab_3 .play {
    position: absolute;
    top:0;
    right:0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 144px;
    height: 145px;
  }
  .header{
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    video::-webkit-media-controls-panel{
      display: flex !important;
      opacity: 1 !important;
    }
  }
  .line {
    width: 100%;
    height:20px;
    background-color: #f2f2f2;
    margin-top: -1px;
    margin-bottom: -1px;
    border:none;
  }
  .tab_4{
    position: relative;
    background-color: #fff;
    color: #333;
  }
  .tab_6{
    position: relative;
    background-color: #f2f2f2;
    color: #333;
    display: none;
  }
  .tab_5 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 22;
    width: 100%;
    height: 100%;
    /*padding-bottom: 20px;*/
    color: #fff;
    display: none;
    background-color: rgba(0,0,0, .6);
  }
  .tab_4 .recommend_title, .tab_5 .more_title, .tab_6 .recommend_title {
    height:84px;
    font-size: 32px;
    box-sizing: border-box;
  }
  .tab_4 .recommend_title, .tab_6 .recommend_title {
    padding-top: 41px;
    font-weight: bold;
  }
  .tab_6 .download {
    position: fixed;
    bottom: 0;
    width:750px;
  }
  .tab_5 .more_title {
    height:70px;
    line-height: 70px;
    padding-left: 6%;
    font-size: 26px;
  }
  .recommend_title:before{
    content: '';
    position: relative;
    top:6%;
    display: inline-block;
    height: 60%;
    width:6px;
    border-radius: 6px;
    background-color: #fd467b;
    margin:0 18px 0 20px;
  }
  .tab_6 .recommend_title:before {
    background: -webkit-linear-gradient(135deg, #0665f3, #852bf4); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(135deg, #0665f3, #852bf4); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(135deg, #0665f3, #852bf4); /* Firefox 3.6 - 15 */
    background: linear-gradient(135deg, #0665f3, #852bf4); /* 标准的语法 */
  }
  .recommend_list_all {
    margin-bottom: 120px;
  }
  .recommend_list li, .more_list li, .recommend_list_all li {
    float: left;
    position: relative;
  }
  .recommend_list li{
    width:48.5%;
    margin:0 0 1% 1%;
    box-sizing: border-box;
    padding-bottom: 20px;
    border-radius: 3% 3% 3% 3%;
    background-color: #fff;
  }
  .recommend_list_all li {
    width:48.5%;
    margin:0 0 1% 1%;
    box-sizing: border-box;
    padding-bottom: 20px;
    border-radius: 3% 3% 3% 3%;
    background-color: #fff;
  }
  .more_list li {
    width: 41%;
    margin: 0 0 5% 6%;
    position: relative;
  }
  .recommend_list li img {
    width:100%;
    border-radius: 3%;
  }
  .recommend_list_all li img {
    width: 100%;
    border-radius: 3% 3% 0 0;
  }
  .more_list li img {
    width:100%;
  }
  .recommend_list li div, .more_list li div, .recommend_list_all li div {
    position: relative;
  }
  .more_list li div {
    overflow: hidden;
    border-radius: 3%;
  }
  .recommend_list li div:after, .more_list li div:after, .recommend_list_all li div:after {
    content: '';
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    height:25.5%;
    width:30.5%;
    margin:auto;
    background: url("../images/play@2x.png") 0 0/100% 100%;
  }
  .more_list.plan_a li div:after {
    height:30.5%;
  }
  .recommend_list li span, .more_list li span, .recommend_list_all li span {
    display: block;
    width:100%;
    line-height: 40px;
    margin-top: 9px;
    font-family: "Microsoft YaHei";
    font-size: 28px;
  }
  .recommend_list_all li span{
    box-sizing: border-box;
    padding:0 25px;
  }
  .more_list li span {
    display: inline-block;
    font-size: 26px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .more_list.plan_a li span {
    position: absolute;
    bottom:0;
    height: 60px;
    line-height: 60px;
    padding: 0 8px;
    box-sizing: border-box;
    background-color: rgba(0,0,0,.4);
  }
  .tab_5 .current_opera_wrapper {
    height:346px;
    background: url("../images/opera_current.png") no-repeat;
    background-size: cover;
    position: relative;
  }
  .tab_5 .current_opera_wrapper .current_opera {
    position: absolute;
    width: 205px;
    top:45px ;
    left:23px;
  }
  .current_opera_title {
    position: absolute;
    bottom: 0;
    width: 100%;
    height:45px;
    line-height: 45px;
    box-sizing: border-box;
    padding:0 8px;
    text-align: center;
    font-size: 24px;
  }
  .tab_5 .current_opera_wrapper .current_opera .current_opera_img {
    display: block;
    width:100%;
    border-radius: 6px;
  }
  .replay {
    width: 22%;
    margin-left: 6%;
    margin-top: -10px;
  }
  .loader {
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin:auto;
    width: 60px;
    height: 60px;
    z-index: 25;
    visibility: hidden;
  }
  @keyframes bounceInUp {
    from, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    from {
      opacity: 0;
      bottom:-3000px;
    }

    60% {
      opacity: 1;
      bottom:120px;
    }

    75% {
      bottom:-20px;
    }

    90% {
      bottom:5px;
    }

    to {
      bottom:0;
    }
  }
  .bounceInUp {
    animation-name: bounceInUp;
    animation-duration: 1s;
    animation-fill-mode: both;
  }
</style>