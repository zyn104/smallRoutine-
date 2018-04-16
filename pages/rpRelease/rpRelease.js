// pages/rpRelease/rpRelease.js
var city = require('../../utils/city.js');
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: 'DYUBZ-WV5RS-ARFOD-6SYOM-5B6AV-5DFBE'
});
var str = ''
Page({
  ddd() {
    console.log(1)
  },
  
  select_date: function (e) {

    var index = e.currentTarget.dataset.key;


    this.setData({
      aaa: str
    })
    str += `a${index}`
    let kk = str.split('a');
    this.setData({
      bbb: kk
    })

    if (this.data.datess[index].state == 1) {
      this.data.datess[index].state = 0;

      //  return false

    } else if (this.data.datess[index].state == 0) {
      this.data.datess[index].state = 1;


    }
    this.setData({
      datess: this.data.datess,
    });

  },
  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    dates: '2016-11-08',
    array: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10'],
    index: 0,
    arr: ['学历不限', '本科以上', '本科', '大专', '高中'],
    num: 0,
    ex: ['经验不限', '2-3年', '3-5年', '6-8年', '10年'],
    n: 0,
    qu: ['请选择给薪区间', '8k', '10k', '12k', '15k', '20k', '30k'],
    aa: 0,
    datess: [
      { "data_name": "不加班","state":0},
      { "data_name": "住房补贴","state":0},
      { "data_name": "无试用期","state":0},
      { "data_name": "14薪","state": 0},
      { "data_name": "免息房贷","state": 0 },
      { "data_name": "每年多次调薪","state": 0 },
      { "data_name": "周末双休","state": 0 },
      { "data_name": "包吃","state": 0 },
      { "data_name": "包住","state": 0 },
      { "data_name": "周末双休","state": 0 },
      { "data_name": "五险一金","state": 0 },
      { "data_name": "年底双薪","state": 0 },
      { "data_name": "周末双休","state": 0 },
      { "data_name": "餐补","state": 0 },
      { "data_name": "年底双薪","state": 0 },
      { "data_name": "五险一金","state": 0 },
      { "data_name": "年底双薪","state": 0 },
      { "data_name": "绩效奖金","state": 0 },
      { "data_name": "餐补","state": 0 },
      { "data_name": "周末双休","state": 0 },
      { "data_name": "餐补","state": 0 },
      { "data_name": "年底双薪","state": 0 },
      { "data_name": "绩效奖金","state": 0 },
      { "data_name": "五险一金","state": 0 },
      { "data_name": "餐补","state": 0 },
      { "data_name": "五险一金","state": 0 },
      { "data_name": "年底双薪","state": 0 },
      { "data_name": "绩效奖金","state": 0 },
      { "data_name": "年底双薪","state": 0 },
      { "data_name": "补充医疗保险","state": 0 }
    ]


  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindPicker: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  experience: function (e) {
    this.setData({
      aa: e.detail.value
    })
  },
  salary: function (e) {
    this.setData({
      n: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.getLocation({
      success: (res) => {
        let latitude = res.latitude
        let longitude = res.longitude
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: (res) => {
            // console.log(res.result.address)
            _this.setData({
              name: res.result.address
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})