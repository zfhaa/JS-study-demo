if (!window.myPlugin) {
    window.myPlugin = {};
}

window.myPlugin.openConfirm = (function () {

    var divModal,
        divCenter;
    /**
     * 打开一个确认对话框
     */

    function openConfirm() {
        initModal();
        initCenterDiv()
        initDivCenterContent()
    }
    /**
     * 初始化朦层
     */

    function initModal() {

        if (!divModal) {
            divModal = document.createElement("div");
            divModal.style.position = "fixed";
            divModal.style.background = "rgba(0,0,0,.2)"
            divModal.style.width = divModal.style.height = "100%";
            divModal.style.left = divModal.style.top = 0;
            document.body.appendChild(divModal);
        }
        divModal.style.display = "block";
    }
    /**
     * 初始化中间的div
     */
    function initCenterDiv() {
        if (!divCenter) {
            divCenter = document.createElement("div");
            divCenter.style.position = "absolute";
            divCenter.style.width = "260px";
            divCenter.style.height = "160px";
            divCenter.style.background = "#fff";
            divCenter.style.left = divCenter.style.right = divCenter.style.top = divCenter.style.bottom = 0;
            divCenter.style.margin = "auto";
            divModal.appendChild(divCenter);
        }
    }

    function initDivCenterContent() {
        //弹框头部
        var div = document.createElement("div");
        div.style.background = "#eee";
        div.style.height = "35px";
        div.style.padding = "5px 20px 0px 20px";
        div.style.boxSizing = "border-box";
        div.innerHTML =
            `<span style="float:left;" >信息</span>
        <span style="float:right; cursor:pointer">
        <img style="width:18px;height:18px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABeklEQVRYR82X7U0DMQyGn04AG7QDUEE3YANYgR/0D39gAmACYANGoBOAygAwwrEBTAB6hYOqU9vYidIj0ulO9+H3cWznnBG/YwLcAUd2bbebnDrgHbgCupEJvgH7wMIeNlE2o3LyBPgEZgJ4shuzHYgnxwQhpxcCEMkLcNrS7TW2pTkWwDdwC9zsGEB61zkA5YVmqMXIAihOz5atjxUEckJ2HoBVO1kAfag4HQJnvY+9PElczvRtZAEkUgOxTVy2XQClEDnxEEAUwiMeBvBCeMWLAHIQEfFigE0QUfEqgD7EBXBuf9JIubqrYFPNy+tX4MBeiIhXz0CahSUwHQJgNeYKwbxgxSwOwbqEK1kxiwC2ZXsUIgzgKbUIRAjAI56qxQvhBoiIRyBcACXiXogsQI24ByILoC5GHdFlYTfUh7iPtmRptRusKfX2faXv/YVgyI3J5F9szbQz1m51z5JOiddyHAM6vtRDaAY0BKEsVeaPW6oDH+awqqv7Acr6sWiLKfHeAAAAAElFTkSuQmCC"></img></span>`
        divCenter.appendChild(div);
        //弹框中间部分
        div = document.createElement("div");
        div.style.height = "75px";
        div.style.padding = "20px 20px 20px 20px";
        div.style.boxSizing = "border-box";
        div.innerHTML = `<span>确定要退出吗？</span>`
        divCenter.appendChild(div);
        //创建两个按钮
        div = document.createElement("div");
        div.style.height = "50px";
        div.style.padding = "10px 20px 10px 20px";
        div.style.boxSizing = "border-box";
        div.style.textAlign = "right";
        div.innerHTML = `<button>确定</button>
       <button>取消</button>`
        divCenter.appendChild(div);
    }


    return openConfirm;
}())