const myPromise = () => Promise.reject('Oops!');
const logger = data => console.log(data);
const identity = data => data;

// LOGS: Oops!
myPromise().then(logger).catch(identity);
myPromise().catch(identity).then(logger);