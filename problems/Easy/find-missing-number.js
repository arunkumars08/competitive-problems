/*
    http://www.practice.geeksforgeeks.org/problem-page.php?pid=1533
    Find missing number

    Input:                    
    2                                        
    4                                        
    1 4 3                           
    5
    2 5 3 1
    Output:
    2
    4

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

var findMissingNumber = function (input) {
    var missing;
    var len = input.length;
    var currentSum = sumArray(input);
    missing = ((len + 1)*(len + 2) / 2) - currentSum;
    return missing;
}