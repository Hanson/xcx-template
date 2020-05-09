import {loginByWeixin} from '/services/user.js'

App({
  onLaunch: function () {
  },
  login: function () {
    return loginByWeixin()
  },
  globalData: {
    userInfo: null
  }
})