const humanCatDogYears = (number) => {
  
  // cat years calculations
  let catYears1 = number
    if (number > 1) {
      let catYears1 = 15
    
  let catYears2 = number
    if (number > 2) {
      let catYears2 = 9
    
let catYears3 = number
  if (number > 3){
    let catYears3 = (number - 2) * 4;
  
  // dog years calcultaions
  let dogYears1 = number
    if (number > 1) {
      let dogYears1 = 15
    
  let dogYears2 = number
    if (number > 2) {
      let dogYears2 = 9
    
let dogYears3 = number
  if (number > 3){
    let dogYears3 = (number - 2) * 5;
  
  let dogYearTotal = dogYears1 + dogYears2 + dogYears3
  let catYearTotal = catYears1 + catYears2 + catYears3

return [number , catYearTotal , dogYearTotal]

}}}}}};
};
  module.exports = humanCatDogYears; 