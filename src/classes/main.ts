import { Empresa } from '../classes/Empresa';
   import { CadastroCliente } from '../classes/CadastroCliente';
   import { ListagemClientes } from '../classes/ListagemClientes';
   import { Entrada } from '../classes/Entrada';
   import { Cliente } from '../models/Cliente';
   import { CadastroProduto } from '../classes/CadastroProduto';
   import { CadastroServico } from '../classes/CadastroServico';
   import { Produto } from '../models/Produto';
   import { Servico } from '../models/Servico';

   function main() {
    let empresa: Empresa = new Empresa();
    let cadastroCliente: CadastroCliente = new CadastroCliente(empresa.getClientes());
    let listagemClientes: ListagemClientes = new ListagemClientes(empresa.getClientes());
    let entrada: Entrada = new Entrada();
    let cadastroProduto: CadastroProduto = new CadastroProduto(empresa.getProdutos());
    let cadastroServico: CadastroServico = new CadastroServico(empresa.getServicos());

    let execucao = true;

    while (execucao) {
        console.log('\n***** Agenda World Beauty *****\n');
        console.log('1 - Cadastrar Cliente');
        console.log('2 - Listar Clientes');
        console.log('3 - Atualizar Cliente');
        console.log('4 - Excluir Cliente');
        console.log('5 - Cadastrar Produto');
        console.log('6 - Atualizar Produto');
        console.log('7 - Excluir Produto');
        console.log('8 - Cadastrar Serviço');
        console.log('9 - Atualizar Serviço');
        console.log('10 - Excluir Serviço');
        console.log('11 - Registrar Consumo');
        console.log('12 - Top 10 Clientes Mais Consumiram'); 
        console.log('0 - Sair');

        let opcao = entrada.receberNumero('Por favor, escolha uma opção: ');

        switch (opcao) {
            case 1:
                cadastroCliente.cadastrar();
                break;
            case 2:
                listagemClientes.listar();
                break;
            case 3:
                cadastroCliente.atualizarCliente();
                break;
            case 4:
                cadastroCliente.excluirCliente();
                break;
            case 5:
                cadastroProduto.cadastrar();
                break;
            case 6:
                cadastroProduto.atualizar();
                break;
            case 7:
                cadastroProduto.excluir();
                break;
            case 8:
                cadastroServico.cadastrar();
                break;
            case 9:
                cadastroServico.atualizar();
                break;
            case 10:
                cadastroServico.excluir();
                break;
            case 11: // Nova lógica para registrar consumo
                let nomeCliente = entrada.receberTexto('Digite o nome do cliente: ');
                let cliente = empresa.getClientes().find(c => c.getNome() === nomeCliente);

                if (cliente) {
                    let tipoConsumo = entrada.receberNumero('Digite 1 para Produto ou 2 para Serviço: ');
                    if (tipoConsumo === 1) {
                        let nomeProduto = entrada.receberTexto('Digite o nome do produto: ');
                        let produto = empresa.getProdutos().find(p => p.getNome() === nomeProduto);
                        if (produto) {
                            cliente.adicionarProdutoConsumido(produto);
                            console.log('\nProduto registrado para o cliente.\n');
                        } else {
                            console.log('\nProduto não encontrado.\n');
                        }
                    } else if (tipoConsumo === 2) {
                        let nomeServico = entrada.receberTexto('Digite o nome do serviço: ');
                        let servico = empresa.getServicos().find(s => s.getNome() === nomeServico);
                        if (servico) {
                            cliente.adicionarServicoConsumido(servico);
                            console.log('\nServiço registrado para o cliente.\n');
                        } else {
                            console.log('\nServiço não encontrado.\n');
                        }
                    } else {
                        console.log('\nOpção inválida.\n');
                    }
                } else {
                    console.log('\nCliente não encontrado.\n');
                }
                break;
            case 0:
                execucao = false;
                console.log('\nEncerrando o programa...\n');
                break;
            default:
                console.log('\nOpção inválida.\n');
            
            case 12:
                empresa.listarTop10Consumidores();
                break;
        }
    }
   }

   main();