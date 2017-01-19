import {postList} from '../../../data/post-list'

Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let { id } = options
    let postObj = postList.filter((item) => (item.id == id))

    this.setData({postData: postObj ? postObj[0] : {}})    
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})