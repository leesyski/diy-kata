const { joinNames } = require('../src');

describe('joinNames', () => {
  xit('returns string of names, seperated by commas and an ampersand', () => {
    const person1 = {
      name: 'Bart'
    };
    const person2 = {
      name: 'Lisa'
    }
    const person3 = {
      name: 'Maggie'
    }

    expect(joinNames([person1, person2, person3])).toBe('Bart, Lisa & Maggie.')

  });
});
