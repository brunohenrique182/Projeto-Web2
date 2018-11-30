let p1 = '<div class="col s12 xl3"><div class="card"><div class="card-image"><img src="';
let p2 = '"><span class="card-title black-text">';
let p3 = '</span></div><div class="card-content"><p>';
let p4 = '</p></div><div class="card-action"><a href="#">';
let p5 = '</a></div></div></div>';

function Produto(nome, preco, descricao, imagem) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
}

let produtos = [];

let teclado = new Produto('Teclado', '159,90', 'Teclado semi-mecanico', 'assets/resources/images/teclado.jpg');
let computador = new Produto('Positivo Gamer', '1999,90', 'Pc gamer ultima geração', 'assets/resources/images/computador.jpg');
produtos.push(teclado);
produtos.push(computador);
let template = '';

for (p of produtos) {
    template += p1 + p.imagem + p2 + p.nome + p3 + p.descricao + p4 + p.preco + p5;
}

$$('produtos-div').innerHTML = template;
