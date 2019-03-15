Page({
  onReady () {
    // 获取组件
    this.message = this.selectComponent('#message');
  },

  showMessage (event) {
    var type = event.target.dataset.type;
    var message = event.target.dataset.message;

    this.message.show({
      type,
      message
    })
  }
})
