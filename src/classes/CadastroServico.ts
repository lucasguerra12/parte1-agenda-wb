// src/classes/CadastroServico.ts

import { Servico } from '../models/Servico';
import { Entrada } from './Entrada';
import { ICadastro } from '../interfaces/ICadastro';

export class CadastroServico implements ICadastro {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    cadastrar(): void {
        console.log('\n---- Cadastro de Serviço ----\n');
        let nome = this.entrada.receberTexto('Digite o nome do serviço: ');
        let valor = this.entrada.receberNumero('Digite o valor do serviço: '); 

        let servico = new Servico(nome, valor); 
        this.servicos.push(servico);

        console.log('\nServiço cadastrado com sucesso!\n');
    }

    atualizar(): void {
        console.log('\n---- Atualizar Serviço ----\n');
        let nome = this.entrada.receberTexto('Digite o nome do serviço que deseja atualizar: ');
        let servicoEncontrado = this.servicos.find(s => s.getNome() === nome);

        if (servicoEncontrado) {
            let novoNome = this.entrada.receberTexto('Digite o novo nome do serviço (ou pressione Enter para manter): ');
            if (novoNome) servicoEncontrado.setNome(novoNome);

            let novoValor = this.entrada.receberNumero('Digite o novo valor do serviço (ou 0 para manter): ');
            if (novoValor > 0) servicoEncontrado.setValor(novoValor);

            console.log('\nServiço atualizado com sucesso!\n');
        } else {
            console.log('\nServiço não encontrado.\n');
        }
    }

    excluir(): void {
        console.log('\n---- Excluir Serviço ----\n');
        let nome = this.entrada.receberTexto('Digite o nome do serviço que deseja excluir: ');
        let indice = this.servicos.findIndex(s => s.getNome() === nome);

        if (indice !== -1) {
            this.servicos.splice(indice, 1);
            console.log('\nServiço excluído com sucesso!\n');
        } else {
            console.log('\nServiço não encontrado.\n');
        }
    }
}