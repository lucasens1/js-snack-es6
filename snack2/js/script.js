const persone = [
    {nome : "mario", cognome : "rossi", eta : 18},
    {nome : "stefano", cognome : "verdi", eta : 15},
    {nome : "roberto", cognome : "neri", eta : 16},
    {nome : "francesca", cognome : "rosi", eta : 25},
]

const personeGuidano = persone.filter((curPersona) => {
    if(curPersona.eta >= 18){
        curPersona.frase = "Il Sign/ra " + curPersona.nome + " " + curPersona.cognome + " può guidare perché ha : " + curPersona.eta; 
        return curPersona;
    }
})

console.log(personeGuidano)