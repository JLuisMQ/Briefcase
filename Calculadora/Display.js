class Display{
    constructor(previous_display , afther_display){
   /*EL CONSTRUCTOR ES CUANDO INSTANCIEMOS LAS CLASES PARA DALES VALORES A LOS METODOS*/
    this.afther_display = afther_display;
    this.previous_display = previous_display;
   
    this.calculador = new Calculadora();
    
    this.typeoperator = undefined;
    this.number_now = '';
    this.number_previous = '';
    /* DISPLAY SON LOS NUMEROS QUE QUEREMOS MODIFICAR Y LOS this.number_now = '';
    this.number_previous = '' SON ELEMENTOS QUE QUEREMOS GUARDAR */
    this.signos = {
        add: '+',
        split: '%',
        multiply: 'x',
        subtract: '-', 
    }
    } 
    clean(){
        this.number_now = this.number_now.toString().slice(0,-1);
        this.printvalue();
        /*TE REGRESA UN NUMERO ANTEIOR*/
    }
    cleanall(){
        this.number_now = '';
        this.number_previous = '';
        this.typeoperator= undefined;
        this.printvalue();
    }
    computar(type){
        this.typeOperator !== 'igual' && this.calculator();
        this.typeOperator = type;
        this.number_previous = this.number_now || this.number_previous;
        this.number_now= '';
        this.printvalue();
    }
    add_number(number){
        if(number === '.' && this.number_now.includes('.')) return
        /*AYUDA A QUE SE COLOQUE UNA SOLA VEZ EL PUNTO SI HAY UN PUNTO EN EL NUMERO YA NO SE DEBE COLOCAR OTRO */
        
        this.number_now = this.number_now.toString() + number.toString();
        this.printvalue();
    }
    printvalue() {
        this.afther_display.textContent = this.number_now;
        this.previous_display.textContent = `${this.number_previous} ${this.signos[this.typeOperator] || ''}`;
    }
    calculator(){
        /*TOMA LOS VALORES DEL DISPLAY Y REALIZA EL CALCULO*/
        const number_previous = parseFloat(this.number_previous);
        const number_now = parseFloat(this.number_now);

        /*NAN no es un numero */
        if(isNaN(number_now) || isNaN(number_previous)) return
        this.number_now = this.calculador[this.typeOperator](number_previous, number_now);
        
        /*calcular() {
            const valorAnterior = parseFloat(this.valorAnterior);
            const valorActual = parseFloat(this.valorActual);
    
            if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
            this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
        }*/
    
    }
    
}