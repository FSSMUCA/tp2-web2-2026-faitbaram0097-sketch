let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let vars = {nom, age, ville, score, actif};

for (let key in vars) {
    let val = vars[key];

    
    let valeurDefaut = val ?? "valeur par défaut";
    console.log(key + " ?? ->", valeurDefaut);

    
    let valeurOu = val || "valeur par défaut";
    console.log(key + " || ->", valeurOu);

    
    if (valeurDefaut === valeurOu) {
        console.log(key + " : ?? et || -> même résultat");
    } else {
        console.log(key + " : ?? et || -> résultat différent");
    }

    console.log("---");
}