console.log('weeks 1-4.js');

const seatsInCar = 5;
let passsengers = [];
let tankFull = true;


function enoughSeats(){
    console.log('in enoughSeats');
    //check if seatsInCar >= number of passengers
    if( seatsInCar >= passsengers.length) {
        return true;
    } //end enough seats
    else {
        return false;
    } //end not neough seats
} //end enoughSeats

function getInCar(nameOfPassenger) {
    console.log ('in getInCar', nameOfPassenger);
    passsengers.push(nameOfPassenger); //push the new pasenger in our passengers array
    return passsengers;
} //end getInCar

function readyForRoadTrip() {
    if (enoughSeats() && tankFull) {
        return true;
    } //end ready 
    else {
        return false;
    } //end not ready
} //end readyForRoadTrip


getInCar ('Connor');
getInCar ('Xiu Xiu');
getInCar ('Paladin');
getInCar ('Alyssa');

console.log(enoughSeats());


console.log('enough seats?', enoughSeats()); 

console.log ('are we ready for the trip?', readyForRoadTrip());