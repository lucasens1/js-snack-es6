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

/* const autoBenz = automobili.filter((curAuto) => {
    return curAuto.alimentazione === "benzina";
}); */

/* console.log(autoBenz)
 */
const autoBenz = [];
let iBenz = 0;

const autoDiesel = [];
let iDiesel = 0;

const miscAuto = [];
let iMisc = 0;

automobili.forEach((curAuto) => {
    if(curAuto.alimentazione === "benzina"){
        autoBenz[iBenz] = curAuto;
        iBenz++;
    } else if(curAuto.alimentazione === "diesel"){
        autoDiesel[iDiesel] = curAuto;
        iDiesel++;
    } else {
        miscAuto[iMisc] = curAuto;
        iMisc++; 
    }
})
console.log(autoBenz, autoDiesel, miscAuto)