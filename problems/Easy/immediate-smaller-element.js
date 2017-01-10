/*
    http://www.practice.geeksforgeeks.org/problem-page.php?pid=525
    Input
    2
    5
    4 2 1 5 3
    6
    5 6 2 3 1 7

    Output
    2 1 -1 3 -1
    -1 2 -1 1 -1 -1
*/


var findImmediateSmall = function(input) {
    var len = input.length;
    var result = [];
    for(var i = 0; i < len; ++ i) {
        if(!input[i + 1]) result.push(-1);
        else {
            if(input[i + 1] < input[i]) result.push(input[i + 1]);
            else result.push(-1);
        }
    }
    return result;
}