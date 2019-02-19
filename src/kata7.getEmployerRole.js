const getEmployerRole = (employeeName, employees) => {

    return employees.find(findEmployee => findEmployee.name === employeeName).role;
};

module.exports = getEmployerRole


