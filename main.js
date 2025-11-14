/**
 * Main function, která převádí číslo z jedné číslené soustavy do jiné..
 * @param {string} inputNumber - číslo, které se převádí
 * @param {number} inputNumberSystem - číselná soustava převáděného čísla
 * @param {number} outputNumberSystem - číselná soustava, do které se číslo převádí
 * @returns {string} - převedené číslo jako string 
 */

export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
 if (inputNumberSystem === 10 && outputNumberSystem === 2) {
  
        let dec = +inputNumber; //Unární plus, převede string na číslo
        
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
    while (dec > 0) { //Dokud je převáděné číslo vetší než 0 tato smyčka se bude opakovat
        zbytek = dec % 2; //Převáděné číslo se vydělí dvěma a uloží se zbytek
        dec = Math.floor(dec / 2) //Číslo vydělené dvěma se zaokrouhlí dolů (pro dělení v následujícím cyklu)
        bin = zbytek + bin; //Zbytek se uloží na začátek a k němu co už v bin máme 
    }
     
    return bin; //Vrácení kompletního převedeného čísla
}

export function permittedInputSystems() {
    return [10];
}

export function permittedOutputSystems() {
    return [2];
}

