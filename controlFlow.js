let val1;

// Nullish Coalescing Operator (??): null undefined
val1 = 5 ?? 10 // 5

val1 = null ?? 10 // 10

val1 = undefined ?? 10 // 10

val1 = null ?? 10 ?? 20 // 10

// console.log(val1);

// Terniary operator 

const val2 = 10 % 2 == 0 ? "divisible by 2" : "not divisible by 2";

console.log(val2);