/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // 19 Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   let resultado = Math.pow(num, 2);
   return resultado;
}

function elevarAlCubo(num) {
   // 20 Retorna el valor de "num" elevado al cubo.
   // Tu código:
   let resultado3 = Math.pow(num, 3);
   return resultado3;
}

function elevar(num, exponent) {
   // 21 Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   let resultadoex = Math.pow(num, exponent);
   return resultadoex;
}

function redondearNumero(num) {
   // 22 Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   let proximo = Math.round(num);
   return proximo;
}

function redondearHaciaArriba(num) {
   // 23 Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   let arriba = Math.ceil(num);
   return arriba;
}

function numeroRandom() {
   // 24 Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   let aleatorio = Math.random();
   return aleatorio;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
