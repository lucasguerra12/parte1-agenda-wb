import { CPF } from './CPF';
import { RG } from './RG';
import { Telefone } from './Telefone';
import { Produto } from './Produto';
import { Servico } from './Servico';

export class Cliente {
  private nome: string;
  private nomeSocial: string;
  private cpf: CPF;
  private rgs: RG[];
  private dataCadastro: Date;
  private telefones: Telefone[];
  private produtosConsumidos: Produto[];
  private servicosConsumidos: Servico[];

  constructor(nome: string, nomeSocial: string, cpf: CPF) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.cpf = cpf;
    this.rgs = [];
    this.dataCadastro = new Date();
    this.telefones = [];
    this.produtosConsumidos = [];
    this.servicosConsumidos = [];
  }

  public getNome(): string {
    return this.nome;
  }

  public getNomeSocial(): string {
    return this.nomeSocial;
  }

  public getCPF(): CPF {
    return this.cpf;
  }

  public getRGs(): RG[] {
    return this.rgs;
  }

  public getDataCadastro(): Date {
    return this.dataCadastro;
  }

  public getTelefones(): Telefone[] {
    return this.telefones;
  }

  public getProdutosConsumidos(): Produto[] {
    return this.produtosConsumidos;
  }

  public getServicosConsumidos(): Servico[] {
    return this.servicosConsumidos;
  }

  public adicionarRG(rg: RG): void {
    this.rgs.push(rg);
  }

  public adicionarTelefone(telefone: Telefone): void {
    this.telefones.push(telefone);
  }

  public adicionarProdutoConsumido(produto: Produto): void {
    this.produtosConsumidos.push(produto);
  }

  public adicionarServicoConsumido(servico: Servico): void {
    this.servicosConsumidos.push(servico);
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setNomeSocial(nomeSocial: string): void {
    this.nomeSocial = nomeSocial;
  }
}