const config = require('./scripts/config')
const fetch = require('./scripts/fetch');
const util = require('./scripts/util')

App({
  globalData: {
    userInfo: null,
    login: {
      readProtocol: false
    }
  },

  onLaunch: function(option) {
    // 获取用户信息
    this.getUserInfo()
  },

  getUserInfo: function(cb) {
    let that = this
    wx.login({
      success: function() {
        wx.getUserInfo({
          success: function(res) {
            that.globalData.userInfo = res.userInfo
            typeof cb == "function" && cb(that.globalData.userInfo)
          }
        })
      }
    })
  },

  setGlobalData: function(key, value) {
    this.globalData[key] = value
  }

})