import { Empresa } from './Empresa';
   import { CadastroCliente } from './CadastroCliente';
   import { ListagemClientes } from './ListagemClientes';
   import { Entrada } from './Entrada';
   import { Cliente } from '../models/Cliente'; 
   import { CadastroProduto } from './CadastroProduto';
   import { CadastroServico } from './CadastroServico';

   function main() {
    let empresa: Empresa = new Empresa();
    let cadastro: CadastroCliente = new CadastroCliente(empresa.getClientes());
    let listagem: ListagemClientes = new ListagemClientes(empresa.getClientes());
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
                cadastro.cadastrar();
                break;
            case 2:
                listagem.listar();
                break;
            case 3:
                cadastro.atualizarCliente();
                break;
            case 4:
                cadastro.excluirCliente();
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