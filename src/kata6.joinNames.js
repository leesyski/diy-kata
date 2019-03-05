const joinNames = (namesObj) => {
    
     return namesObj.map(names => names.name).reduce((accumulator, currentValue, currentIndex) => {
        return accumulator + (currentIndex === namesObj.length -1 ? ' & ' : ', ') + currentValue;
     });
};

module.exports = joinNames;



// 'Bart, Lisa & Maggie'.cd 
//const joinedNames = justNames.replace(",").justNames.length -1 ? "," : '&'; 
//return joinedNames;