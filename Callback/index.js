function iWillPassCallbackFunction(callback) {
    setTimeout(function() {
        console.log("i am a timer");
    }, 5000);
    callback();

}

function iAmCallbackFunction() {
    console.log("i am a callback function");
}

iWillPassCallbackFunction(iAmCallbackFunction);

console.log("i have nothing to do with what's happening");