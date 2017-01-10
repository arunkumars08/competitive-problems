/*
    http://www.practice.geeksforgeeks.org/problem-page.php?pid=538

    Second Largest element in an array

    Input
    2
    5
    89 24 75 11 23
    6
    56 42 21 23 65 20

    Output
    75
    56

*/

var secondLargestElement = function (input) {

    var len = input.length;
    var max = input[0], secondMax;

    for(var i = 1, j = len - 1; i < len / 2 || i <= j; ++ i, -- j) {
        if(max < input[i]) {
            secondMax = max;
            max = input[i];
        }
        else {
            secondMax = secondMax > input[i] ? secondMax : input[i];
        }
        if(max < input[j]) {
            secondMax = max;
            max = input[j];
        }
        else {
            secondMax = secondMax > input[j] ? secondMax : input[j];
        }
    }
    return secondMax;
}