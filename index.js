// Code your solution in this file!
function returnFirstTwoDrivers(y){
  const x = function(){
return y.slice(0,2)
  }
return x()
}


function returnLastTwoDrivers(y){
  function x(){
    return y.slice(-2)
  }
  return x()
}


const selectingDrivers = [['ant', 'bison'],['duck', 'elephant']]
