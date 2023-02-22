let count = 0
function recursiveFibonacci(n: number): number {
    count++
    if (n < 2)
        return n
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

function iterativeFibonacci(n: number): number {
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        count++
        let fibo = arr[i - 1] + arr[i - 2]
        arr.push(fibo)
    }
    return arr[n]
}
function dynamicFibonacci() {
    interface NumberArray {
        [index: number]: number;
    }
    let cache: NumberArray = {}
    return function fibonacci(n: number): number {
        count++
        if ((n in cache) === false) {
            if (n < 2)
                return n
            cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
        }
        return cache[n]
    }
}
