/**
 * Hlavní funkce programu – převádí číslo mezi soustavami.
 * Podporuje převod z desítkové do dvojkové a z dvojkové do desítkové.
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    if (inputNumberSystem === 10 && outputNumberSystem === 2) {
        return dec2bin(parseInt(inputNumber, 10));
    } else if (inputNumberSystem === 2 && outputNumberSystem === 10) {
        return bin2dec(inputNumber).toString();
    } else {
        return "Conversion not supported.";
    }
}

/**
 * Převod z desítkové do dvojkové bez použití .toString()
 */
function dec2bin(n) {
    let result = "";
    while (n > 0) {
        result = (n % 2) + result;
        n = Math.floor(n / 2);
    }
    return result || "0";
}

/**
 * Převod z dvojkové do desítkové bez použití Number.parseInt()
 */
function bin2dec(binStr) {
    let total = 0;
    for (let i = 0; i < binStr.length; i++) {
        total = total * 2 + (binStr[i] === "1" ? 1 : 0);
    }
    return total;
}

/**
 * Povolené vstupní soustavy
 */
export function permittedInputSystems() {
    return [2, 10];
}

/**
 * Povolené výstupní soustavy
 */
export function permittedOutputSystems() {
    return [2, 10];
}
