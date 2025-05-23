import { Produto } from '../models/Produto';
   import { Entrada } from './Entrada';
   import { ICadastro } from '../interfaces/ICadastro';

   export class CadastroProduto implements ICadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    cadastrar(): void {
        console.log('\n---- Cadastro de Produto ----\n');
        this.entrada = new Entrada(); 
        let nome = this.entrada.receberTexto('Digite o nome do produto: ');
        let valor = this.entrada.receberNumero('Digite o valor do produto: ');
        let produto = new Produto(nome,valor);
        this.produtos.push(produto);

        console.log('\nProduto cadastrado com sucesso!\n');
    }

    atualizar(): void {
        console.log('\n---- Atualizar Produto ----\n');
        let nome = this.entrada.receberTexto('Digite o nome do produto que deseja atualizar: ');
        let produtoEncontrado = this.produtos.find(p => p.getNome() === nome);

        if (produtoEncontrado) {
            let novoNome = this.entrada.receberTexto('Digite o novo nome do produto (ou pressione Enter para manter): ');
            if (novoNome) produtoEncontrado.setNome(novoNome); 
            let novoValor = this.entrada.receberNumero('Digite o novo valor do produto (ou 0 para manter): ');
            if (novoValor > 0) produtoEncontrado.setValor(novoValor); 

            console.log('\nProduto atualizado com sucesso!\n');
        } else {
            console.log('\nProduto não encontrado.\n');
        }
    }

    excluir(): void {
        console.log('\n---- Excluir Produto ----\n');
        this.entrada = new Entrada(); 
        let nome = this.entrada.receberTexto('Digite o nome do produto que deseja excluir: ');
        let indice = this.produtos.findIndex(p => p.getNome() === nome);

        if (indice !== -1) {
            this.produtos.splice(indice, 1);
            console.log('\nProduto excluído com sucesso!\n');
        } else {
            console.log('\nProduto não encontrado.\n');
        }
    }
   }