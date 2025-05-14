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

    public listarTop10Consumidores(): void {
        console.log('\n---- Top 10 Consumidores ----\n');

        const clientesComConsumo = this.clientes.map(cliente => ({
            cliente: cliente,
            totalConsumido: cliente.getProdutosConsumidos().length + cliente.getServicosConsumidos().length,
        }));
         clientesComConsumo.sort((a,b) =>  b.totalConsumido - a.totalConsumido);

         const top10 = clientesComConsumo.slice(0,10);

         if (top10.length > 0 ){
            top10.forEach((item,index)=> {
                console.log(`${index + 1}. Nome:  ${item.cliente.getNome()}-  (Total consumido: ${item.totalConsumido})`);
            });
        } else {
            console.log ('Nenhum cliente cadastrado ainda.');
        }

        console.log('\n***** Fim da Lista *****\n')
    }
   }