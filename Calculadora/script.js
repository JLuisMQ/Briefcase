/* ACA LLAMAMOS AL ID*/
const previous_display = document.getElementById('previous-value')
const afther_display = document.getElementById('after-value')
/* ACA LLAMAMOS A LAS CLASES*/
const botton_numbers = document.querySelectorAll('.number');
const botton_operator = document.querySelectorAll('.operator');

/*CREAMOS UNA INSTANCIA DEL DISPLAY*/

const display = new Display(previous_display,afther_display);
/*const calculadora = new Calculadora();
console.log(calculadora.add(2,3));*/
botton_numbers.forEach(botton => {
    /*FOREACH RECORRE TODO LOS ELEMENTOS DE ARRAYS */
    botton.addEventListener('click', () => display.add_number(botton.innerHTML));
  
});
botton_operator.forEach(botton => {
    botton.addEventListener('click', () => display.computar(botton.value));
});

