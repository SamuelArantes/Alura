const user = {
    nome: 'Samuel',
    email: 's@s.com',
    nascimento: '2001/08/20',
    role: 'Estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'm@m.com',
    role: 'admin',
    criarCurso() {
        console.log('curso criado!')
    }
}

//(Quem vai receber as informações, de onde vem essas informações).
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();