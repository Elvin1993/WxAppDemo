// pages/posts/post.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      advertList: [
        "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
      ],
      postList: [
        {
          id: 1,
          userIcon: "/images/avatar.jpg",
          date: "2015-11-20",
          title: "百鸟朝凤",
          image: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
          content: "目前，单位的标签来源主要来源于单位网络，如机构网络，企业网络，单位的标签显示为它们在网络分类里的最小子分类即最小子集，如 银行-城商行-江苏-苏州银行，则只显示江苏就可以，但这个江苏是包含在整个机构网络的。一个单位在单位网络里可以分在多个子集下，因此应该单位有多个标签",
          zan: 99,
          like: 100   
        },
        {
          id: 2,
          userIcon: "/images/avatar.jpg",
          date: "2015-11-21",
          title: "天女散花",
          image: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          content: "幸福大厦范德萨发地方萨芬，范德萨",
          zan: 1,
          like: 20   
        }
      ]
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    console.log(this.data)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  addLike:function(event) {
    console.log(event.currentTarget.indexx)
    
    // this.data.postList[i].like +=1;
    // this.setData({
    //   postList: this.data.postList
    // })
  }
})