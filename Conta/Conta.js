//Classe abstrata (é pra ser herdada e não usada)

import { Cliente } from "../Cliente.js"

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Não instaciar objeto do tipo Conta pois é Classe Abstrata")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }
    
        
    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    
    get cliente() {
        return this._cliente;
    }
    
    get saldo() {
        return this._saldo;
    }
    
    //método abstrato
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato");

    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
}
    

    depositar(valor) {
        if(valor <= 0) return; //early return (se for positiva a condição de impedimento já para a função)
        this._saldo += valor;
    }

    transferir(valor, conta) { 
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}