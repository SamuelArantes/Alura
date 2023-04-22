// Objeto literal.
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
// Executa diretamente o método presente no objeto literal.
user.exibirInfos();
// Função que remete ao mesmo funcionamento da função anterior, porém não há efetividade por conta da falta de contexto para o "this".
const exibir = function () {
    console.log(this.nome);
}
// Bind nessa linha tem a função de trazer o contexto do objeto literal para a função exibir e assim trazer o mesmo resultado do método nativo.
const exibirNome = exibir.bind(user);
// Exibe "Samuel".
exibirNome();
// Exibe "undefined".
exibir();

// Na codificação à cima foi utilizado o "bind", mas temos 2 métodos além dele para tratativa de contexto para this:
// call:
function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user1 = {
    nome: 'Samuel',
    email: 's@s.com',
    executaFuncao: function(fn) {
      fn.call(user1, this.nome, this.email)
    }
   }
   
   user1.executaFuncao(exibeMensagem)

// apply:
// Funciona de forma parecida ao call, porém recebe a lista de argumentos em um array.
function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user2 = {
    nome: 'Samuel',
    email: 's@s.com',
    executaFuncao: function(fn) {
      fn.apply(user2, [this.nome, this.email])
    }
   }
    user2.executaFuncao(exibeMensagem) 