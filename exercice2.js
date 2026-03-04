let T=[0,1,"","0",null,undefined,NaN,false,[],{}];

for(let i=0;i<T.length;i++){
    let valeur = T[i];
    
    let element = String(valeur);
    if(element ===""){
        element="(chaine vide)";
    }
    if (valeur){
        console.log(element + "->truthy");
    }else{
        console.log(element+"->falsy");
    }

        

}
