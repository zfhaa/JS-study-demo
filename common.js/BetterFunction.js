var BetterFunction = {
    /**
     * 判断一个数是不是奇数
     * @param {number} n 
     */
    isOdd: function (n) {
        return n % 2 !== 0;
    },
    /**
     * 判断一个数是不是素数
     * @param {number} n 
     */
    isPrime: function (n) {
        if (n < 2) {
            return false;
        }
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    },
    /**
     * 对数组求和
     * @param {*} arr 
     */
    sumOfArray: function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },
    /**
     * 得到数组中的最大值,如果长度为0返回undefined
     * @param {*} arr 
     */
    maxOfArray: function (arr) {
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
    },
    /**
     * 得到数组中的最小值,如果长度为0返回undefined
     * @param {*} arr 
     */
    minOfArray: function (arr) {
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
    },
    /**
     * 判断一个数组是不是稀松数组
     * @param {*} arr 
     */
    hasEmptyInArray: function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (!(i in arr)) {
                return true;
            }
        }
        return false;
    },
    /**
     * 判断某年是不是闰年
     * @param {*} year 
     */
    isLeap: function (year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    /**
     * 得到某年某月的天数
     * @param {*} year 
     * @param {*} month 
     */
    getDays: function (year, month) {
        if (month === 2) {
            return this.isLeap(year) ? 29 : 28;
        } else if (month < 8 && this.isOdd(month) || month >= 8 && !this.isOdd(month)) {
            return 31;
        } else {
            return 30;
        }
    },
    /**(1)
     * 得到某个数组中出现次数最多的数字和频率
     * @param {*} arr 
     */
    getTopFreqInArray: function (arr) {
        var recoad = {};
        var n = arr[i];
        for (var i = 0; i < arr.length; i++) {
            if (recoad[n]) {
                recoad[n]++;
            } else {
                recoad[n] = 1;
            }
        }
        var result;
        for (var prop in recoad) {
            if (!result || recoad[prop] > result.frequency) {
                result = {
                    number: prop,
                    frequency: recoad[prop]
                }
            }
        }
        console.log(result);
    },
    /**(2)
     * 给指定的数组升序排序
     * @param {*} arr 
     * @param {Function} compare 比较大小，
     * 该函数有两个参数，代表数组中的两个元素，
     * 该函数返回一个数字，如果是正数，则第一个元素比第二个元素大，
     * 如果是0，则相等，
     * 如果是负数，则第一个元素比第二个元素小 
     */
    sort: function (arr, compare) {
        if (!compare) {
            compare = function (a, b) {
                if (a > b) {
                    return 1;
                } else if (a === b) {
                    return 0;
                } else {
                    return -1;
                }
            }
        }
        for (var i = 1; i < arr.length; i++) {
            for (var j = 0; j < arr.length - 1; j++) {
                //比较arr[j]和arr[j+1]
                if (compare(arr[j], arr[j + 1]) > 0) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1],
                        arr[j + 1] = temp;
                }
            }
        }
    },
    /**
     * 按照指定的条件对某个数组进行筛选
     * @param {*} arr 
     *  @param {Function} callback 回调函数，接收两个参数，
     * 分别表示数组的某一项和其下标，返回boolean，
     * 满足条件返回true，否则返回false 
     */
    filter: function (arr, callback) {
        //遍历数组，看每一项是否满足条件
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i], i)) {
                newArr.push(arr[i]); //如果满足条件就把arr[i]加到newArr中，最后newArr中全是满足条件的属性
            }
        }
        return newArr;
    },
    /**（3）
     * 从指定的数组中，查找第一个满足条件的元素,如果没有找到，返回underfined
     * @param {*} arr 
     * @param {*} callback 回调函数，接收两个参数，
     * 分别表示数组的某一项和其下标，返回boolean，
     * 满足条件返回true，否则返回false 
     */
    find: function (arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i], i)) {
                return arr[i];
            }
        }

    },
    /**
     * 按照指定的条件，得到某个数组中满足条件的元素数量
     * @param {*} arr 
     * @param {*} callback 回调函数，接收两个参数，
     * 分别表示数组的某一项和其下标，返回boolean，
     * 满足条件返回true，否则返回false 
     */
    count: function (arr, callback) {
        var sum=0;
        for (var i = 0; i < arr.length; i++) { 
            if (callback(arr[i], i)) {
                sum++;
            }
        }
        return sum;
    }
}
var arr = [23, 456, 45, 13, 46, 78, 44, 11];
var sum = BetterFunction.count(arr, BetterFunction.isPrime) ;
   

console.log(sum);

//(3)测试
// var arr = [23, 456, 45, 13, 46, 78, 44, 11];
// var elm = BetterFunction.find(arr, function (item) {
//     return BetterFunction.isPrime(item);
// });
// console.log(elm);
//(2)测试
// var arr = [23, 456, 45, 13, 46, 78, 44, 11];
// var newArr = BetterFunction.filter(arr, function (item) {
//     return BetterFunction.isPrime(item);//判断素数

// });

// console.log(newArr);


//(1)测试
//var arr = [{
//        name: "张三",
//        age: 21,
//        weight: 80
//    },
//    {
//        name: "李四",
//        age: 20,
//        weight: 65
//    },
//    {
//        name: "王五",
//        age: 22,
//        weight: 70
//    }
//];
//BetterFunction.sort(arr, function (a, b) {
//    return a.weight - b.weight;
//});
// var arr =[2,6,5,4,9,8,1];
// BetterFunction.sort(arr);
// console.log(arr);