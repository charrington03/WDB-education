/*
    def a_plus_abs_b(a, b):
    """Return a+abs(b), but without calling abs.

    >>> a_plus_abs_b(2, 3)
    5
    >>> a_plus_abs_b(2, -3)
    5
    >>> # a check that you didn't change the return statement!
    >>> import inspect, re
    >>> re.findall(r'^\s*(return .*)', inspect.getsource(a_plus_abs_b), re.M)
    ['return f(a, b)']
    """
    if b < 0:
        f = _____
    else:
        f = _____
    return f(a, b)

*/

function a_plus_abs_b(a, b) {
    if (b < 0) {
        // f = function(a,b) {return a - b}
        f = (a, b) => a - b;
    } else {
        // f = function(a,b) {return a + b}
        f = (a, b) => a + b;
    }
    return f(a, b);
}
console.log(a_plus_abs_b(2, 3)); // 5
console.log(a_plus_abs_b(2, -3)); // 5


/*
    def two_of_three(x, y, z):
        """Return a*a + b*b, where a and b are the two smallest members of the
        positive numbers x, y, and z.

        >>> two_of_three(1, 2, 3)
        5
        >>> two_of_three(5, 3, 1)
        10
        >>> two_of_three(10, 2, 8)
        68
        >>> two_of_three(5, 5, 5)
        50
        >>> # check that your code consists of nothing but an expression (this docstring)
        >>> # a return statement
        >>> import inspect, ast
        >>> [type(x).__name__ for x in ast.parse(inspect.getsource(two_of_three)).body[0].body]
        ['Expr', 'Return']
        """
        return _____
*/

function two_of_three(x, y, z) {
    return x*x + y*y + z*z - Math.max(x*x, y*y, z*z);
}
console.log(two_of_three(1, 2, 3)); // 5
console.log(two_of_three(5, 3, 1)); // 10
console.log(two_of_three(10, 2 ,8)); // 68
console.log(two_of_three(5, 5, 5)); // 50


/*
    def largest_factor(n):
        """Return the largest factor of n that is smaller than n.

        >>> largest_factor(15) # factors are 1, 3, 5
        5
        >>> largest_factor(80) # factors are 1, 2, 4, 5, 8, 10, 16, 20, 40
        40
        >>> largest_factor(13) # factor is 1 since 13 is prime
        1
        """
        "*** YOUR CODE HERE ***"
*/

function largest_factor(n) {
    for (i = n-1; i > 1; i--) {
        if (n % i === 0) {
            return i;
        }
    }
    return 1;
}

console.log(largest_factor(15)); // 5
console.log(largest_factor(80)); // 40
console.log(largest_factor(13)); // 1

/*
    def if_function(condition, true_result, false_result):
        """Return true_result if condition is a true value, and
        false_result otherwise.

        >>> if_function(True, 2, 3)
        2
        >>> if_function(False, 2, 3)
        3
        >>> if_function(3==2, 'equal', 'not equal')
        'not equal'
        >>> if_function(3>2, 'bigger', 'smaller')
        'bigger'
        """
        if condition:
            return true_result
        else:
            return false_result
*/

function if_function(condition, true_result, false_result) {
    if (condition) {
        return true_result;
    } else {
        return false_result;
    }
}

/* 
    def with_if_statement():
        """
        >>> result = with_if_statement()
        61A
        >>> print(result)
        None
        """
        if cond():
            return true_func()
        else:
            return false_func()
*/

function with_if_statement() {
    if (cond()) {
        return true_func();
    } else {
        return false_func();
    }
}

/*
    def with_if_function():
        """
        >>> result = with_if_function()
        Welcome to
        61A
        >>> print(result)
        None
        """
        return if_function(cond(), true_func(), false_func())
*/

function with_if_function() {
    return if_function(cond(), true_func(), false_func());
}

/*
    def cond():
        "*** YOUR CODE HERE ***"
*/

function cond() {
    return true;
}

/*
    def true_func():
        "*** YOUR CODE HERE ***"
*/

function true_func() {
    console.log('61A');
}

/*
    def false_func():
        "*** YOUR CODE HERE ***"
*/

function false_func() {
    console.log('Welcome to');
}

with_if_statement();
with_if_function();

/*
    def hailstone(n):
        """Print the hailstone sequence starting at n and return its
        length.

        >>> a = hailstone(10)
        10
        5
        16
        8
        4
        2
        1
        >>> a
        7
        """
        "*** YOUR CODE HERE ***"
*/

function hailstone(n) {
    var count = 1;
    while (n != 1) {
        console.log(n);
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = n*3 + 1;
        }
        count += 1
    }
    console.log(n);
    return count;
}