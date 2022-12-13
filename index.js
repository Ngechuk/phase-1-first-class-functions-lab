const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
let returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier (fare){
    return function (fare2){
       const fareMultiplier=fare *fare2;
       return fareMultiplier;
    }
}