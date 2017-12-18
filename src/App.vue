<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import axios from 'axios'
  import objARInit from './plugins/tools'
  import './style/reset.styl'

  export default {
    name: 'app',
    data () {
      return {
        currentEnv: '', //获取运行环境     //都需要，常量
        recommendVideos: [
          {
            id: 1201110613,
            title: '哈哈，快来看看我美不美？自拍还能这么搞笑~？',
            videoSrc: 'https://video1.j.cn/video/forum/171110/1340/05351f92a7ae446b.m3u8',
            themeId: 16,
            themeName: '看我有多美'
          },
          {
            id: 1192370251,
            title: '我们都是小仙女~你能找到乱入的糙汉子吗？',
            videoSrc: 'https://video1.j.cn/video/forum/171031/2039/cf88d0984abf4223.m3u8',
            themeId: 25,
            themeName: 'BOYS'
          },
          {
            id: 1192328686,
            title: '人真的有灵魂吗？谁能帮我解释下这个现象？',
            videoSrc: 'https://video1.j.cn/video/forum/171031/1959/9aae09e4d4e54a2c.m3u8',
            themeId: 28,
            themeName: '灵魂出窍'
          },
          {
            id: 1203977419,
            title: '我爱洗澡皮肤好好~里面有美人出浴图哦~',
            videoSrc: 'https://video1.j.cn/video/forum/171113/1915/ed41555a0adb4011.m3u8',
            themeId: 29,
            themeName: '我爱洗澡'
          },
          {
            id: 1210804012,
            title: 'BOOM~睡什么睡，跟我一起嗨起来~~',
            videoSrc: 'https://video1.j.cn/video/forum/171121/1229/443a45292be54cae.m3u8',
            themeId: 24,
            themeName: '不自觉就抖起来了'
          },
          {
            id: 1207083505,
            title: '女孩子花点钱怎么了？为啥不让买包包？',
            videoSrc: 'https://video1.j.cn/video/forum/171117/0740/b4635e7608bd460f.m3u8',
            themeId: 36,
            themeName: '女孩子花点钱怎么了'
          },
          {
            id: 1209339072,
            title: 'Baby想我就多看一眼，么么哒~',
            videoSrc: 'https://video1.j.cn/video/forum/171119/1844/346f599368ca441e.m3u8',
            themeId: 26,
            themeName: '爱你'
          },
          {
            id: 1210264099,
            title: '喵~喵~变身波斯猫~把我带回家吧，好不好？',
            videoSrc: 'https://video1.j.cn/video/forum/171120/1926/2908df4bd1b349cb.m3u8',
            themeId: 21,
            themeName: '波斯猫'
          }
        ],          //一二需要，常量
        videoPosterH: 0,                  //一二需要，常量
        curPlan: 'planA',
        tab3FirstClick: true,
        initPlayer: true,
        isUserVideo: true,
        curRecommendId: null,
        worksId: objARInit._GetQueryString('id') || 30011,
        videoUrl: '',
        imgUrl: '',
        themeId: '',
        themePic: '',
        themeName: '',
        curThemeId: '',
        curThemePic: '',
        curThemeName: '',
        currentVideoUrl: ''
      }
    },
    methods: {
      judgeEnv () {
        var ua = navigator.userAgent.toLowerCase(),
          isWeixin = ua.indexOf('micromessenger') > -1,
          isQQ = ua.indexOf('qq') > -1,
          isWeibo = ua.indexOf('weibo') > -1,
          isIphone = ua.indexOf('iphone') > -1,
          isAndroid = ua.indexOf('android') > -1,
          isUc = ua.indexOf('ucbrowser') > -1,
          isBaidu = ua.indexOf('baidu') > -1,
          isPc = /android|webos|iphone|ipod|blackberry/i.test(ua) ? false : true,
          isMomo = ua.indexOf('momowebview') > -1,
          runningEnvironment = {}
        //判断环境
        runningEnvironment = {
          'weixin': isWeixin,
          'qq': isQQ,
          'weibo': isWeibo,
          'iphone': isIphone,
          'android': isAndroid,
          'baidu': isBaidu,
          'pc': isPc,
          'momo': isMomo
        }
        return runningEnvironment
      },
      getVideoInfo (callback) {
        axios({
          method: 'POST',
//          url: 'http://snaptest.j.cn/api/worksShareDetail',
          url: '/api/worksShareDetail',
          data: {worksId: this.worksId},
//          data: `{"worksId":${this.worksId}}`,
        })
          .then((res) => {
            const {works } = res.data
            console.log(works);
            this.imgUrl = works.worksPic.url
            this.currentVideoUrl = this.videoUrl = works.movie.url
            this.curThemeId = this.themeId = works.scenario.id
            this.curThemeName= this.themeName = works.scenario.name
            this.curThemePic = this.themePic = works.scenario.coverUrl
            callback && callback()
          })
          .catch((err) => {
            console.log(err.message);
          })
      },
    },
    computed: {
      appWidth () {
        return this.currentEnv.pc ? 375 : 750
      },
    },
    created () {
      this.currentEnv = this.judgeEnv()
      this.getVideoInfo(()=>{
        objARInit._send1_1('balala', 'share-open', () => {
          objARInit._send1_1('balala', 'share-open-' + this.themeId, () => {
            objARInit._send1_1('balala', 'share-open-' + this.curPlan, () => {})
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app {width: 750px; margin: 0 auto;min-height:100%; font-size: 0; background-color: #000; position: relative}
</style>
