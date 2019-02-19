const joinNames = (namesObj) => {
    
    const justNames = namesObj.map(name => name.name).join()

const joinedNames = justNames.replace(",").justNames.length -1 ? "," : '&'; 

return joinedNames;
};


module.exports = joinNames;


// 'Bart, Lisa & Maggie'.