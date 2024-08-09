const form = document.getElementById('form-atividade');
const ImgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const ImgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const atividades = [];
const notas =[];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const InputNomeAtividade =document.getElementById('nome-atividade');
    const InputNotaAtividade =document.getElementById('nota-atividade');

    if (atividades.includes(InputNomeAtividade.value)) {
        alert(`A atividade: ${InputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(InputNomeAtividade.value);
        notas.push(parseFloat(InputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${InputNomeAtividade.value}</td>`;
        linha += `<td>${InputNotaAtividade.value}</td>`;
        linha += `<td>${InputNotaAtividade.value >= notaMinima ? ImgAprovado : ImgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    InputNomeAtividade.value ='';
    InputNotaAtividade.value ='';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i< notas.length; i++){
        somaDasNotas += notas[i];
    };

    return somaDasNotas / notas.length;
}