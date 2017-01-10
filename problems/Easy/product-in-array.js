/*
    http://www.geeksforgeeks.org/pair-with-given-product-set-1-find-if-any-pair-exists/
    Pair with given product | Set 1 (Find if any pair exists)

    Input : arr[] = {10, 20, 9, 40};
        int x = 400;
    Output : Yes

    Input : arr[] = {10, 20, 9, 40};
            int x = 190;
    Output : No

    Input : arr[] = {-10, 20, 9, -40};
            int x = 400;
    Output : Yes

    Input : arr[] = {-10, 20, 9, 40};
            int x = -400;
    Output : Yes

    Input : arr[] = {0, 20, 9, 40};
            int x = 0;
    Output : Yes

*/


var checkIfProductExist = function(input, product) {

    var len = input.length;
    var hashTable = [];

    for(var i = 0; i < len; ++ i) {

        if(input[i] === 0) {
            if(product === 0) {
                return true;
            }
        }
        else {
            if(product % input[i] === 0) {
                if(hashTable.indexOf(product / input[i]) !== -1) return true;
                else hashTable.push(input[i]);
            }
        }

    }
    return false;
}

