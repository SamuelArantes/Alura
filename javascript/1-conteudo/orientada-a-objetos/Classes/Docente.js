import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, role = 'docente', ativo = true){
        super(nome, email, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} aprovado no curso ${curso}`
    }
}

// const novoDocente = new Docente('Maria', 'm@m.com')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('Samuel', 'JS'))

