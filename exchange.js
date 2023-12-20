
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar){
    let euro = dollar / oneEuroIs.USD;
    let euroToYen = euro * oneEuroIs.JPY;
    return euroToYen;
}
console.log(fromDollarToYen(3));

function fromYenToPound(yen) {
    let euro = yen/oneEuroIs.JPY;
    let euroToPound = euro*oneEuroIs.GBP;
    return euroToPound;
}
console.log(fromYenToPound(5));

module.exports = { sum, fromYenToPound, fromDollarToYen, fromEuroToDollar, oneEuroIs };





