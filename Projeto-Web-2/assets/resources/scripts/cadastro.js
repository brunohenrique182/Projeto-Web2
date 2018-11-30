(function () {
    let $$ = function (id) {
        return document.getElementById(id);
    }

    function Cliente(email, senha, cpf, nome, datanasc, sexo, telefone) {
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.nome = nome;
        this.dataNasc = datanasc;
        this.sexo = sexo;
        this.telefone = telefone;
    }

    let clientes = [];
    if (localStorage.getItem('clientes')) {
        arrayClientes = JSON.parse(localStorage.getItem('clientes'));
        for (let i = 0; i < arrayClientes.length; i++) {
            clientes.push(arrayClientes[i]);
        }
    }

    function trataRadio() {
        if (document.getElementById('input-gender-masculine').checked) {
            return 'Masculino';
        } else if (document.getElementById('input-gender-feminine').checked)
            return 'Feminino';
        else return '-1';
    }

    document.getElementById("form-report").onsubmit = function () {
        if (trataRadio() == '-1') {
            alert('Por favor selecione o sexo');
            return false;
        } else {
            let email = $$('input-email').value;
            let senha = $$('input-senha').value;
            let cpf = $$('input-cpf').value;
            let nome = $$('input-nome').value;
            let dataNasc = $$('input-data').value;
            let sexo = trataRadio();
            let telefone = $$('input-telefone').value;
            let cliente = new Cliente(email, senha, cpf, nome, dataNasc, sexo, telefone);
            clientes.push(cliente);

            localStorage.setItem('clientes', JSON.stringify(clientes));

            alert('Cadastro efetuado com sucesso!');
            document.getElementById("form-login").action = "login.html";
            return true;
        }
    };

    window.onload = function () {
        document.getElementById("input-cpf").onkeypress = function (e) {

            let c = e.charCode;

            if (c > 58 || c < 48) {
                e.preventDefault();
            }
        }
        document.getElementById("input-telefone").onkeypress = function (e) {

            let c = e.charCode;

            if (c > 58 || c < 48) {
                e.preventDefault();
            }
        }
        $$('input-telefone').addEventListener('invalid', () => {
            if ($$('input-telefone').validity.valueMissing) {
                $$('input-telefone').setCustomValidity('Não deixe o campo vazio');
            }
        });
    }
})();
