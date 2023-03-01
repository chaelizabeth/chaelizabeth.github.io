//variables
let contador = 0;
const parrafo = document.getElementById('demo');
const boton_dis = document.getElementById('bt-1');
const boton_rei = document.getElementById('bt-2');
const boton_aum = document.getElementById('bt-3');

//eventos de accion por cada boton
boton_dis.addEventListener('click', contador_dis);
boton_rei.addEventListener('click', contador_rei);
boton_aum.addEventListener('click', contador_aum);

//Declaracion de las funciones

function contador_dis(){
    --contador
    colorContador(contador);
    return(parrafo.innerText = contador);
}
function contador_rei(){
    contador = 0;
    colorContador(contador);
    return(parrafo.innerText = contador);
}
function contador_aum(){
    ++contador
    colorContador(contador);
    return(parrafo.innerText = contador);
}

function colorContador(valor){
    let resultado;
    if(valor >0){
        resultado = parrafo.style.color = 'green';
    }
    if (valor ==0){
        resultado = parrafo.style.color = 'black';
    }
    if (valor <0){
        resultado = parrafo.style.color = 'red';
    }
    return resultado
}