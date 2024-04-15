const painel = [...document.querySelectorAll('.painel')];
const painelTexto = document.querySelectorAll('.painel-texto');
const textoAnimado = document.querySelectorAll('.texto-animado');

for (let i = 0; i < painel.length; i++) {
    painel[i].addEventListener('mouseenter', function () {
        mouseEntra(painel[i]);
    })

    painel[i].addEventListener('mouseleave', function () {
        mouseSai(painel[i]);

    })
}

function mouseEntra(painelSelecionado) {
    const index = painel.indexOf(painelSelecionado);

    textoAnimado[index].style.opacity = '1';
    textoAnimado[index].style.transform = 'translateY(5px)';


    
}

function mouseSai(painelSelecionado) {
    const index = painel.indexOf(painelSelecionado);

    textoAnimado[index].style.opacity = '0';
    textoAnimado[index].style.transform = 'translateY(-5px)';
    
}