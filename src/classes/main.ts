import { Empresa } from './Empresa';
   import { CadastroCliente } from './CadastroCliente';
   import { ListagemClientes } from './ListagemClientes';
   import { Entrada } from './Entrada';
   import { Cliente } from '../models/Cliente';

   function main() {
    let empresa: Empresa = new Empresa();
    let cadastro: CadastroCliente = new CadastroCliente(empresa.getClientes());
    let listagem: ListagemClientes = new ListagemClientes(empresa.getClientes());
    let entrada: Entrada = new Entrada();

    let execucao = true;

    while (execucao) {
        console.log('\n***** Agenda World Beauty *****\n');
        console.log('1 - Cadastrar Cliente');
        console.log('2 - Listar Clientes');
        console.log('3 - Atualizar Cliente');
        console.log('4 - Excluir Cliente');
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