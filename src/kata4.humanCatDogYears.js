const humanCatDogYears = (number) => {

  // cat years calculations
  let catYears1 = number > 1 ? 15 : number  
  let catYears2 = number > 2 ? 9 : number
    
let catYears3 = number > 3 
  if (number > 3){
    catYears3 = (number - 2) * 4;
  
  // dog years calcultaions
  let dogYears1 = number > 1 ? 15 : number
  let dogYears2 = number > 2 ? 9 : number
    
let dogYears3 = number
  if (number > 3){
    dogYears3 = (number - 2) * 5;
  
  let dogYearTotal = dogYears1 + dogYears2 + dogYears3
  let catYearTotal = catYears1 + catYears2 + catYears3

return [number , catYearTotal , dogYearTotal]

}};
};
  module.exports = humanCatDogYears; 

  // First effort;

  // cat years calculations
  //let catYears1 = number > 1 ? 15 : number
    //if (number > 1) {
      //catYears1 = 15
    
  //let catYears2 = number > 2 ? 9 : number
    //if (number > 2) {
      //catYears2 = 9
    
//const catYears3 = number > 3 
  //if (number > 3){
    //catYears3 = (number - 2) * 4;
  
  // dog years calcultaions
  //let dogYears1 = number > 1 ? 15 : number
    //if (number > 1) {
      //dogYears1 = 15
    
  //let dogYears2 = number > 2 ? 9 : number
    //if (number > 2) {
      //dogYears2 = 9
    
//const dogYears3 = number
  //if (number > 3){
    //dogYears3 = (number - 2) * 5;

  //let dogYearTotal = dogYears1 + dogYears2 + dogYears3
  //let catYearTotal = catYears1 + catYears2 + catYears3

//return [number , catYearTotal , dogYearTotal]
