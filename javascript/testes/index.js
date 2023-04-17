 let user = {
     perfil: 'estudante'
    }
   
    let estudante = {
     nome: 'juliana5454'
    }
   
    Object.setPrototypeOf(estudante, user)

    console.log(estudante.nome, estudante.perfil)
