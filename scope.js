var globalVariable = "Hello world";

function sendMessage() {
    // return globalVariable;
    console.log(globalVariable); // can access globalVariable since it's written in global space
}

function sendMessage2() {
    return sendMessage(); // Can access sendMessage function since it's written in global space
}
sendMessage2();