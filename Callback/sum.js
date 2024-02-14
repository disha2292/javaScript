function sum(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

function calculator(a,b,callback){
    let sumandmul= callback(a,b);

    return sumandmul*2;
}


console.log(calculator(4,2,sum));
