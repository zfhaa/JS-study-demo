if (!this.myPlugin) {
    this.myPlugin = {};
}
/**
 * 动画
 */
this.myPlugin.Animate = function (option) {
    //默认配置
    var defaultOption = {
        duration: 16, //默认间隔时间
        total: 1000, //默认总时间
    };
    // this.option= Object.assign({},defaultOption,option);
    this.option = myPlugin.mixin(defaultOption, option);
    this.timer = null; //计时器的id
    this.number = Math.ceil(this.option.total / this.option.duration); //运动总次数
    this.curNumber = 0; //当前运动的次数
    this.curDate = myPlugin.clone(this.option.begin); //当前状态
    this.distance = {}; //所有属性运动的总距离
    this.everyDistance = {}; //所有属性每次运动的距离
    for (var prop in this.option.begin) {
        this.distance[prop] = this.option.end[prop] - this.option.begin[prop];
        this.everyDistance[prop] = this.distance[prop] / this.number;
    }
}
/**
 * 开始动画
 */
this.myPlugin.Animate.prototype.start = function () {
    
    if (this.timer) {
        return; //如果之前已经存在计时器，则不做任何处理
    }
    var that = this
    that.timer = setInterval(function () {
        //改变that.curDate
        for(var prop in that.curDate){
            that.curDate[prop]+=that.everyDistance[prop];
        }
        console.log(that.curDate);
        that.curNumber++;
      if(that.curNumber===that.number){
          that.stop();
      }
    }, that.option.duration);
}
/**
 * 停止动画
 */
this.myPlugin.Animate.prototype.stop = function () {
    clearInterval(this.timer);
    timer = null;
}

var animate = new this.myPlugin.Animate({
    total: 3000,
    duration: 30,
    begin: {
        a: 100,
        b: 150,
        c: 0
    },
    end: {
        a: 1000,
        b: 0,
        c: -3000
    }
});

console.log(animate)