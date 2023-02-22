function doSomeThing(n: number) {
    console.log('assume we do something that takes a long time')
    return n + n;
}
doSomeThing(20)
doSomeThing(20) 
doSomeThing(20) 

interface NumberArray {
    [index: number]: number;
}
let cache: NumberArray = {}
function memoizedDoSomeThing(n: number) {
    if (n in cache) {
        console.log('---------cache---------')
        return cache[n]
    }
    console.log('assume we do something that takes a long time')
    const result = n + n
    cache[n] = result
    return result
}
memoizedDoSomeThing(20)
memoizedDoSomeThing(20)
memoizedDoSomeThing(20) 