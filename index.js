// Code your solution in this file!
const returnFirstTwoDrivers = function(y){
  let x = function(){
return y.slice(0,2)
  }


/*
function returnLastTwoDrivers(y){
  function x(){
    return y.slice(-2)
  }
  return x()
}

*/
const returnLastTwoDrivers = function (y){
    return y.slice(-2)
  }


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
