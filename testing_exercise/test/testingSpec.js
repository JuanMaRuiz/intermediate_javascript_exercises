const {expect} = require('chai');
const {
  replaceWith,
  expand,
  acceptNumbersOnly,
  mergeArrays,
} = require('./../index')

describe('replaceWith', () => {
  it('should return a string', () => {
    const output = replaceWith('bazinga');
    expect(typeof output === 'string').to.be.true;
  });
  it('should replace the first given letter with the second one given', () => {
    expect(replaceWith("awesome", "e", "z")).to.be.equals("awzsomz");
    expect(replaceWith("Foo", "F", "B")).to.be.equals("Boo");
  });
});

describe('expand', () => {
  it('should return an array', () => {
    const output = expand([], 3);
    expect(output).to.be.an('array');
  });
  it('should return an array with a length equal to orignal arr lenght * number specified', () => {
    const arr = [1,2,3];
    expect(expand(arr,3).length).to.equals(9);
  });
  it('should return an array with n copies of itself', () => {
    expect(expand([1,2,3],3)).to.eql([1,2,3,1,2,3,1,2,3]);
    expect(expand(["foo", "test"],1)).to.eql(["foo","test"]);
  });
});

describe('acceptNumbersOnly', () => {
  it('should return the correct ouput `true` or `false`', () => {
    expect(acceptNumbersOnly(1,"foo")).to.be.false;
    expect(acceptNumbersOnly(1,2,3,4,5,6,7)).to.be.true;
    expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).to.be.false;
  });
});

describe('mergeArrays', () => {
  it('should return an array', () => {
    expect(mergeArrays([2,1],[3,4])).to.be.an('array');
  });
  it('should merge and short the content of the merged array', () => {
    expect(mergeArrays([2,1],[3,4])).to.eql([1,2,3,4])
  })
});