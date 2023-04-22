import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, role = 'admin', ativo = true){
        super(nome, email, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

// const novoAdmin = new Admin('Alice', 'a@a.com')
// console.log(novoAdmin.criarCurso('JS', 20));

