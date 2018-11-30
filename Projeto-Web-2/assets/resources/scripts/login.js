let $$ = function (id) {
    return document.getElementById(id);
}

let clientes = [];

if (localStorage.getItem('clientes')) {
    arrayClientes = JSON.parse(localStorage.getItem('clientes'));
    for (let i = 0; i < arrayClientes.length; i++) {
        clientes.push(arrayClientes[i]);
    }
}

let login = function (email, senha) {
    for (i = 0; i < clientes.length; i++) {
        if (clientes[i].email == email && clientes[i].senha == senha) {
            let clienteLogged = clientes[i];
            console.log(clienteLogged);
            localStorage.setItem('cliente', JSON.stringify(clienteLogged));
            alert('login efetuado com sucesso!');
            document.getElementById("form-login").action = "index.html";
            return true;
        }
    }
    alert('usuario ou senha incorreto');
    return false;
}


$$('form-login').onsubmit = () => {
    let email = $$('input-email').value;
    let senha = $$('input-senha').value;
    login(email, senha);
}
