const lang = ["js", "ruby", "java", "python", "golang"];

// const values = lang.forEach((item) => console.log(item))

// values // Prints elements in list
// console.log(values); // Returns undefined as forEach does not return anything

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Map
let squared_nums = nums.map( num => num ** 2 );

// console.log(squared_nums)

// Filter

const even_nums = nums.filter( (num) => { 
    return num % 2 == 0 
});

// console.log(even_nums);

const employees = [
    { name: "emp1", age: 20, salary: 20000 },
    { name: "emp2", age: 25, salary: 30000 },
    { name: "emp3", age: 30, salary: 40000 },
    { name: "emp4", age: 30, salary: 10000 }
]

const age_greater_than_20 = employees.filter((employee) => employee.age > 20);
// console.log(age_greater_than_20);


// Reduce
const total = nums.reduce( (acc, currval) => acc + currval, 0);

// console.log(total);


// Factorial of a num using Reduce
const num = 7;

const range = ( num ) => {
    const nums_in_range = [];

    for(let i=1; i <= num; i++){
        nums_in_range.push(i);
    }

    return nums_in_range
}

const nums_in_range = range(num);

const factorial = nums_in_range.reduce( (acc, currval) => acc * currval, 1)

console.log(factorial);


// Chaining
let squared_even_nums = nums.map( (num) => num ** 2 ).filter( (num) => num % 2 == 0);

// console.log(squared_even_nums);