import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Carlos', 'Roberto', 'c@c.com');
console.log(novoUser.nome);
console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin('Rodrigo', 'r@r.com');
// console.log(novoAdmin.nome);
