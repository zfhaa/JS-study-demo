if (!window.myPlugin) {
    window.myPlugin = {};
}
this.myPlugin.createWaterFall = function (option) {
    var defaulOption = { //默认配置
        minGap: 10, //最小间隙

        imgSrcs: [], //图片路径的数组
        imgWidth: 200, //单张图片的宽度
        container: document.body //容器
    };
    var option = Object.assign({}, defaulOption, option);
    var imgs = []; //存放所有的图片dom 对象

    //应用函数

    createImg();
    handleParent();


    //窗口尺寸变化事件
    var debounce = myPlugin.debounce(setImgPosition, 300)
    window.onresize = debounce;


    /**
     * 创建图片元素
     */

    function createImg() {
        var debounce = myPlugin.debounce(setImgPosition, 50);
        //循环图片路径数组
        for (var i = 0; i < option.imgSrcs.length; i++) {
            var img = document.createElement("img");
            img.src = option.imgSrcs[i];
            img.style.width = option.imgWidth + "px";
            img.style.position = "absolute";
            img.style.transition = ".5s"; //实现过度
            imgs.push(img);
            img.onload = debounce; //函数节流
            option.container.appendChild(img);
        }
    }

    /**
     * 设置每张图片的坐标
     */
    function setImgPosition() {
        var info = getHorizontalInfo();
        var arr = new Array(info.number); //存放每一张下一张图片的top值
        arr.fill(0);

        imgs.forEach(function (img) {
            //设置图片的坐标
            var minTop = Math.min.apply(null, arr);

            img.style.top = minTop + "px";
            var index = arr.indexOf(minTop); //找到对应的列编号
            arr[index] += img.clientHeight + info.gap;


            //横坐标
            img.style.left = index * (option.imgWidth + info.gap) + "px";

        });
        //设置容器高度
        var maxTop = Math.max.apply(null,arr);
        option.container.style.height = maxTop - info.gap +"px";

    }
    /**
     * 得到图片水平方向上的信息
     */
function getHorizontalInfo() {
    var obj = {};
    //容器宽度
    obj.containerWidth = option.container.clientWidth;
    //计算每行图片的数量
    obj.number = (obj.containerWidth + option.minGap) / (option.imgWidth + option.minGap);
    obj.number = Math.floor(obj.number); //如果不是整数，向下取整
    //计算水平空隙
    obj.gap = (obj.containerWidth - obj.number * option.imgWidth) / (obj.number - 1);
    return obj;
}


    /**
     * 处理父元素，因为图片都是决定定位，父元素必须是一个定位元素
     */
    function handleParent() {
        var style = getComputedStyle(option.container);
        if (style.position === "static") {
            option.container.style.position = "relative";
        }
    }
}




































//自己写的 ，粗略

// if (!window.myPlugin) {
//     window.myPlugin = {};
// }


// this.myPlugin.createWaterFall = function (option) {
//     var objOption = {
//         minGap: 10,
//         imgWidth: 200,
//         container: document.querySelector("container"),
//         imgSrcs: [],
//     };
//     var option = Object.assign({}, objOption, option);
//     var imgs = [];




//     createImg();
//     ParentPosition();
   

//   window.onresize = function(){
//     setImgPosition();
//   }

//     function ParentPosition() {
//         var style = getComputedStyle(option.container);
//         if (style.position === "static") {
//             option.container.style.position = "relative";
//         }
//     }




//     function createImg() {
//         for (var i = 0; i < option.imgSrcs.length; i++) {
//             var img = document.createElement("img");
//             img.src = option.imgSrcs[i];
//             img.style.width = option.imgWidth + "px";
//             img.style.position = "absolute";
//             img.style.transition = "0.5s"
//             imgs.push(img);
//             img.onload = function(){
//                 setImgPosition();
//             }
//             option.container.appendChild(img);
//         }
//     }


    

//     function getHorizontalInfo() {
//         var obj = [];
//         obj.containerWidth = option.container.clientWidth;
//         obj.number = (obj.containerWidth + option.minGap) / (option.imgWidth + option.minGap);
//         obj.number = Math.floor(obj.number);
//         obj.gap = (obj.containerWidth - obj.number * option.imgWidth) / (obj.number - 1);
//         return obj;

//     }

   


//     function setImgPosition() {
//         var info = getHorizontalInfo();
//         var arr = new Array(info.number);
//         arr.fill(0);


//         imgs.forEach(function (img) {
//             var minTop = Math.min.apply(null, arr);
//             img.style.top = minTop + "px";
//             var index = arr.indexOf(minTop); 
//             console.log(index)     
//             arr[index] += img.clientHeight + info.gap;    
//             img.style.left = index * (option.imgWidth + info.gap) + "px";
//         });
//         //设置容器高度
//          var maxTop = Math.max.apply(null,arr);
//         option.container.style.height = maxTop - info.gap +"px";

//     }
// }