import { Cliente } from '../models/Cliente';
   import { Produto } from '../models/Produto';
   import { Servico } from '../models/Servico';

   export class Empresa {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;

    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }

    public getClientes(): Array<Cliente> {
        return this.clientes;
    }

    public getProdutos(): Array<Produto> {
        return this.produtos;
    }

    public getServicos(): Array<Servico> {
        return this.servicos;
    }
   }