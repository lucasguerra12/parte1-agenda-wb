import { Empresa } from '../classes/Empresa';
import { CadastroCliente } from '../classes/CadastroCliente';
import { ListagemClientes } from '../classes/ListagemClientes';
import { Entrada } from '../classes/Entrada';
import { Cliente } from '../models/Cliente';
import { CadastroProduto } from '../classes/CadastroProduto';
import { CadastroServico } from '../classes/CadastroServico';
import { Produto } from '../models/Produto';
import { Servico } from '../models/Servico';
import { Telefone } from '../models/Telefone';
import { RG } from '../models/RG';
import { CPF } from '../models/CPF';

function popularDadosIniciais(empresa: Empresa) {
    console.log('\nPopuando dados iniciais para testes...\n');
    // --- TESTES COM 30 CLIENTES, 20 PRODUTOS E 20 SERVIÇOS --- COMO PEDIDO
    // --- Clientes ---
    const clientesParaCadastrar = [
        new Cliente('Alice Silva', 'Alice', new CPF('111.111.111-11', new Date('2000-01-15')), 'Feminino'),
        new Cliente('Bruno Costa', 'Bruninho', new CPF('222.222.222-22', new Date('1995-03-20')), 'Masculino'),
        new Cliente('Carla Souza', 'Carlinha', new CPF('333.333.333-33', new Date('1988-07-01')), 'Feminino'),
        new Cliente('Daniel Lima', 'Dani', new CPF('444.444.444-44', new Date('1992-11-10')), 'Masculino'),
        new Cliente('Eva Martins', 'Evita', new CPF('555.555.555-55', new Date('1975-04-22')), 'Feminino'),
        new Cliente('Fernando Rocha', 'Nando', new CPF('666.666.666-66', new Date('1980-09-05')), 'Masculino'),
        new Cliente('Giovana Dias', 'Gigi', new CPF('777.777.777-77', new Date('1998-02-28')), 'Feminino'),
        new Cliente('Henrique Santos', 'Rique', new CPF('888.888.888-88', new Date('1993-06-18')), 'Masculino'),
        new Cliente('Isabela Faria', 'Isa', new CPF('999.999.999-99', new Date('2001-12-03')), 'Feminino'),
        new Cliente('Joao Pereira', 'JP', new CPF('100.000.000-00', new Date('1985-08-08')), 'Masculino'),
        new Cliente('Juliana Vieira', 'Juh', new CPF('110.000.000-00', new Date('1990-01-25')), 'Feminino'),
        new Cliente('Kleber Almeida', 'Kleb', new CPF('120.000.000-00', new Date('1978-04-12')), 'Masculino'),
        new Cliente('Laura Gomes', 'Lau', new CPF('130.000.000-00', new Date('1994-07-07')), 'Feminino'),
        new Cliente('Marcos Nogueira', 'Mark', new CPF('140.000.000-00', new Date('1983-10-30')), 'Masculino'),
        new Cliente('Natália Xavier', 'Nati', new CPF('150.000.000-00', new Date('1996-03-14')), 'Feminino'),
        new Cliente('Otávio Pires', 'Tavinho', new CPF('160.000.000-00', new Date('1987-05-23')), 'Masculino'),
        new Cliente('Paula Cardoso', 'Paulinha', new CPF('170.000.000-00', new Date('1991-09-19')), 'Feminino'),
        new Cliente('Quirino Souza', 'Quir', new CPF('180.000.000-00', new Date('1970-11-29')), 'Masculino'),
        new Cliente('Roberta Campos', 'Berta', new CPF('190.000.000-00', new Date('1989-02-01')), 'Feminino'),
        new Cliente('Sérgio Rodrigues', 'Serginho', new CPF('200.000.000-00', new Date('1984-06-06')), 'Masculino'),
        new Cliente('Tatiane Mello', 'Tati', new CPF('210.000.000-00', new Date('1997-08-11')), 'Feminino'),
        new Cliente('Ubiratan Viana', 'Birata', new CPF('220.000.000-00', new Date('1973-12-24')), 'Masculino'),
        new Cliente('Viviane Dantas', 'Vivi', new CPF('230.000.000-00', new Date('1999-04-09')), 'Feminino'),
        new Cliente('Wagner Guedes', 'Wag', new CPF('240.000.000-00', new Date('1981-01-08')), 'Masculino'),
        new Cliente('Xenia Ramos', 'Xeni', new CPF('250.000.000-00', new Date('1995-07-17')), 'Feminino'),
        new Cliente('Yago Queiroz', 'Yaguinho', new CPF('260.000.000-00', new Date('1986-03-29')), 'Masculino'),
        new Cliente('Zara Brito', 'Zarinha', new CPF('270.000.000-00', new Date('1992-05-02')), 'Feminino'),
        new Cliente('André Rocha', 'Dedé', new CPF('280.000.000-00', new Date('1980-11-04')), 'Não Binário'),
        new Cliente('Beatriz Lima', 'Bia', new CPF('290.000.000-00', new Date('1993-09-21')), 'Feminino'),
        new Cliente('Carlos Silva', 'Cacau', new CPF('300.000.000-00', new Date('1982-12-16')), 'Masculino')
    ];
    clientesParaCadastrar.forEach(cliente => empresa.getClientes().push(cliente));


    // --- Produtos ---
    const produtosParaCadastrar = [
        new Produto('Shampoo Profissional', 75.00),
        new Produto('Condicionador Hidratante', 60.00),
        new Produto('Máscara Reconstrutora', 90.00),
        new Produto('Finalizador Antifrizz', 45.00),
        new Produto('Protetor Térmico', 55.00),
        new Produto('Kit Viagem Cabelos', 120.00),
        new Produto('Óleo Capilar Reparador', 70.00),
        new Produto('Ampola de Tratamento', 30.00),
        new Produto('Esmalte Hipoalergênico', 15.00),
        new Produto('Removedor de Esmaltes', 10.00),
        new Produto('Creme para Mãos', 25.00),
        new Produto('Loção Hidratante Corporal', 85.00),
        new Produto('Sabonete Líquido Perfumado', 40.00),
        new Produto('Esfoliante Corporal', 65.00),
        new Produto('Perfume Floral', 180.00),
        new Produto('Batom Matte Longa Duração', 50.00),
        new Produto('Base Líquida HD', 110.00),
        new Produto('Corretivo Cremoso', 40.00),
        new Produto('Máscara de Cílios Volume', 35.00),
        new Produto('Kit Pincéis Maquiagem', 150.00)
    ];
    produtosParaCadastrar.forEach(produto => empresa.getProdutos().push(produto));

    // --- Serviços ---
    const servicosParaCadastrar = [
        new Servico('Corte de Cabelo Feminino', 80.00),
        new Servico('Corte de Cabelo Masculino', 50.00),
        new Servico('Coloração Completa', 200.00),
        new Servico('Mechas / Luzes', 350.00),
        new Servico('Hidratação Capilar Profunda', 100.00),
        new Servico('Escova Progressiva', 400.00),
        new Servico('Manicure Simples', 30.00),
        new Servico('Pedicure Completa', 45.00),
        new Servico('Design de Sobrancelhas', 40.00),
        new Servico('Alongamento de Cílios', 180.00),
        new Servico('Limpeza de Pele Facial', 150.00),
        new Servico('Massagem Relaxante', 120.00),
        new Servico('Depilação Completa', 90.00),
        new Servico('Maquiagem para Eventos', 160.00),
        new Servico('Penteado para Festas', 130.00),
        new Servico('Reflexologia Podal', 70.00),
        new Servico('Tratamento Antiacne', 170.00),
        new Servico('Descoloração Global', 250.00),
        new Servico('Reconstrução Capilar', 110.00),
        new Servico('Banho de Lua', 60.00)
    ];
    servicosParaCadastrar.forEach(servico => empresa.getServicos().push(servico));

    // --- Consumo Inicial (para testar as listagens de consumo) ---
    // Cliente Alice consome bastante
    const alice = empresa.getClientes().find(c => c.getNome() === 'Alice Silva');
    if (alice) {
        alice.adicionarProdutoConsumido(empresa.getProdutos().find(p => p.getNome() === 'Shampoo Profissional')!);
        alice.adicionarProdutoConsumido(empresa.getProdutos().find(p => p.getNome() === 'Máscara Reconstrutora')!);
        alice.adicionarProdutoConsumido(empresa.getProdutos().find(p => p.getNome() === 'Óleo Capilar Reparador')!);
        alice.adicionarServicoConsumido(empresa.getServicos().find(s => s.getNome() === 'Corte de Cabelo Feminino')!);
        alice.adicionarServicoConsumido(empresa.getServicos().find(s => s.getNome() === 'Coloração Completa')!);
        alice.adicionarServicoConsumido(empresa.getServicos().find(s => s.getNome() === 'Mechas / Luzes')!);
    }

    // Cliente Bruno consome menos
    const bruno = empresa.getClientes().find(c => c.getNome() === 'Bruno Costa');
    if (bruno) {
        bruno.adicionarServicoConsumido(empresa.getServicos().find(s => s.getNome() === 'Corte de Cabelo Masculino')!);
        bruno.adicionarProdutoConsumido(empresa.getProdutos().find(p => p.getNome() === 'Shampoo Profissional')!);
    }

    // Cliente Carla (feminino) consome maquiagem
    const carla = empresa.getClientes().find(c => c.getNome() === 'Carla Souza');
    if (carla) {
        carla.adicionarProdutoConsumido(empresa.getProdutos().find(p => p.getNome() === 'Batom Matte Longa Duração')!);
        carla.adicionarProdutoConsumido(empresa.getProdutos().find(p => p.getNome() === 'Base Líquida HD')!);
        carla.adicionarServicoConsumido(empresa.getServicos().find(s => s.getNome() === 'Maquiagem para Eventos')!);
    }

    // Cliente Daniel (masculino) consome tratamento
    const daniel = empresa.getClientes().find(c => c.getNome() === 'Daniel Lima');
    if (daniel) {
        daniel.adicionarServicoConsumido(empresa.getServicos().find(s => s.getNome() === 'Hidratação Capilar Profunda')!);
        daniel.adicionarProdutoConsumido(empresa.getProdutos().find(p => p.getNome() === 'Condicionador Hidratante')!);
    }

    // Cliente André (Não Binário)
    const andre = empresa.getClientes().find(c => c.getNome() === 'André Rocha');
    if (andre) {
        andre.adicionarServicoConsumido(empresa.getServicos().find(s => s.getNome() === 'Corte de Cabelo Masculino')!);
        andre.adicionarProdutoConsumido(empresa.getProdutos().find(p => p.getNome() === 'Protetor Térmico')!);
    }

    console.log('Dados iniciais populados com sucesso!\n');
}

// --- Fim da função de popular dados ---

   function main() {
    let empresa: Empresa = new Empresa();
    popularDadosIniciais(empresa);
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
        console.log('------------------------------'); // Separador
        console.log('5 - Cadastrar Produto');
        console.log('6 - Listar Produtos');       // <-- NOVA OPÇÃO
        console.log('7 - Atualizar Produto');
        console.log('8 - Excluir Produto');
        console.log('------------------------------'); // Separador
        console.log('9 - Cadastrar Serviço');
        console.log('10 - Listar Serviços');      // <-- NOVA OPÇÃO
        console.log('11 - Atualizar Serviço');
        console.log('12 - Excluir Serviço');
        console.log('------------------------------'); // Separador
        console.log('13 - Registrar Consumo');
        console.log('------------------------------'); // Separador
        console.log('Listagens Específicas:');
        console.log('14 - Top 10 Clientes Mais Consumiram (Quantidade)');
        console.log('15 - Listar Clientes por Gênero');
        console.log('16 - Produtos e Serviços Mais Consumidos (Geral)');
        console.log('17 - Produtos e Serviços Mais Consumidos (Por Gênero)');
        console.log('18 - Top 10 Clientes Menos Consumiram (Quantidade)');
        console.log('19 - Top 5 Clientes Mais Consumiram (Valor)');
        console.log('0 - Sair');

        let opcao = entrada.receberNumero('Por favor, escolha uma opcao: ');

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
                empresa.listarProdutos();
                break;
            case 7:
                cadastroProduto.atualizar();
                break;
            case 8:
                cadastroProduto.excluir();
                break;
            case 9:
                cadastroServico.cadastrar();
                break;
            case 10: 
                empresa.listarServicos();
                break;
            case 11:
                cadastroServico.atualizar();
                break;
            case 12:
                cadastroServico.excluir();
                break;
            case 13: 
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
            
            case 14: 
                empresa.listarTop10Consumidores();
                break;
            case 15: 
                let generoBuscado = entrada.receberTexto('Digite o gênero para filtrar (Ex: Masculino, Feminino, Não Binário): ');
                empresa.listarClientesPorGenero(generoBuscado);
                break;
            case 16: 
                empresa.listarMaisConsumidosGeral();
                break;
            case 17: 
                let generoParaFiltrar = entrada.receberTexto('Digite o gênero para analisar o consumo (Ex: Masculino, Feminino, Não Binário): ');
                empresa.listarMaisConsumidosPorGenero(generoParaFiltrar);
                break;
            case 18: 
                empresa.listarTop10MenosConsumidores();
                break;
            case 19: 
                empresa.listarTop5ConsumidoresValor();
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