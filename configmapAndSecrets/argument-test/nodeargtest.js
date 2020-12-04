var receivedArguments = process.argv.slice(2);
function printArguments() {
    var receivedArguments = process.argv.slice(2);
    console.log('Received Arguments: ', receivedArguments);
}
function printEnvironmentVariables() {
    console.log('Received Environment Variables : ', process.env);
}
setTimeout(printArguments, 10000);
setTimeout(printEnvironmentVariables, 10000);