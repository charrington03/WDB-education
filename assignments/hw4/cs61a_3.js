/*
--- Q1: NUM EIGHTS ---
def num_eights(x):
    """Returns the number of times 8 appears as a digit of x.

    >>> num_eights(3)
    0
    >>> num_eights(8)
    1
    >>> num_eights(88888888)
    8
    >>> num_eights(2638)
    1
    >>> num_eights(86380)
    2
    >>> num_eights(12345)
    0
    >>> from construct_check import check
    >>> # ban all assignment statements
    >>> check(HW_SOURCE_FILE, 'num_eights',
    ...       ['Assign', 'AugAssign'])
    True
    """
    "*** YOUR CODE HERE ***"
*/

function num_eights(x) {
    if (x % 10 === 8) {
        return num_eights(Math.floor(x/10)) + 1;
    } else if (x < 10) {
        return 0;
    } else {
        return num_eights(Math.floor(x/10));
    }
}

console.log(num_eights(8)); // 1
console.log(num_eights(88888)); // 5
console.log(num_eights(80128)); // 2


/*
--- Q2: PING PONG ---
*/

function pingpong(n) {

    function pingpong_helper(res, i , step) {
        if (i === n) {
            return res;
        } else if (i % 8 === 0 || num_eights(i) > 0) {
            return pingpong_helper(res - step, i + 1, -step);
        } else {
            return pingpong_helper(res + step, i + 1, step);
        }
    }
    
    return pingpong_helper(1, 1, 1);
}

console.log(pingpong(8)); // 8
console.log(pingpong(10)); // 6
console.log(pingpong(15)); // 1
console.log(pingpong(22)); // -2

/*
--- Q3: MISSING DIGITS ---
*/

function missing_digits(n) {
    if (n < 10) {
        return 0;
    }
    let last = n % 10;
    let rest = Math.floor(n/10);
    return Math.max(0, last - (rest % 10) - 1) + missing_digits(rest);
}

console.log(missing_digits(19)); // 7
console.log(missing_digits(12345)); // 0
console.log(missing_digits(3558)); // 3

/*
--- Q4: COUNT COINS ---
*/
function get_next_coin(coin) {
    if (coin === 1) {
        return 5;
    } else if (coin === 5) {
        return 10;
    } else if (coin === 10) {
        return 25;

    }
}

function count_coins(change) {

    function helper(change, smallest) {
        if (change === 0) {
            return 1;
        }
        if (change < 0) {
            return 0;
        }
        if (smallest == null) {
            return 0;
        }

        without_coin = helper(change, get_next_coin(smallest));
        with_coin = helper(change - smallest, smallest);
        return without_coin + with_coin;
    }

    return helper(change, 1);
}

// console.log(count_coins(15)); // 6
console.log(count_coins(5)); // 4
// console.log(count_coins(100)); // 242
