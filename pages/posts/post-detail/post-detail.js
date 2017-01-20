import { postList } from '../../../data/post-list'

Page({
  data: {
    musicStatus: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    let { id } = options
    var that = this
    let result = postList.filter((item) => (item.id == id))
    let postData = result ? result[0] : {}
    let collectedList = wx.getStorageSync('collectedList')

    if (collectedList) {
      postData.collected = collectedList[id]
    } else {
      wx.setStorageSync('collectedList', { [id]: false })
    }
    this.setData({ postData, id })

    wx.onBackgroundAudioPlay(function() {
      that.setData({
        musicStatus: true
      })
       console.log(that.musicStatus)
    })
    wx.onBackgroundAudioStop(function() {
      that.setData({
        musicStatus: false
      })
      console.log(that.musicStatus)
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
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
    let { postData: {music}, musicStatus } = this.data

    if (musicStatus) {
      wx.stopBackgroundAudio()
      // this.setData({
      //   musicStatus: false
      // })
    } else {
      wx.playBackgroundAudio({
        dataUrl: music.url,
        title: music.title,
        coverImgUrl: music.image
      })
      // this.setData({
      //   musicStatus: true
      // })
    }

  }
})