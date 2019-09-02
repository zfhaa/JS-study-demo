var container = document.querySelector(".container");
var aHeight = 30; //每一个A元素的高度

container.onclick = function (e) {
    if (e.target.tagName === "H2") {
        var div = e.target.nextElementSibling;
        if (div.classList.contains("active")) { //如果点击的div已经包含active
            return;
        }
        //1. 去掉当前具有active样式的div
        var before = container.querySelector(".active");
        if (before) {
            hideDiv(before);
        }
        //2. 给当前的h2元素后面的div加上active

        showDiv(div);
    }
}
// if (e.target.tagName === "H2") {
//     var div = e.target.nextElementSibling;
//     if (div.classList.container("active")) {
//         return;
//     }
//     //1. 去掉当前具有active样式的div
//     var before = container.querySelector(".active");
//     if (before) {
//         hideDiv(before);
//     }
//     //2. 给当前的h2元素后面的div加上active

//     showDiv(div);
// }
// }

function hideDiv(div) {
    var height = div.clientHeight; //尺寸:得到当前高度
    var animate = new myPlugin.Animate({
        total: 300,
        begin: {
            height
        },
        end: {
            height: 0
        },
        onmove: function () {
            div.style.height = this.curData.height + "px";
        },
        onover: function () {
            div.classList.remove("active");
        }
    });
    animate.start();
}


function showDiv(div) {
    div.classList.add("active");
    div.style.height = 0;
    var targetHeight = div.children.length * aHeight;
    var animate = new myPlugin.Animate({
        total: 300,
        begin: {
            height: 0
        },
        end: {
            height: targetHeight
        },
        onmove: function () {
            div.style.height = this.curData.height + "px";
        }
    });
    animate.start();

}
// function showDiv(div) {
//     div.classList.add("active");
//     div.style.height = 0;
//     var targetHeight = div.children.length * aHeight;
//     var animate = new myPlugin.Animate({
//         total: 300,
//         begin: {
//             height: 0
//         },
//         end: {
//             height: targetHeight
//         },
//         onmove: function () {
//             div.style.height = this.curData.height + "px";
//         }
//     });
//     animate.start();
// }