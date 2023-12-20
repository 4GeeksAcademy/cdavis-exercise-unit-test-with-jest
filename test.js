// Importar la función sum del archivo app.js
const { sum, oneEuroIs } = require('./exchange.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBeCloseTo(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./exchange.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBeCloseTo(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156,5 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./exchange.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(2.7);

    // Calculo el valor esperado
    const expected = (2.7/oneEuroIs.USD)*oneEuroIs.JPY;

    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected);
});

test("One yen should be 3,045 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound, oneEuroIs } = require('./exchange.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(3.045);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = (3.045/oneEuroIs.JPY)*oneEuroIs.GBP;

    // Hago mi comparación (la prueba)
    expect(pound).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})