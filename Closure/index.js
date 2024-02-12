function calculator(a) {

    function sum(b) {

        console.log(a + b);

    }
    // return sum;

    function minus(b) {


        console.log(a - b);

    }
    // return minus;

    return {
        a: sum,
        b: minus
    };

}

const answer = calculator(10);
answer.a(10);
answer.b(6);