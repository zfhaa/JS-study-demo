/**
 * 全局配置
 */
// var config = {
//     width: 500,
//     height: 500,
//     row: 3, //行数
//     col: 3, //列数
//     img: "./img/lol.png", //图片路径
//     gameDom: document.getElementById("game") //游戏的根元素
// }
// // 每一个小块的宽度
// config.blockWidth = config.width / config.col;
// // 每一个小块的高度
// config.blockHeight = config.height / config.row;

// config.total = config.row * config.col; //总数

// var emptyBlock; //空白元素

// /**
//  * 生成一个小方块的函数，直接添加到gameDom中
//  */
// function createBlockDom(x, y, apendToPage, correctX, correctY) {
//     var dom = document.createElement("div");
//     dom.style.width = config.blockWidth + "px";
//     dom.style.height = config.blockHeight + "px";
//     dom.style.background = `url(${config.img})`;
//     dom.style.border = "1px solid #fff";
//     //设置该样式，是为了让宽高包含边框的尺寸
//     dom.style.boxSizing = "border-box";
//     dom.style.position = "absolute";
//     //1. 元素位置？ 从一个有限的坐标中随机取一个
//     dom.style.left = x + "px";
//     dom.style.top = y + "px";
//     dom.correctX = correctX;
//     dom.correctY = correctY;
//     //2. 背景图位置？根据正确位置来算
//     dom.style.backgroundPosition = `-${correctX}px -${correctY}px`;
//     dom.style.cursor = "pointer";

//     dom.onclick = function () {
//         // 将当前元素的坐标，与空白元素的坐标交换
//         //判断是否相邻
//         var xdis = Math.abs(parseFloat(dom.style.left) - parseFloat(emptyBlock.style.left))
//         xdis = parseInt(xdis);
//         var ydis = Math.abs(parseFloat(dom.style.top) - parseFloat(emptyBlock.style.top))
//         ydis = parseInt(ydis);

//         if (xdis + ydis !== parseInt(config.blockHeight) &&
//             xdis + ydis !== parseInt(config.blockWidth)) {
//             return;
//         }

//         var x = dom.style.left;
//         var y = dom.style.top;
//         dom.style.left = emptyBlock.style.left;
//         dom.style.top = emptyBlock.style.top;
//         emptyBlock.style.left = x;
//         emptyBlock.style.top = y;
//         if (isWin()) {
//             document.querySelector("h1").innerHTML = "德玛西亚！！！";
//         }
//     }

//     if (apendToPage) {
//         config.gameDom.appendChild(dom);
//     }
//     else {
//         emptyBlock = dom;
//     }
// }

// function isWin() {
//     for (let i = 0; i < config.gameDom.children.length; i++) {
//         const dom = config.gameDom.children[i];
//         if (parseInt(dom.correctX) !== parseInt(dom.style.left) ||
//             parseInt(dom.correctY) !== parseInt(dom.style.top)) {
//             return false;
//         }
//     }
//     return true;
// }

// /**
//  * 得到一个数组，数组中包含所有正确的坐标
//  */
// function getCorrectPoints() {
//     var arr = [];
//     //循环行和列
//     for (var i = 0; i < config.row; i++) {
//         for (var j = 0; j < config.col; j++) {
//             arr.push({
//                 x: j * config.blockWidth,
//                 y: i * config.blockHeight
//             })
//         }
//     }
//     return arr;
// }

// /**
//  * 根据最小值和最大值（取不到）得到一个随机数
//  * @param {*} min 
//  * @param {*} max 
//  */
// function getRandom(min, max) {
//     var dec = max - min;
//     return Math.floor(Math.random() * dec + min);
// }

// /**
//  * 洗牌
//  */
// function shuffle(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         const ele = arr[i];
//         //随机生成下标，交换
//         var index = getRandom(0, arr.length - 1);
//         arr[i] = arr[index];
//         arr[index] = ele;
//     }
// }

// /**
//  * 生成游戏区域
//  */
// function setGameArea() {
//     //1. 初始化游戏根元素
//     config.gameDom.style.width = config.width + "px";
//     config.gameDom.style.height = config.height + "px";
//     config.gameDom.style.border = "2px solid #ccc";
//     config.gameDom.style.position = "relative";
//     //2. 生成所有小方块（gameDom的子元素）
//     var points = getCorrectPoints(); //得到正确坐标的数组
//     shuffle(points);
//     var correctPoints = getCorrectPoints();
//     for (let i = 0; i < config.total; i++) {
//         if (i < config.total - 1) {
//             //不是最后生成的方块
//             createBlockDom(points[i].x, points[i].y, true, correctPoints[i].x, correctPoints[i].y);
//         }
//         else {
//             createBlockDom(points[i].x, points[i].y, false, correctPoints[i].x, correctPoints[i].y);
//         }
//     }
// }

// setGameArea();


















/**
 * 游戏配置
 */
var gameConfig = {
    width: 500,
    height: 500,
    rows: 3, //行数
    cols: 3, //列数
    isOver: false, //游戏是否结束
    imgurl: "img/lol.png", //图片路径  路径是相对的是页面的路径
    dom: document.getElementById("game") //游戏的dom对象
};

//每一个小块的宽高
gameConfig.pieceWidth = gameConfig.width / gameConfig.cols;
gameConfig.pieceHeight = gameConfig.height / gameConfig.rows;
//小快的数量
gameConfig.pieceNumber = gameConfig.cols * gameConfig.rows;


var blocks = []; //包含小方块信息的数组

function isEqual(n1, n2) {
    return parseInt(n1) === parseInt(n2);
}
/**
 * 小方块的构造函数
 * @param {*} left 
 * @param {*} top 
 * @param {*} isVisible 是否可见
 */
function Block(left, top, isVisible) {
    this.left = left; //当前的横坐标
    this.top = top; //当前的纵坐标
    this.correctLeft = this.left; //正确的横坐标
    this.correctTop = this.top; //正确的纵坐标


    this.dom = document.createElement("div");
    this.dom.style.width = gameConfig.pieceWidth + "px";
    this.dom.style.height = gameConfig.pieceHeight + "px";
    this.dom.style.background = `url("${gameConfig.imgurl}")-${this.correctLeft}px -${this.correctTop}px`
    this.dom.style.border = "1px solid #fff";
    this.dom.style.boxSizing = "border-box";
    this.dom.style.cursor = "pointer";
    this.dom.style.position = "absolute";
    this.dom.style.transition = ".5s"; //css属性变化时在0.5秒内完成
    if (!isVisible) {
        this.dom.style.display = "none";
    }
    gameConfig.dom.appendChild(this.dom);


    this.show = function () {
        //根据当前的left，top，重新设置div的位置
        this.dom.style.left = this.left + "px";
        this.dom.style.top = this.top + "px";

    }
    //判断当前方块是否在正确的位置上
    this.isCorrect = function () {
        return isEqual(this.left, this.correctLeft) && isEqual(this.top, this.correctTop);
    }
    this.show();
}

/**
 * 初始化游戏
 */
function init() {
    //1.初始化游戏的容器
    initGameDom();
    //2.初始化小方块
    //2.1 准备好一个数组，数组的每一项是一个对象，记录了每一个小方块
    initBlocksArray();
    //2.2数组洗牌

    shuffle();
    //3.注册点击事件
    regEvent();
    /**
     * 点击事件
     */
    function regEvent() {
        //找到看不见的方块
        var inVisibleBlock = blocks.find(function (b) {
            return b.dom.style.display === "none";

        });
        blocks.forEach(function (b) {
            b.dom.onclick = function () {
                if (gameConfig.isOver) {
                    return;
                }
                //判断是否可以交换
                if (b.top === inVisibleBlock.top && isEqual(Math.abs(b.left - inVisibleBlock.left), gameConfig.pieceWidth) ||
                    b.left === inVisibleBlock.left && isEqual(Math.abs(b.top - inVisibleBlock.top), gameConfig.pieceHeight)) {
                    // 交换当前方块和看不见的方块的坐标位置
                    exchange(b, inVisibleBlock);
                    //游戏结束判定
                    isWin();
                }


            }

        })
    }

    /**
     * 游戏结束判定
     */
    function isWin() {
        var wrongs = blocks.filter(function (item) {
            return !item.isCorrect();
        });
        console.log(wrongs.length);
        if (wrongs.length === 0) {
            gameConfig.isOver = true;
            //游戏结束 ，去掉小方块边框
            blocks.forEach(function (b) {
                b.dom.style.border = "none";
                b.dom.style.display = "block";
            });
        }

    }

    /**
     * 随机数，能取到最大值
     * @param {*} min 
     * @param {*} max 
     */
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }
    /**
     * 交换两个方块的left和top
     * @param {*} b1 
     * @param {*} b2 
     */
    function exchange(b1, b2) {
        var temp = b1.left;
        b1.left = b2.left;
        b2.left = temp;
        //2.交换top
        temp = b1.top;
        b1.top = b2.top;
        b2.top = temp;

        b1.show();
        b2.show();
    }

    /**
     * 给blocks数组洗牌
     */
    function shuffle() {
        for (var i = 0; i < blocks.length - 1; i++) {
            //随机产生一个下标
            var index = getRandom(0, blocks.length - 2);
            //将数组的当前项与随机项交换left和top值

            exchange(blocks[i], blocks[index]);
        }
    }

    /**
     * 初始化一个小方块的数组
     */
    function initBlocksArray() {
        for (var i = 0; i < gameConfig.rows; i++) {
            for (var j = 0; j < gameConfig.cols; j++) {
                //i行号 ， j列号
                var isVisible = true;
                if (i === gameConfig.rows - 1 && j === gameConfig.cols - 1) {
                    isVisible = false;
                }
                var b = new Block(j * gameConfig.pieceWidth, i * gameConfig.pieceHeight, isVisible)
                blocks.push(b);
            }

        }

    }


    /**
     * 初始化游戏容器
     */
    function initGameDom() {
        gameConfig.dom.style.width = gameConfig.width + "px";
        gameConfig.dom.style.height = gameConfig.height + "px";
        gameConfig.dom.style.border = "2px solid #ccc";
        gameConfig.dom.style.position = "relative";
    }
}
init();