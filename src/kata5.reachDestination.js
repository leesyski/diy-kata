const reachDestination = (distance, speed) => {  
   const time = (distance/speed) 
   
   const roundedNum = (Math.ceil(time*100 + 1)/100).toFixed(1);
    
return roundedNum  

//return 'I should be there in ' + roundedNum + ' hours.';
    
}

//let roundTime =  math.round(time);
// time = distance / time
// time.roundUp

//const time = 

//const string = 'I should be there in '
//return 'I should be there in + "string" + hours.'

// time = distance / time
// time.roundUp

//math.round

module.exports = reachDestination;
