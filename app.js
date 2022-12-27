/*
9) Crea un programa que pida el ingreso de facturas. Tendrá 3 facturas en total y, por cada una,
ingresarás por prompt un nombre de factura. Una vez que las tengas comenzarás a ingresar montos.
Cada monto estará unido a una factura,  por lo que deberás ingresar, nuevamente, el nombre de 
la factura al que le pertenece el monto. Por ej:
// Fase de Carga inicial:
Factura 1: "Molinos",
Factura 2: "YPF",
Factura 3: "Aluar"

// Fase de carga de facturas:
"Molinos" "10.000"
"Molinos" "5.500"
"YPF" "9.500"
"Aluar" "3.000"
"Molinos" "9.000"
"YPF" "4.700"

Sin importar si ingresó "Molinos" o "YPF" o "Aluar" e ingresás un 0 entonces se cortará la carga
de facturas. Luego mostrarás la suma de montos agrupadas por cada una de las marcas
// Fase de muestra: 
"Molinos" "24.500"
"YPF" "14.200"
"Aluar" "3000"
Consideración 1: si alguna de las empresas no carga datos, entonces se mostrará 
"(Nombre de empresa)" "Sin facturar"

Consideración 2: Al ingresar primero la empresa y luego el monto, considerá que la empresa debe
existir. En caso que la empresa no exista debe mostrarse la leyenda 
"Empresa inexistente, intente con otra". Luego VOLVERÁ A PEDIR LA EMPRESA no el monto.

Consideración 3: Validá que el monto sea un número positivo. Si es negativo se mostrará la 
leyenda "No se aceptan facturas con números negativos". Acto seguido se volverá a pedir el monto.
*/

// Generamos las variables que contendran los nombres de las empresas
let emp1, emp2, emp3,
// Y las facturas correspondientes a cada empresa
    fc1 = 0, fc2 = 0, fc3 = 0,
// Factura a cargar por el usuario
    empCargar, fcCargar = 1
// Validaciones
    exista = true, menorACero = false;

// Fase de Carga inicial:
emp1 = prompt("Ingresa el nombre de la primera empresa")
emp2 = prompt("Ingresa el nombre de la segunda empresa")
emp3 = prompt("Ingresa el nombre de la tercera empresa")

// Fase de carga de facturas
    // Mientras no se cargue una factura en 0 voy a seguir acumulando facturas
while(fcCargar!==0){
    do{
        empCargar = prompt("Ingresa la empresa a la que le quiero facturar")
        exista = (empCargar === emp1 || empCargar === emp2 || empCargar === emp3) ? true : false
        /*
        if(empCargar === emp1 || empCargar === emp2 || empCargar === emp3 ){
            exista = true
        }else{
            exista = false
        }
        */
    }while(!exista)

    do{
        fcCargar = parseInt(prompt("Ingresa el monto de la factura"))
        menorACero = fcCargar < 0 ? true : false;
        /*       
        if(fcCargar < 0){
            menorACero = true
        }else{
            menorACero = false
        }
        */
    }while(menorACero)

    if(empCargar === emp1){
        fc1 = fc1 + fcCargar
    }
    if(empCargar === emp2){
        fc2 = fc2 + fcCargar
    }
    if(empCargar === emp3){
        fc3 = fc3 + fcCargar
    }
}

// Fase de muestra: 
// Validación 1: "(Nombre de empresa)" "Sin facturar"
if(fc1 === 0) {
    console.log(`La empresa ${emp1} no factura`)
}else{
    console.log(`La empresa ${emp1} tiene un saldo a pagar por $${fc1}`)
}
if(fc2 === 0) {
    console.log(`La empresa ${emp2} no factura`)
}else{
    console.log(`La empresa ${emp2} tiene un saldo a pagar por $${fc2}`)
}
if(fc3 === 0) {
    console.log(`La empresa ${emp3} no factura`)
}else{
    console.log(`La empresa ${emp3} tiene un saldo a pagar por $${fc3}`)
}
