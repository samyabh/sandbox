/**
 * Return a string
 * @returns {string}
 */
function getHelloWorld(){
    return 'Hello World';
}

function sayHelloWorldManyTimes(numberOfTimeToSay: number){
    console.log(`Number of time to display : ${numberOfTimeToSay}`);
    for(let i=0; i < numberOfTimeToSay; i++) {
        console.log(getHelloWorld());
    }
}

sayHelloWorldManyTimes(6);