// estado da minha aplicação
let numero = 0;

// alteradores de estado da aplicação
function aumentar(){
    numero++;
    mostrarNaTela();
}

function zerar(){
    numero = 0;
    mostrarNaTela();
}

function diminuir(){
   numero--;
    mostrarNaTela();
}

//Jogar o estado da aplicação na tela
function mostrarNaTela(){
    const p = document.querySelector("#resultado");
    p.innerText = numero;
}

//Iniciar
mostrarNaTela();