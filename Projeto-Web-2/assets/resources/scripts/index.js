let $$ = function (id) {
    return document.getElementById(id);
}



if (localStorage.getItem('cliente')) {

    let cliente = JSON.parse(localStorage.getItem('cliente'));

    $$('home-login').href = 'cliente.html';
    $$('span-nome-cliente').innerHTML = cliente.nome;
    $$('home-cadastro').href = 'index.html';
    $$('span-cadastrar').innerHTML = 'Sair';
    $$('icon-cadastrar').innerHTML = 'close';
    $$('home-cadastro').onclick = function () {
        if (window.confirm('deseja realmente sair?')) {
            window.prompt('deixe seu feedback');
            localStorage.removeItem('cliente');
        }
    }
}
