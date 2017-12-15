const express = require('express')
const router = express.Router()

const data = {
  "statusCode": 200,
  "bizStatus": 0,
  "bizMessage": null,
  "works": {
    "id": 30011,
    "movie": {
      "lengthInMillis": 0,
      "height": 0,
      "url": "https://video1.j.cn/video/forum/171130/2249/c72bad97685d40ec.mp4",
      "width": 0
    },
    "worksPic": {
      "url": "https://static3.j.cn/img/forum/171130/2249/5e3084219b684fd5.jpg",
      "width": 0,
      "height": 0
    },
    "desc": "真的有灵魂吗？谁能帮我解释下这个现象？",
    "publishType": 0,
    "scenario": {
      "id": 22,
      "name": "剧本1",
      "iconUrl": null,
      "sourceUrl": "http://ozv2s2gcd.bkt.clouddn.com/zip/snap/171201/1627/7eb38a98460b47b1.zip",
      "coverUrl": "http://ozv2s2gcd.bkt.clouddn.com/img/snap/171201/1605/0c94e13c91284e0f.png"
    },
    "user": {
      "id": 2,
      "nickName": "王者之路",
      "headUrl": "",
      "sex": 1,
      "status": 1,
      "userLabels": []
    },
    "likeCount": 0,
    "hasAttention": false,
    "shareCount": 0,
    "watchCount": 0,
    "shootType": 0,
    "shareInfo": {
      "objId": 30011,
      "type": 1,
      "picUrl": "https://static3.j.cn/img/forum/171130/2249/5e3084219b684fd5.jpg",
      "url": "https://video1.j.cn/video/forum/171130/2249/c72bad97685d40ec.mp4",
      "title": "我录了一段有点特别的视频，点开看看？",
      "description": "真的有灵魂吗？谁能帮我解释下这个现象？"
    }
  }
}
router.post('/worksShareDetail', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.send(data)
  next()
})

module.exports = router