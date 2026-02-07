

{
// problem 1 
let number = 10
for(let i = 0 ; i<10; i++ )
   console.log(i)
}

{
    // Problem 2  Print Even Numbers.

    let num = 10 
    for(let i = 0 ; i<10 ; i++){
        if(i%2===0){
            console.log("even " , i)
        }
    }
}

{
    // Prolem sum of th first N Natural Numver

    let num = 5
    let sum = 0
    for(let i = 0 ; i<5 ; i++){
    sum+=i
    }
    console.log(sum)
}


{

    // problem 4 print multiplication Table

    let num  =3 
    for(let i  = 0 ; i<10 ; i++){
        console.log(`${num} X ${i} = ${num*i}`)
    }
}


{
    // problem 5 Factorial of n
    const N = 5
    let factorial   = 1
    for(let i = 1 ; i<=N; i++){
        factorial = factorial*i
    }
    console.log(factorial)
}

// counti digits in a numbers

{
    let N = 457587
    let num = N.toString()
    let count =0

    for(let i = 0; i<num.length; i++ ){
        count++
    }
    console.log(count)
}

// Reverse a number
{
let num = 1234
let num1 = num.toString()
let num2  = ""
for(let i = num1.length-1 ; i>=0 ; i--){
    num2+=num1[i]
    
}
console.log(num2)
}


// 
{
    let num = 7
    let isPrime = true
    for(let i = 2 ; i<num; i++){
        if(num%i === 0){
            isPrime =false
            break
        }
    }
    if(isPrime){
    console.log("Prime Number")
    }else{
        console.log("Not a Prime Number")
    }
}

{
    // Print Pattern
    let num = 4
    for(let i = 1; i<=4 ; i++){
        let sum  = ""
        for(let j = 0 ; j<i; j++){
            sum+= "*"
        }
        console.log(sum)
    }
}

{
    // problem10 Sum or enven and odd Numbers
    let num = 10
    let evenSum  = 0
    let oddSum = 0
    for(let i = 0; i<=num ; i++){
     if(i%2===0){
   evenSum+=i
     }else{
        oddSum+=i
     }
    }
    console.log("Even Sum " ,evenSum)
    console.log("Odd Sum " , oddSum)
}