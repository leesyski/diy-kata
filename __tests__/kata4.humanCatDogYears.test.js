const { humanCatDogYears } = require('../src');

describe('humanCatDogYears',() => {
  it('changesHumanAgeToCatDogYears', () => {
        expect(humanCatDogYears(10)).toEqual([10,56,64]);
  });
});



// Look Ma, no handlebars!!!
