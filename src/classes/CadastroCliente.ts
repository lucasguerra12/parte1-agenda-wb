import { Cliente } from '../models/Cliente';
import { CPF } from '../models/CPF';
import { RG } from '../models/RG';
import { Telefone } from '../models/Telefone';
import { Entrada } from './Entrada';
import { ICadastro } from '../interfaces/ICadastro';

export class CadastroCliente implements ICadastro {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log('\nInício do cadastro do cliente');

        let nome = this.entrada.receberTexto('Por favor informe o nome do cliente: ');
        let nomeSocial = this.entrada.receberTexto('Por favor informe o nome social do cliente: ');
        let valorCpf = this.entrada.receberTexto('Por favor informe o número do cpf: ');
        let dataEmissaoCpf = this.entrada.receberTexto('Por favor informe a data de emissão do cpf, no formato dd/mm/aaaa: ');
        let valorRg = this.entrada.receberTexto('Por favor informe o número do rg: ');
        let dataEmissaoRg = this.entrada.receberTexto('Por favor informe a data de emissão do rg, no formato dd/mm/aaaa: ');
        let cpf = new CPF(valorCpf, new Date(dataEmissaoCpf));
        let rg = new RG(valorRg, new Date(dataEmissaoRg));
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente (Ex: Masculino, Feminino, Não Binário): `);
        

        let cliente = new Cliente(nome, nomeSocial, cpf,genero);
        this.clientes.push(cliente);

        console.log('\nCadastro concluído :)\n');
    }

    public atualizarCliente(): void {
        console.log('\nInício da atualização do cliente');

        let cpf = this.entrada.receberTexto('Por favor informe o CPF do cliente que deseja atualizar: ');
        let clienteEncontrado = this.clientes.find(cliente => cliente.getCPF().getValor() === cpf);

        if (clienteEncontrado) {
            let novoNome = this.entrada.receberTexto('Por favor informe o novo nome do cliente: ');
            let novoNomeSocial = this.entrada.receberTexto('Por favor informe o novo nome social do cliente: ');

            clienteEncontrado.setNome(novoNome);
            clienteEncontrado.setNomeSocial(novoNomeSocial);

            console.log('\nCliente atualizado com sucesso!\n');
        } else {
            console.log('\nCliente não encontrado.\n');
        }
    }

    public excluirCliente(): void {
        console.log('\nInício da exclusão do cliente');

        let cpf = this.entrada.receberTexto('Por favor informe o CPF do cliente que deseja excluir: ');
        let indiceCliente = this.clientes.findIndex(cliente => cliente.getCPF().getValor() === cpf);

        if (indiceCliente !== -1) {
            this.clientes.splice(indiceCliente, 1);
            console.log('\nCliente excluído com sucesso!\n');
        } else {
            console.log('\nCliente não encontrado.\n');
        }
    }
}