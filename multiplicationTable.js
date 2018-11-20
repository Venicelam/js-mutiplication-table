function checkIfInputsAreValid(a,b) {
    if (a > b){
        return null;
    }

    if (a < 1 || a > 1000 || b < 1 || b > 1000) {
        return false;
    }
    return true;
}
function formatTable (output, maxlength){
    var formatlength = maxlength - output.length;
    output = output + " ";
    for (var k = 0; k < formatlength; k++){
        output = output + " ";
    }
    return output;
}
function insertTableString(a,b,max){
    var output = a.toString() + "*" + b.toString() + "=" + (a * b);
    if (a == b){
        return output;
        }
    return formatTable(output, (max*max).toString().length + max.toString().length + max.toString().length + 2);

}
function generateMultiplicationTable(a,b){
    if (!checkIfInputsAreValid(a,b)){
        return null;
    }
    var string = "";
    for (var i = a; i <= b; i++){
        for (var j = a; j <= i; j++){
            string += insertTableString(j,i,b);
        }
        if (b != i) {
            string += "\n";
        }

    }
    return string;
}

module.exports = generateMultiplicationTable;
module.exports = checkIfInputsAreValid;