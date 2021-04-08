import hati from './hati.js';

hati({
    root: document
});

window.addEventListener('hati:DOMContentLoaded', event => {
    if (event.detail.href.includes("seja-membro.html")) {
        sejaMembro();
    }
});

function sejaMembro() {
    const spanValorMensal = document.getElementById('valor_mensal');
    const spanValorAnual = document.getElementById('valor_anual');

    const checkboxPlanoAnual = document.getElementById('plano_anual');
    checkboxPlanoAnual.addEventListener('click', event => {
        if (event.target.checked) {
            spanValorMensal.style.display = 'none';
            spanValorAnual.style.display = null;
        } else {
            spanValorMensal.style.display = null;
            spanValorAnual.style.display = 'none';
        }
    });
}