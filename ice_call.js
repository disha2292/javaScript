// function one(call_two) {
//     console.log("step 1 complete , please call step 2");
//     call_two();
// }


// function two() {

//     console.log("step 2");

// }

// one(two);
// two();


let stocks = {

    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}


let order = (Fruit_name, call_production) => {

    // console.log("order placed , please call production")
    setTimeout(() => {
        console.log(`${stocks.fruits[Fruit_name]} was selected`);
        call_production();
    }, 2000)


}


let production = () => {

    setTimeout(() => {
        console.log("production has started")
        setTimeout(() => {
            console.log("The fruit has been chopped")
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(() => {
                    console.log("start the machine")
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stocks.holder[1]}`)
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} as toppings`)
                            setTimeout(() => {
                                console.log("serve Ice cream")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0)

};

order(0, production);