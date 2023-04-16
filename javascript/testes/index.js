let user = {
    perfil: 'estudante'
   }
   
   let estudante = {
    nome: 'juliana'
   }
   
   Object.setPrototypeOf(estudante, user)

   console.log(estudante.nome, estudante.perfil)