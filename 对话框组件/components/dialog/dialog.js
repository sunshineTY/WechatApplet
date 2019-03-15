Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    height: {
      type: String,
      value: '60px'
    },
    title: {
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 'Hello World'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确定'
    }
  },
  data: {
    // 控制组件的显隐
    isShow: false,
    // 动画内容
    boxAmt: false
  },
  methods: {
    /**
     * 共有方法，提供给使用该组件的页面调用 
     */
    
    // 显示组件
    show () {
      var _this = this;
      this.setData({
        isShow: true
      })
      setTimeout(() => {
        this.setData({
          boxAmt: true
        })
      }, 30)
    }, 

    // 隐藏组件
    hide () {
      this.setData({
        boxAmt: false
      })
      setTimeout(() => {
        this.setData({
          isShow: false
        })
      }, 300);
    },

    /*
     * 内部私有方法建议以下划线开头
     * triggerEvent 用于触发事件
     */
    _cancelEvent () {
      this.triggerEvent('cancelEvent');
    },

    _confirmEvent () {
      this.triggerEvent('confirmEvent');
    }

  }
})