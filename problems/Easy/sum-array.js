/*
    http://www.practice.geeksforgeeks.org/problem-page.php?pid=75

    Sum of array elements

    Input:
    2
    3
    3 2 1
    4
    1 2 3 4

    Output:
    6
    10
*/

var sumArray = function (input) {

    var len = input.length;
    var sum = 0;
    for(var i = 0, j = len - 1; i < len / 2 && i <= j; ++ i, -- j) {
        sum += input[i];
        sum += (i !== j ? input[j] : 0);
    }

    return sum;
}