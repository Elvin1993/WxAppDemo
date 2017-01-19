// pages/posts/post.js
import {postList, advertList} from '../../data/post-list'

Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({postList, advertList})
  },
  onReady:function(){
    // 页面渲染完成
    console.log('1onReady')
  },
  onShow:function(){
    // 页面显示
    console.log('1onShow')
  },
  onHide:function(){
    // 页面隐藏
    console.log('1onHide')
  },
  onUnload:function(){
    // 页面关闭
    console.log('1onUnload')
  },
  showDetail:function(event){
    let { id } = event.currentTarget.dataset

    wx.navigateTo({
      url: './post-detail/post-detail?id=' + id
    })
  },
  addLike:function(event){
    let {name, index} = event.currentTarget.dataset

    if(this.data.postList[index] && this.data.postList[index][name]) {
      this.data.postList[index][name] +=1;
      this.setData({
        postList: this.data.postList
      })
    }
  }
})