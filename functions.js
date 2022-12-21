function actualMath(num0, num1 ) {
    console.log ('in actualMath', num0, num1);
    let answer = num0 * num1;
    return answer;
} //end actualMath

function logger() {
    console.log( 'in logger' );  
} // end logger

function mathExample (){
    console.log ('in mathExample');
    let answer = 3 * 9;
    return answer;
} //end mathExample

function returner() {
    console.log('in returner');
    return true;
} //end returner


logger();
returner();
console.log('running returner', returner());
console.log('running mathExample', mathExample());
console.log('running actualMath', actualMath(4,6));
console.log('running actualMath', actualMath(0.4,2));
console.log('running actualMath', actualMath(12040801,623));
