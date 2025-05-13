import { Cliente } from '../models/Cliente';
import { IListagem } from '../interfaces/IListagem';

export class ListagemClientes implements IListagem {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    this.clientes = clientes;
  }

  public listar(): void {
    console.log('\n********Lista de clientes********\n');
    this.clientes.forEach(cliente => {
      console.log(`Nome: ${cliente.getNome()} \nNome social: ${cliente.getNomeSocial()} \nCPF: ${cliente.getCPF().getValor()} \n`);
    });
    console.log('\n********Fim da lista*********\n');
  }
}