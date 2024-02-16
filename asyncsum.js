function sum(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

async function calculator(a, b, callback) {
    try {
        let sumAndMul = callback(a, b);
        return sumAndMul * 2;
    } catch (error) {
        throw new Error("kya kiyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }
}

async function main() {
    try {
        const result = await calculator(4, 2, sum);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

main();