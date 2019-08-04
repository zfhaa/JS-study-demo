/**
 * 判断一个数是不是奇数
 * @param {number} n 
 */
function isOdd(n) {
    return n % 2 !== 0;
}
/**
 * 判断一个数是不是素数
 * @param {number} n 
 */
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
/**
 * 对数组求和
 * @param {*} arr 
 */
function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
/**
 * 得到数组中的最大值,如果长度为0返回undefined
 * @param {*} arr 
 */
function maxOfArray(arr) {
    if (arr.length === 0) {
        return;
    }
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


/**
 * 得到数组中的最小值,如果长度为0返回undefined
 * @param {*} arr 
 */
function minOfArray(arr) {
    if (arr.length === 0) {
        return;
    }
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
/**
 * 判断一个数组是不是稀松数组
 * @param {*} arr 
 */
function hasEmptyInArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (!(i in arr)) {
            return true;
        }
    }
    return false;
}
/**
 * 判断某年是不是闰年
 * @param {*} year 
 */
function isLeap(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
/**
 * 得到某年某月的天数
 * @param {*} year 
 * @param {*} month 
 */
function getDays(year, month) {
    if (month === 2) {
        return isLeap(year) ? 29 : 28;
    } else if (month < 8 && isOdd(month) || month >= 8 && !isOdd(month)) {
        return 31;
    } else {
        return 30;
    }
}
/**
 * 得到某个数组中出现次数最多的数字和频率
 * @param {*} arr 
 */
function getTopFreqInArray(arr){
    var recoad ={};
    var n = arr[i];
    for(var i =0;i<arr.length;i++){
        if(recoad[n]){
            recoad[n]++;
        }else{
             recoad[n]=1;
        }
    }
    var result;
    for(var prop in recoad){
        if(!result||recoad[prop]>result.frequency){
            result ={
                number : prop,
                frequency:recoad[prop]
            }
        }
    }
    console.log(result);
}