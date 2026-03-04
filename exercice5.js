
let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
    let n = nombres[i];
    let affichage = n;

    if (Number.isNaN(n)) {
        affichage += " -> INVALIDE";
    } else if (n === Infinity || n === -Infinity) {
        affichage += " -> INFINI";
    } else if (1 / n === -Infinity) {  
        affichage += " -> ZERO NEGATIF";
    } else if (Number.isInteger(n)) {
        if (Math.abs(n) <= Number.MAX_SAFE_INTEGER) {
            affichage += " -> ENTIER SUR";
        } else {
            affichage += " -> ENTIER HORS LIMITES";
        }
    } else {
        affichage += " -> DECIMAL";
    }

    console.log(affichage);
}