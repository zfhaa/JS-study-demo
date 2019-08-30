if (!this.myPlugin) {
    this.myPlugin = {};
}

this.myPlugin.inherit = (function () {
    var Temp = function () {}
    return function (son, father) {
        Temp.prototype = father.prototype;
        son.prototype = new Temp();
        son.prototype.constructor = son;
        son.prototype.uber = father.prototype;
    }
}());
/**
 * 混合，obj1混合到obj2中，产生一个新对象，
 */
this.myPlugin.mixin = function (obj1, obj2) {
    // var newObj ={};
    // for(var prop in obj2){
    //     newObj[prop] = obj2[prop];
    // }
    // for(var prop in obj1){
    //     if(!(prop in obj2)){
    //         newObj[prop]=obj1[prop];
    //     }
    // }
    return Object.assign({}, obj1, obj2);

}
/**
 * 深度克隆
 */
this.myPlugin.clone = function (obj, deep) {
    if (Array.isArray(obj)) {
        if (deep) {
            var newArr = [];
            for (var i = 0; i < obj.length; i++) {
                newArr.push(this.clone(obj[i], deep));
            }
            return newArr;
        } else {
            return obj.slice(); //复制数组   
        }

    } else if (typeof obj === "object") {
        var newObj = {};
        for (var prop in obj) {
            if (deep) {
                //深度克隆
                newObj[prop] = this.clone(obj[prop], deep);
            } else {
                newObj[prop] = obj[prop]
            }

        }
        return newObj;
    } else {
        //函数、原始类型
        return obj;
    }

}
/**
 * 函数防抖
 */
this.myPlugin.debounce = function (callback, time) {
    var timer;
    return function () {
        clearTimeout(timer); //清除之前的计时
        var args = arguments; //利用闭包保存参数数组
        timer = setTimeout(function () {
            callback.apply(null, args);
        }, time);
    }
}

/**
 * 函数节流
 */
this.myPlugin.throttle = function (callback, time) {
    var timer;
    return function () {
        if (timer) {
            return;
        }
        var args = arguments; //利用闭包保存参数数组
        timer = setTimeout(function () {
            callback.apply(null, args);
            timer = null;
        }, time);
    }
}

/**
 * 科里化函数
 */
this.myPlugin.curry= function(func){
    //得到下标1开始的参数,即要固定的参数
    var args = Array.prototype.slice.call(arguments,1); //把函数参数当数组全传进去，分割得到下标为1以后的参数
    var that = this;
    return function(){
        var curArgs = Array.from(arguments);//当前调用的参数
        var totalArgs = args.concat(curArgs);
        if(totalArgs.length>=func.length){
            //参数数量够了
            return func.apply(null,totalArgs);
        }
        else{
            //参数数量仍然不够
            totalArgs.unshift(func);
            return that.curry.apply(that,totalArgs);
        }
    }
}
/**
 * 函数管道
 */
this.myPlugin.pipe = function(){
    var  args =Array.from(arguments);
    return function(val){
        for(var i = 0;i<args.length;i++){
            var func = args[i];
            val =func(val);
        }
        return val;
    }
}