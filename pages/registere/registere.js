//index.js
//获取应用实例
const app = getApp()
var url = app.globalData.url
console.log(url)
Page({
  lian: function (e) {
    var hanzi = /^[\u4e00-\u9fa5]+$/;
      this.username=e.detail.value
      if(!hanzi.test(this.username)){
        wx.showToast({
          title: '请写中文',
        })
      }
  },
  addres(e){
    this.second = e.detail.value
  },
  peo(e) {
    var hanzi = /^[\u4e00-\u9fa5]+$/;
    this.three = e.detail.value
    if (!hanzi.test(this.three)) {
      wx.showToast({
        title: '请写中文',
      })
    }
  },
  tel(e) {
    this.data.four = e.detail.value
    let pattern = /^[1][3,4,5,7,8][0-9]{9}$/;    
    if(!pattern.test(this.data.four)){
        wx.showToast({
          title: '请输入正确电话',
          icon:'none'
        })
        return false;
    }
    this.four = e.detail.value
  },

  yan(e) {
    this.five = e.detail.value
  },
  getyan(){
    this.setData({
      str: Math.floor(Math.random() * 8999 + 1000)
    })
    this.setData({
      five: this.data.str
    })
  },
  email(e) {
    var regemail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    this.six = e.detail.value;
    console.log(this.six)
    if(!regemail.test(this.six)){
      wx.showToast({
        title: '请输入正确格式',
        icon:'none'
      })
    }
  },
  user(e) {
    var Pattern = /^.{0,2}$|.{21,}|^[^A-Za-z0-9\u4E00-\u9FA5]|[^\w\u4E00-\u9FA5.-]|([_.-])\1$/ 
    this.seven = e.detail.value
    // if (!Pattern.test(this.seven)) {
    //   wx.showToast({
    //     title: '请输入正确格式',
    //     icon: 'none'
    //   })
    // }
  },
  pwd(e) {
    this.eight = e.detail.value
  },
  
  mytap(){
    if (!this.username || !this.second || !this.three || !this.four || !this.five || !this.six || !this.seven || !this.eight){
      wx.showToast({
        title: '请完善信息',
        
      }),
      wx.navigateTo({
        url: '../rpLogin/rpLogin',
      })
    } 
  },
  data: {
     username:'',
     second:'',
     three:'',  
     four:'',
     five:'',
     six:'',
     seven:'',
     eight:'',
     str:'',
    //  下拉
     show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
     bb:false,
     selectData: ['不限', '高中', '大专', '本科', '以上'],//下拉列表的数据
    selectDate:['1','2','3'],

     index: 0,//选择的下拉列表下标
     indexx:0,
     ll:[]
    },
    // 点击下拉显示框
    selectTap() {
      this.setData({
        show: !this.data.show
      });
    },
    selectsTap() {
      this.setData({
        bb: !this.data.bb
      });
    },
    // 点击下拉列表
    optionTap(e) {
      let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
        index: Index,
        show: !this.data.show
      });
      // end
    },
    optionsTap(e) {
      let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
        indexx: Index,
        bb: !this.data.bb
      });
      // end
    },
  



  //事件处理函数
  bindViewTap: function() {                         
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let that=this;
    wx.request({
      method:'get',
      url: url +'/api/city.json',
    
      success(res){
        that.setData({
          selectData:res.data,
          selectDate:res.data
        })
        console.log(res.data)
      }
    })
  },

  

  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
