
var {Delay} = require('../../static/lib/delay.js');

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: {
    isShow: true,
    msglist: [],
    idx: 0
  },
  methods: {
    /**
     * 共有方法，提供给使用该组件的页面调用 
     */
    /**
     * 显示组件
     * o [String, Object]
     * String时消息
     * Object.message、Object.type
     */
    show (o) {

      var list = this.data.msglist;
      var nowtime = new Date().getTime();
      if ( o.type ) {
        o.type = o.type == 'success' || o.type == 'warning' || o.type == 'error' ? o.type : 'info';
      }

      list.push({
        type: o.type ? o.type : 'info',
        message: o.message ? o.message : o,
        time: nowtime,
        messageAmt: false
      })

      this.setData({
        msglist: list
      })
      
      new Delay(() => {
        this.setData({
          isShow: true
        })
      }).then(() => {
        var arr = this.data.msglist
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].time == nowtime) {
            arr[i].messageAmt = true;
            this.setData({
              msglist: arr
            })
            break;
          }
        }
      }).do();

      setTimeout(() => {
        this.hide();
      }, 2000)
    },
    hide () {

      new Delay(() => {
        var arr = this.data.msglist;
        var idx = this.data.idx;

        if (arr.length > 0) {
          arr[idx].messageAmt = false;
        }
        this.setData({
          msglist: arr,
          idx: idx + 1
        })
      }).then(400, () => {
        if (this.data.msglist.length <= this.data.idx) {
          this.setData({
            isShow: false,
            msglist: [],
            idx: 0
          })
        }
      }).do();
    }
  }
})