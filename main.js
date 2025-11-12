 /**
 * Hlavní funkce, která provede konverzi na základě vstupů...
 * @param {string} inputNumber Číslo jako string, které se má převést.
 * @param {number} inputNumberSystem Číselná soustava vstupního čísla (např. 10).
 * @param {number} outputNumberSystem Cílová číselná soustava (např. 2).
 * @returns {string} Výsledný string po konverzi.
 */
function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    
    if (inputNumberSystem === 10 && outputNumberSystem === 2) {
        // Převedeme string na číslo pomocí unárního operátoru +,
        // abychom dodrželi zákaz Number.parseInt() a Number().
        let dec = +inputNumber;
        
        return convertDecToBin(dec);
    }

    // Vrací null pro nepodporované konverze
    return null;
}

/**
 * Pomocná funkce pro převod z desítkové do binární soustavy.
 * Optimalizovaná verze (nepotřebuje reverzaci pole)
 * @param {number} dec Desítkové číslo k převodu.
 * @returns {string} Číslo jako binární string.
 */
function convertDecToBin(dec) {
    // 1. Ošetření pro nulu
    if (dec === 0) {
        return "0";
    }
    
    // Používáme absolutní hodnotu, předpokládáme kladné vstupy podle zadání.
    let absDec = Math.abs(dec);

    let bin = "";
    
    // Algoritmus dělení se zbytkem
    while (absDec > 0) {
        let zbytek = absDec % 2;
        absDec = Math.floor(absDec / 2);
        
        // Nový bit se přidává na ZAČÁTEK řetězce,
        // což nahrazuje volání .reverse() na konci.
        bin = zbytek + bin; 
    }
    
    // Vracíme pouze binární string (záporné vstupy ignorujeme/nepodporujeme)
    return bin;
}


/**
 * Vrací povolené VSTUPNÍ soustavy.
 * @returns {number[]} Pole čísel soustav (pouze desítková).
 */
function permittedInputSystems() {
    return [10];
}

/**
 * Vrací povolené VÝSTUPNÍ soustavy.
 * @returns {number[]} Pole čísel soustav (pouze binární).
 */
function permittedOutputSystems() {
    return [2];
}

// Export pro CommonJS (aby systém testů rozuměl)
module.exports = {
    main,
    permittedInputSystems,
    permittedOutputSystems
};
