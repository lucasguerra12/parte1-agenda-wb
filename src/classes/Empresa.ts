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

    public listarClientesPorGenero(genero: string): void {
        console.log(`\n***** Clientes do Gênero: ${genero} *****\n`);
        const clientesFiltrados = this.clientes.filter(cliente => cliente.getGenero().toLowerCase() === genero.toLowerCase());

        if (clientesFiltrados.length > 0) {
            clientesFiltrados.forEach((cliente, index) => {
                console.log(`${index + 1}. Nome: ${cliente.getNome()}`);
                console.log(`   Nome Social: ${cliente.getNomeSocial()}`);
                console.log(`   CPF: ${cliente.getCPF().getValor()}`);
                // Adicione outras informações que desejar
                console.log('------------------------------');
            });
        } else {
            console.log(`Nenhum cliente do gênero '${genero}' encontrado.`);
        }
        console.log('\n***** Fim da Lista *****\n');
    }
   }