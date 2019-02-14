const fizzBuzz = (number) => {
  const numberBy3 = (number % 3) === 0
  const numberBy5 = (number % 5) === 0
    
  if (numberBy3 && numberBy5){
      return 'FizzBuzz';
  }

  if (numberBy3){
      return 'Fizz'
  }
  
  if (numberBy5){
      return 'Buzz' 
  }
  
  return number;
}  
  

  //  if (number % 5 === 0 && number % 3 === 0){
    //    return 'FizzBuzz'
  //}

    //if (number % 5 === 0) {      
      //  return 'Buzz'
    //}
    //if (number % 3 === 0){
    //  return 'fizz'
    //}
      //  return number;
//}
module.exports = fizzBuzz;
