
Page({
  onReady () {
    this.dialog1 = this.selectComponent('.dialog1');
  },
  
  showDialog1 () {
    this.dialog1.show();
  },
  cancleFn () {
    this.dialog1.hide();
  },
  okFn () {
    this.dialog1.hide();
  }
})
