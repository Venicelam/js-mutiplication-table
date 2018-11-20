function checkIfInputsAreValid(a,b) {
    if (a > b){
        return null;
    }

    if (a < 1 || a > 1000 || b < 1 || b > 1000) {
        return false;
    }
    return true;
}


module.exports = checkIfInputsAreValid;
