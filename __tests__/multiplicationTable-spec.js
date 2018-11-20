const checkIfInputsAreValid = require('../multiplicationTable');


it ('should return true when a is smaller than or equal to b', () => {
    expect(checkIfInputsAreValid (2,4)).toBe(true);
    expect(checkIfInputsAreValid (5,3)).toBe(null);
})
it ('should return true when a or b is in range 1-1000', () => {
    expect(checkIfInputsAreValid (5,10)).toBe(true);
    expect(checkIfInputsAreValid (5,2000)).toBe(false);
})

