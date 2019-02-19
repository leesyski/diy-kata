const { joinNames } = require('../src');

describe('joinNames', () => {
  xit('returns string of names, seperated by commas and an ampersand', () => {
    const person1 = {
      name: 'Bart',
      age: 45
    };
    const person2 = {
      name: 'Lisa',
      age: 35
    }
    const person3 = {
      name: 'Maggie',
      age: 67
    }

    expect(joinNames([person1, person2, person3])).toBe('Bart, Lisa & Maggie.')

  });
});
