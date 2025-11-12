/**
 * Hlavní funkce programu – převádí číslo mezi soustavami.
 * Aktuálně podporuje převod z desítkové do dvojkové soustavy.
 * @param {string} inputNumber - číslo, které se převádí
 * @param {number} inputNumberSystem - soustava, ze které převádíme (např. 10)
 * @param {number} outputNumberSystem - soustava, do které převádíme (např. 2)
 * @returns {string} převedené číslo v cílové soustavě
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    if (inputNumberSystem === 10 && outputNumberSystem === 2) {
        return dec2bin(Number(inputNumber));
    } else {
        return "Conversion not supported.";
    }
}

/**
 * Pomocná funkce pro převod z desítkové do dvojkové soustavy.
 * Nepoužívá zakázané funkce Number.parseInt ani toString.
 * @param {number} n - číslo v desítkové soustavě
 * @returns {string} číslo v binární soustavě
 */
function dec2bin(n) {
    let bin = "";
    while (n > 0) {
        let remainder = n % 2;
        n = Math.floor(n / 2);
        bin = remainder + bin;
    }
    return bin;
}

/**
 * Funkce vrací, z jakých soustav je převod povolen.
 */
export function permittedInputSystems() {
    return [10];
}

/**
 * Funkce vrací, do jakých soustav je převod povolen.
 */
export function permittedOutputSystems() {
    return [2];
}
