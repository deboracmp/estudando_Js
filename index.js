import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const cliente1 = new Cliente("Débora", 34721619812, "123");

const contaCorrenteDebora = new ContaCorrente(cliente1, 1001);
contaCorrenteDebora.depositar(500);
contaCorrenteDebora.sacar(100);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

const diretor = new Diretor ("Rodrigo", 34721619800, 10000);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente ("Gustavo", 34721619801, 5000);
gerente.cadastrarSenha("123456");

const gerenteestalogado = SistemaAutenticacao.login(gerente, "123456");
const diretorestalogado = SistemaAutenticacao.login(diretor, "123456789");
console.log(gerenteestalogado);
console.log(diretorestalogado);

const clienteestalogado = SistemaAutenticacao.login(cliente1, "123");

console.log(clienteestalogado);