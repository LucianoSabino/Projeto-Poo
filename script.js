// Importando o aquivo modificador.js para pega as funções exsportada
import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

modificador.capitalizarNovo(ingredientes, 'nome')
let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let cotainerIngredientes = document.querySelector('#container-ingredientes');


for (let ingrediente of ingredientesOrdenados) {
    let tetoHTML = `
    <div class="ingrediente">
        <img src="img/${ingrediente.img}" alt="">
        <p class="nome-ingrediente" id="nav">${ingrediente.nome}</p>
    </div>
    `;

    cotainerIngredientes.innerHTML += tetoHTML;
};