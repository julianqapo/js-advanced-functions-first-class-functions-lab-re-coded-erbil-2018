// Code your solution in this file!
function returnFirstTwoDrivers(y){
  let x = function(){
return y.slice(0,2)
  }
return x()
}

/*
function returnLastTwoDrivers(y){
  function x(){
    return y.slice(-2)
  }
  return x()
}

*/
const = returnLastTwoDrivers
returnLastTwoDrivers = function(y){
  function x(){
    return y.slice(-2)
  }
  return x()
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
