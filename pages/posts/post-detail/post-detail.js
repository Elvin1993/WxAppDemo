import { postList } from '../../../data/post-list'
var app = getApp()

Page({
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    let { id } = options
    let result = postList.filter((item) => (item.id == id))
    let postData = result ? result[0] : {}
    let collectedList = wx.getStorageSync('collectedList')

    if (collectedList) {
      postData.collected = collectedList[id]
    } else {
      wx.setStorageSync('collectedList', { [id]: false })
    }

    this.setData({ postData, id, musicStatus: id == app.globalData.g_musicStatus })
    this.initAudio(id)
   
  },
  initAudio(id) {
    var that = this

     wx.onBackgroundAudioPlay(function() {
      console.log('onBackgroundAudioPlay', that, id)
      that.setData({
        musicStatus: true
      })
      app.globalData.g_musicStatus = id
    })
    wx.onBackgroundAudioPause(function() {
      console.log('onBackgroundAudioPause', that, id)
      that.setData({
        musicStatus: false
      })
      app.globalData.g_musicStatus = false
    })
  },
  onCollectionTap: function (event) {
    let {id, postData} = this.data
    let collectedList = wx.getStorageSync('collectedList') || {}
    let collected = !collectedList[this.data.id]

    collectedList[this.data.id] = collected
    postData.collected = collected
    wx.setStorageSync('collectedList', collectedList)
    this.setData({ postData })
    wx.showToast({
      title: collected ? "收藏成功" : "取消成功",
      duration: 1000
    })
  },
  showShare: function (event) {
    let itemList = [
      "分享到QQ",
      "分享到微信",
      "分享到新浪微博"
    ]
    wx.showActionSheet({
      itemList: itemList,
      itemColor: "#b3d4db",
      success: function (res) {
        if (res.cancel) { return }
        console.log('success', res)
        wx.showToast({ title: itemList[res.tapIndex] })
      },
      fail: function (res) {
        console.log('fail', res)
        wx.showToast({
          title: "取消"
        })
      }
    })
  },
  handlerMusicCtr: function (e) {
    let { postData: {music}, musicStatus, id } = this.data
    console.log(musicStatus)

    if (musicStatus) {
      wx.pauseBackgroundAudio()
      this.setData({
        musicStatus: false
      })
       app.globalData.g_musicStatus = null
    } else {
      wx.playBackgroundAudio({
        dataUrl: music.url,
        title: music.title,
        coverImgUrl: music.image
      })
      this.setData({
        musicStatus: true
      })
       app.globalData.g_musicStatus = id
    }

  }
})