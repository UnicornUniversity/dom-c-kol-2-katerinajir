/**
 * Main function that converts a number from one numeral system to another.
 * @param {string} inputNumber - number that is being converted
 * @param {number} inputNumberSystem - numeral system of the input number
 * @param {number} outputNumberSystem - numeral system to convert into
 * @returns {string} - converted number as a string
 */

export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
 if (inputNumberSystem === 10 && outputNumberSystem === 2) {
  
        let dec = +inputNumber;
        
        return convertDecToBin(dec);
    }

    return null;
}
function convertDecToBin(dec) {
    // Ošetření speciálního případu pro vstup 0
    if (dec === 0) {
        return "0";
    }

    let bin = "";
    let zbytek = 0;
    while (dec > 0) {
        zbytek = dec % 2;
        dec = Math.floor(dec / 2);
        bin = bin + zbytek;
    }
    
    bin = bin.split("").reverse().join(""); 
    return bin;
}

export function permittedInputSystems() {
    return [10];
}

export function permittedOutputSystems() {
    return [2];
}

