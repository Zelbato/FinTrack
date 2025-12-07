const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener('click', () => {
    menu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");
    if (icon.classList.contains("bi-list")) {
        icon.classList.remove("bi-list");
        icon.classList.add("bi-x-lg");
    } else {
        icon.classList.remove("bi-x-lg");
        icon.classList.add("bi-list");
    }
});

const valorInput = document.getElementById('valorDesejado');
const mesesInput = document.getElementById('meses');
const resultado = document.getElementById('resultado');
const mesesValor = document.getElementById('mesesValor');

function atualizarResultado() {
    const valor = parseFloat(valorInput.value);
    const meses = parseInt(mesesInput.value);

    mesesValor.textContent = meses;

    if (!isNaN(valor) && valor > 0 && meses > 0) {
        const mensal = valor / meses;
        resultado.textContent = `R$ ${mensal.toFixed(2)}`;
    } else {
        resultado.textContent = "R$ 0,00";
    }
}

valorInput.addEventListener('input', atualizarResultado);
mesesInput.addEventListener('input', atualizarResultado);


       