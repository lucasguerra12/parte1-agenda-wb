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
                console.log(`   Gênero: ${cliente.getGenero()}`);
                console.log('------------------------------');
            });
        } else {
            console.log(`Nenhum cliente do gênero '${genero}' encontrado.`);
        }
        console.log('\n***** Fim da Lista *****\n');
    }

    public listarMaisConsumidosGeral(): void {
        console.log('\n***** Produtos e Serviços Mais Consumidos (Geral - Quantidade) *****\n');

        const contagemConsumo: { [nome: string]: number } = {};

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos().forEach(produto => {
                const nomeProduto = produto.getNome();
                contagemConsumo[nomeProduto] = (contagemConsumo[nomeProduto] || 0) + 1;
            });
        });

        
        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos().forEach(servico => {
                const nomeServico = servico.getNome();
                contagemConsumo[nomeServico] = (contagemConsumo[nomeServico] || 0) + 1;
            });
        });

        const listaOrdenada = Object.keys(contagemConsumo)
            .map(nome => ({
                nome: nome,
                quantidade: contagemConsumo[nome],
            }))
            .sort((a, b) => b.quantidade - a.quantidade); 

        if (listaOrdenada.length > 0) {
            listaOrdenada.forEach((item, index) => {
                console.log(`${index + 1}. ${item.nome} (Consumido ${item.quantidade} vezes)`);
            });
        } else {
            console.log('Nenhum produto ou serviço consumido ainda.');
        }

        console.log('\n***** Fim da Lista *****\n');
    }
    public listarMaisConsumidosPorGenero(generoBuscado : string): void {
        console.log(`\n***** Produtos e Serviços Mais Consumidos (Gênero: ${generoBuscado}  - Quantidade) *****\n`);
        const contagemConsumo: { [nome: string]: number } = {};
        const clientesDoGenero = this.clientes.filter(cliente =>
            cliente.getGenero().toLowerCase() === generoBuscado.toLowerCase()
        );

        if (clientesDoGenero.length === 0) {
            console.log(`Nenhum cliente do gênero '${generoBuscado}' encontrado para analisar consumo.`);
            console.log('\n***** Fim da Lista *****\n');
            return; 
        }

        clientesDoGenero.forEach(cliente => {
            cliente.getProdutosConsumidos().forEach(produto => {
                const nomeProduto = produto.getNome();
                contagemConsumo[nomeProduto] = (contagemConsumo[nomeProduto] || 0) + 1;
            });
        });

        clientesDoGenero.forEach(cliente => {
            cliente.getServicosConsumidos().forEach(servico => {
                const nomeServico = servico.getNome();
                contagemConsumo[nomeServico] = (contagemConsumo[nomeServico] || 0) + 1;
            });
        });      
        const listaOrdenada = Object.keys(contagemConsumo)
            .map(nome => ({
                nome: nome,
                quantidade: contagemConsumo[nome],
            }))
            .sort((a, b) => b.quantidade - a.quantidade); 

        if (listaOrdenada.length > 0) {
            listaOrdenada.forEach((item, index) => {
                console.log(`${index + 1}. ${item.nome} (Consumido ${item.quantidade} vezes)`);
            });
        } else {
            console.log(`Nenhum produto ou serviço consumido por clientes do gênero '${generoBuscado}' ainda.`);
        }
        console.log('\n***** Fim da Lista *****\n');
     }

     public listarTop10MenosConsumidores(): void {
        console.log('\n***** Top 10 Clientes que Menos Consumiram (Quantidade) *****\n');

        const clientesComConsumo = this.clientes.map(cliente => ({
            cliente: cliente,
            totalConsumido: cliente.getProdutosConsumidos().length + cliente.getServicosConsumidos().length,
        }));

        clientesComConsumo.sort((a, b) => a.totalConsumido - b.totalConsumido);      
        const top10 = clientesComConsumo.slice(0, 10);

        if (top10.length > 0) {
            top10.forEach((item, index) => {
                console.log(`${index + 1}. Nome: ${item.cliente.getNome()} (Total Consumido: ${item.totalConsumido})`);
            });
        } else {
            console.log('Nenhum cliente cadastrado ainda.');
        }

        console.log('\n***** Fim da Lista *****\n');
    }

    public listarTop5ConsumidoresValor(): void {
        console.log('\n***** Top 5 Clientes que Mais Consumiram (Valor) *****\n');

        
        const clientesComValorConsumido = this.clientes.map(cliente => {
            let totalGasto = 0;

            
            cliente.getProdutosConsumidos().forEach(produto => {
                totalGasto += produto.getValor();
            });

            
            cliente.getServicosConsumidos().forEach(servico => {
                totalGasto += servico.getValor();
            });

            return {
                cliente: cliente,
                totalGasto: totalGasto,
            };
        });

        
        clientesComValorConsumido.sort((a, b) => b.totalGasto - a.totalGasto);

        
        const top5 = clientesComValorConsumido.slice(0, 5);

        if (top5.length > 0) {
            top5.forEach((item, index) => {
                
                console.log(`${index + 1}. Nome: ${item.cliente.getNome()} (Total Gasto: R$ ${item.totalGasto.toFixed(2)})`);
            });
        } else {
            console.log('Nenhum cliente com consumo registrado ainda.');
        }

        console.log('\n***** Fim da Lista *****\n');
    }

    public listarProdutos(): void {
        console.log('\n***** Lista de Produtos *****\n');
        if (this.produtos.length === 0) {
            console.log('Nenhum produto cadastrado.');
            console.log('\n***** Fim da Lista *****\n');
            return;
        }
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1}. Nome: ${produto.getNome()} | Valor: R$ ${produto.getValor().toFixed(2)}`);
        });
        console.log('\n***** Fim da Lista *****\n');
    }

    public listarServicos(): void {
        console.log('\n***** Lista de Serviços *****\n');
        if (this.servicos.length === 0) {
            console.log('Nenhum serviço cadastrado.');
            console.log('\n***** Fim da Lista *****\n');
            return;
        }
        this.servicos.forEach((servico, index) => {
            console.log(`${index + 1}. Nome: ${servico.getNome()} | Valor: R$ ${servico.getValor().toFixed(2)}`);
        });
        console.log('\n***** Fim da Lista *****\n');
    }
}