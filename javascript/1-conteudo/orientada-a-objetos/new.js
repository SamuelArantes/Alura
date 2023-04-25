/*
function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    }
}

//const novoUser = new User('Samuel', 's@s.com');
//console.log(novoUser.exibirInfos());

function Admin(role){
    User.call(this, 'Samuel', 's@s.com')
    this.role = role || 'estudante'    
}

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin');
console.log(novoUser.exibirInfos());
console.log(novoUser.role);
*/

const user = {
    init: function (nome, email) {
        this.nome = nome,
        this.email = email
    },

    exibirInfos: function(nome) {
        return this.nome
    }
}

const novoUser = Object.create(user);
//console.log(novoUser.exibirInfos('Samuel'));
//console.log(user.isPrototypeOf(novoUser));

novoUser.init('Samuel', 's@s.com');
console.log(novoUser.exibirInfos());
