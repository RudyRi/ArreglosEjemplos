// PARTE 1

function calculadora(numero1, numero2, operacion) {
    if (operacion == "suma") {
        let resultado = numero1 + numero2;
        console.log("El resultado es: " + resultado)
    } else if (operacion == "resta") {
        let resultado = numero1 - numero2;
        console.log("El resultado es: " + resultado)
    }
    else if (operacion == "multiplicacion") {
        let resultado = numero1 * numero2;
        console.log("El resultado es: " + resultado)
    }
    else if (operacion == "division") {
        const resultado = numero1 / numero2;
        console.log("El resultado es: " + resultado)
    }
    else {
        console.Error("Operacion no valida");
    }
}

calculadora(10, 5, "suma")


// PARTE 2
// Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5  
function secuencia(numero) {
    if(numero == 5){
        for (let i = 0; i <= numero; i++) {
            console.log(i);
        }
    }
}

secuencia(5)

let listaChuches = ['🍔','🍟','🌭','🍿','🍕']

console.log(listaChuches)

listaChuches.push('🥗')

console.log(listaChuches)

listaChuches.pop()

console.log(listaChuches)

listaChuches.shift()

console.log(listaChuches)

console.log(listaChuches.length)

console.log(listaChuches[3])

delete listaChuches[2]
console.log(listaChuches[2])

listaChuches[0] = '🌮'
console.log(listaChuches)

for (let i=0; i<listaChuches.length; i++){
    console.log(listaChuches[i])
}

listaChuches.map((comida)=>{
    console.log(comida)
})

const dato =  {
    "nombre": "Annie Ochoa",
    "age": 20,
    "profesion": "full-stack developer",
    "isMarried": false,
}

console.log(dato.nombre)