// pages/sample/index.js
const app = getApp()
Page({

  data: {
    list: []
  },

  onReady: function () {
    app.request('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8%C2%ACice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27').then(res => {
      this.setData({
        // list: res.data.songlist.map((e, i) => { return {name: e.data.songname, albumname: e.data.albumname} })
        list: res.data.songlist.map((e, i) => e.data.songname)
      })
    })
  },

  onItemTap(e) {
    wx.showToast({
      title: typeof e.detail === 'string' ? e.detail : JSON.stringify(e.detail),
      icon: 'none'
    })
  }
})