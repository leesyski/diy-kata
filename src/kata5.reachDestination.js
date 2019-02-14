const reachDestination = (distance, speed) => {  
   const time = (distance/speed) 
   const roundedNum = (Math.round(time*2)/2).toFixed(1);    
 
return 'I should be there in ' + roundedNum + ' hours.';   
}

module.exports = reachDestination;
