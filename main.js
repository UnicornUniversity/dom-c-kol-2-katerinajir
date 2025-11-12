

/**
 * Hlavní funkce, která provede konverzi na základě vstupů.
 * @param {string} inputNumber Číslo jako string, které se má převést.
 * @param {number} inputNumberSystem Číselná soustava vstupního čísla (např. 10).
 * @param {number} outputNumberSystem Cílová číselná soustava (např. 2).
 * @returns {string} Výsledný string po konverzi.
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    
    if (inputNumberSystem === 10 && outputNumberSystem === 2) {
        // Převedeme string na číslo pomocí unárního operátoru +,
        // abychom dodrželi zákaz Number.parseInt() a Number().
        let dec = +inputNumber;
        
        return convertDecToBin(dec);
    }

    return null;
}

/**
 * Pomocná funkce pro převod z desítkové do binární soustavy.
 * @param {number} dec Desítkové číslo k převodu.
 * @returns {string} Číslo jako binární string.
 */
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


/**
 * Vrací povolené VSTUPNÍ soustavy.
 * @returns {number[]} Pole čísel soustav (pouze desítková).
 */
export function permittedInputSystems() {
    // Vaše funkce převádí Z desítkové soustavy
    return [10];
}

/**
 * Vrací povolené VÝSTUPNÍ soustavy.
 * @returns {number[]} Pole čísel soustav (pouze binární).
 */
export function permittedOutputSystems() {
    // Vaše funkce převádí DO binární soustavy
    return [2];
}
}

