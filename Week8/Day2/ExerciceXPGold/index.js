// Exercice 1 
// [2, 4, 6] because all items in this array are type of number so it smultiplicate by 2 all items 

// Exercice 2
//the fist value is initialised in [1, 2], for the first iteration acc is equal at [1, 2] and the current value of [0,1], we have a fonction who is concatenate the acc with the cure so we have [1, 2, 0, 1] for the seconde iteration the accumulator is [1, 2, 0, 1] and the current value is [2, 3], the function concatenate the acc with the cur so we have finally [1, 2, 0, 1, 2, 3]

// Exercie 3
// i is the index, so we have 
// 1, 0 (=i)
// 2, 1 (=i)
// 4, 2 (=i)
// 5, 3 (=i)
// 8, 4 (=i)
// 9, 5 (=i)

// Exercice 4
//1- 
const array = [[1],[2],[3],[[[4]]],[[[5]]]] 

//2-
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
const array2 = greeting.map(arr => arr.join(' '))

//3- 
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]

const trap = [...trapped.flat(Infinity)];