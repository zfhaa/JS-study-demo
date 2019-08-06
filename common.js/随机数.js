/**
 * 得到一个最小数和最大数之间的随机整数
 * parseInt去掉小数点
 * @param {*} min 最小值
 * @param {*} max 最大值 （取不到）
 */
function getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}