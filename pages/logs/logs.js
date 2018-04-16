//logs.js
const util = require('../../utils/util.js')
var interval = null
Page({
 
  getVerificationCode(){
  this.setData({
    str:Math.floor(Math.random()*8999+1000)
  })
  this.setData({
    aaa:this.data.str
  })
  },
  data: {
    logs: [],
    bgw: '',
    bgh: '',
    aaa:'',
    mobile: '' ,
    str:'',
    avatarUrl: "",//用户头像  
    nickName: "",
    istrue:false
  },
  aaa(e){
    this.setData({
      aaa: e.detail.value
    })
  },
  mobileInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  
  btnclick: function () {
    let pattern = /^[1][3,4,5,7,8][0-9]{9}$/;
    var str = this.data.mobile
    if (pattern.test(str)){
      this.setData({
        istrue: true

      })
    }else if(str == ''){
      this.setData({
        istrue: null
      })  
        
    }else{
      this.setData({
        istrue: false

      })
    }
    
  
    console.log(this.data.str)
    this.data.aaa = this.data.str;
 
    if (this.data.istrue == true && this.data.str!=''){
      wx.showToast({
        title: 'ok',
        icon: 'success',
        duration: 1500
      })

      wx.navigateTo({
        url: '../myWork/myWork'
      })

    }else{
      wx.showModal({
        title: '请重新输入',
        content: '电话或验证错误',
        success: function (res) {
          if (res.confirm) {
            // console.log('用户点击确定')
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
    }


   },  
  
  onLoad: function () {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        // console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
    })  

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          bgw: res.screenWidth,
          bgh: res.screenHeight
        })
      }
    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
