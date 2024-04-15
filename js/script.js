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

document.getElementById('bicilight').innerHTML = `
    La bicicletta più <i>leggera</i> è la <b>${bici[index].nome}</b> che pesa : ${bici[index].peso}
`

console.log('-------------------------------------------------------------')


/* #### Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const teams = [
    {
        name : "",
        points : 0,
        fouls : 0,
    },
    {
        name : "",
        points : 0,
        fouls : 0,
    },
    {
        name : "",
        points : 0,
        fouls : 0,
    },
    {
        name : "",
        points : 0,
        fouls : 0,
    }
];

for ( let i = 0 ; i < teams.length ; i++ ){
    const curTeam = teams[i];
    const name = prompt("Inserisci nome squadra :");
    curTeam.name = name;
    curTeam.points = Math.floor(Math.random() * 100 + 3) - 3;
    curTeam.fouls = Math.floor(Math.random() * 1000 + 1) - 1;
    console.log(curTeam);
}

const newTeamsArray = teams.map(({ name, fouls }) => ({ name, fouls }));
console.log(newTeamsArray)

document.getElementById('teams').innerHTML = `<br>
    Le squadre che attualmente partecipano al campionato sono : 
`;

for(let i = 0; i < newTeamsArray.length; i++){
    document.getElementById('teams').innerHTML += `
    <br>
    <b> ${i + 1}. ${newTeamsArray[i].name} </b>che ha subito : ${newTeamsArray[i].fouls} Falli
    `;
};

console.log('----------------------------')

/* Snack Bonus
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. */