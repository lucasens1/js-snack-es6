const automobili = [
  { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
  { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
  { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
  { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
  { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
  { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
  { marca: "Audi", modello: "A3", alimentazione: "diesel" },
  { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
  { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];

Partendo da questo array , prendere prima le auto con benzina, poi auto con diesel, infine tutte

fare un ciclo dove vengono letti gli elementi :
    - per ogni elemento controllare il tipo di alimentazione
        Se alimentazione è Benzina 
            - Aggiungere quell'elemento nell'array auto a Benzina
        Altrimenti Se alimentazione è diesel
            - Aggiungere quell'elemento nell'array auto a Diesel
        Altrimenti 
            - Aggiungere in un array che contiene le auto con diversi tipi di alimentazione
            
