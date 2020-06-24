// pages/sample/index.js
const app = getApp()
const { data } = require('../../mock-data.js')
Page({

  data: {
    list: []
  },

  onReady: function () {
    this.setData({
      list: data
      // list: data.map((e, i) => e.name)
    })
  },

  onItemTap(e) {
    wx.showToast({
      title: typeof e.detail === 'string' ? e.detail : JSON.stringify(e.detail),
      icon: 'none'
    })
  }
})