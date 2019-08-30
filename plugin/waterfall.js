if (!window.myPlugin) {
    window.myPlugin = {};
}
this.myPlugin.createWaterFall = function (option) {
    var defaulOption = { //默认配置
        minHGap: 10, //水平方向的最小间隙
        minVGap: 10, //垂直方向的最小间隙
        imgSrcs: [], //图片路径的数组
        imgWidth: 200, //单张图片的宽度
        container: document.body //容器
    };
    var option = Object.assign({}, defaulOption, option);

    //应用函数

    createImg();
    handleParent();
    setImgPosition();




    /**
     * 创建图片元素
     */

    function createImg() {
        //循环图片路径数组
        for (var i = 0; i < option.imgSrcs.length; i++) {
            var img = document.createElement("img");
            img.src = option.imgSrcs[i];
            img.style.width = option.imgWidth + "px";
            img.style.position = "absolute";
            option.container.appendChild(img);
        }
    }

    /**
     * 设置每张图片的坐标
     */
    function setImgPosition() {
        var info = getHorizontalInfo();
        console.log(info);
    }

    function getHorizontalInfo() {
        var obj = {};
        obj.containerWidth = option.container.clientWidth;
        //计算每行图片的数量
        obj.number = (obj.containerWidth + option.minHGap) / (option.imgWidth + option.minHGap);
        obj.number = Math.floor(obj.number); //如果不是整数，向下取整
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