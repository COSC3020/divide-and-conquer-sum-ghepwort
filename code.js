function divideAndConquerSum(arr) {

    if (arr.length == 1)
        return arr[0];
    if (arr.length == 0)
        return 0;

    var lo = 0;
    var hi = arr.length;

    var loMiddle = Math.floor((lo + hi) * 1 / 3);
    var hiMiddle = Math.floor((lo + hi) * 2 / 3);

    var sum1 = divideAndConquerSum(arr.slice(lo, loMiddle));
    var sum2 = divideAndConquerSum(arr.slice(loMiddle, hiMiddle));
    var sum3 = divideAndConquerSum(arr.slice(hiMiddle, hi));

    return sum1 + sum2 + sum3;

}