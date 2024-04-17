let tab = [15 , 20 , 3] ;
let aux = 0 ;


for(let i = 0 ; i < tab.length - 1 ; i++){
    for(let j = 0 ; j < tab.length -i - 1 ; j++){
        if(tab[j]>tab[j + 1]){
                aux = tab[j+1];
                tab[j+1] = tab[j];
                tab[j] = aux
        }
    }
}
console.log(tab);