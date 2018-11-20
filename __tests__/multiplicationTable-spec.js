const generateMultiplicationTable = require('../multiplicationTable');


it ('should return true when a is smaller than or equal to b', () => {
    expect(generateMultiplicationTable (2,4)).toBe(true);
    expect(generateMultiplicationTable (5,3)).toBe(null);
})
it ('should return true when a or b is in range 1-1000', () => {
    expect(generateMultiplicationTable (5,10)).toBe(true);
    expect(generateMultiplicationTable (5,2000)).toBe(false);
})
it ('should return multiplication table when a and b are valid', () => {
    //const expected = "2*2=4\n"+
                    // "2*3=6  3*3=9\n"+
                    // "2*4=8  3*4=12  4*4=16";
    expect(generateMultiplicationTable(2,4)).toBe("2*2=4\n"+
    "2*3=6  3*3=9\n"+
    "2*4=8  3*4=12  4*4=16");

})
