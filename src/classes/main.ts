import { Empresa } from '../classes/Empresa';
   import { CadastroCliente } from '../classes/CadastroCliente';
   import { ListagemClientes } from '../classes/ListagemClientes';
   import { Entrada } from '../classes/Entrada';
   import { Cliente } from '../models/Cliente';
   import { CadastroProduto } from '../classes/CadastroProduto';
   import { CadastroServico } from '../classes/CadastroServico';

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
            case 0:
                execucao = false;
                console.log('\nEncerrando o programa...\n');
                break;
            default:
                console.log('\nOpção inválida.\n');
        }
    }
   }

   main();