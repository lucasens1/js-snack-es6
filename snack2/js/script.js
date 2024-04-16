const persone = [
    {nome : "mario", cognome : "rossi", eta : 18},
    {nome : "stefano", cognome : "verdi", eta : 15},
    {nome : "roberto", cognome : "neri", eta : 16},
    {nome : "francesca", cognome : "rosi", eta : 25},
]

const personeGuidanoeNon = persone.map((curPersona) => {
    if(curPersona.eta >= 18){
        return "Il Sign/ra " + curPersona.nome + " " + curPersona.cognome + " può guidare perché ha : " + curPersona.eta + " anni"; 
        
    } else{
        return "Il Sign/ra " + curPersona.nome + " " + curPersona.cognome + " non può guidare perché ha : " + curPersona.eta + " anni"; 
        
    }
})

console.log('Questa è la lista aggiornata delle persone con la nuova proprietà :', personeGuidanoeNon)

console.log(persone)