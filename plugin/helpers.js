if(!this.myPlugin){
    this.myPlugin = {};
}

this.myPlugin.inherit = (function(){
    var Temp = function(){}
    return function (son,father){
        Temp.prototype = father.prototype;
        son.prototype = new Temp();
        son.prototype.constructor = son;
        son.prototype.uber = father.prototype;
    }
}());