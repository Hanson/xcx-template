// custom-tab-bar/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    selected: 0,
    list: []
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
