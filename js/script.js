/* #### Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */
const bici = [
    {
        nome : "bicipippo",
        peso : 12
    },
    {
        nome : "ciclopluto",
        peso : 2
    },
    {
        nome : "mechapaperino",
        peso : 2.5
    },
    {
        nome : "robotopolino",
        peso : 70
    },
    {
        nome : "turboquiquoqua",
        peso : 3.5
    },
]

console.log(bici);
//Inizializzo due variabili di appoggio una dove appoggio il peso partendo dalla prima posizione
let index = 0
let pesoAppo = bici[index].peso;


bici.forEach((curBici, i) => {
    console.log(curBici);
    const {peso} = curBici;
    if(peso < pesoAppo){
        pesoAppo = peso;
        index = i;
    }
})
console.log('La bicicletta : ' + bici[index].nome + ' è la più leggera');

