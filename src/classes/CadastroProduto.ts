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
        let nome = this.entrada.receberTexto('Digite o nome do produto: ');

        let produto = new Produto(nome);
        this.produtos.push(produto);

        console.log('\nProduto cadastrado com sucesso!\n');
    }

    atualizar(): void {
        console.log('\n---- Atualizar Produto ----\n');
        let nome = this.entrada.receberTexto('Digite o nome do produto que deseja atualizar: ');
        let produtoEncontrado = this.produtos.find(p => p.getNome() === nome);

        if (produtoEncontrado) {
            let novoNome = this.entrada.receberTexto('Digite o novo nome do produto: ');
            produtoEncontrado.setNome(novoNome);
            console.log('\nProduto atualizado com sucesso!\n');
        } else {
            console.log('\nProduto não encontrado.\n');
        }
    }

    excluir(): void {
        console.log('\n---- Excluir Produto ----\n');
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