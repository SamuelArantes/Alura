export default class User {
    #nome
    #sobrenome
    #email
    #role
    #ativo
    constructor(nome, sobrenome, email, role, ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
    }

    get email() {
        return this.#email
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('formato não válido')
        }
        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = nome
        this.#sobrenome = sobrenome
    }

    set nome(novoEmail) {
        this.#email = novoEmail
    }

    set nome(novoRole) {
        this.#role = novoRole
    }

    set nome(novoAtivo) {
        this.#ativo = novoAtivo
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.role}, ${this.ativo}`
    }
}



// const novoUser = new User('Samuel', 's@s.com');
//console.log(novoUser);
//console.log(novoUser.exibirInfos());

// Criado o package.json pela seguinte linha de código no git bash:
// npm init -y
// E criado a linha 5 a seguir:
// "type": "module"
