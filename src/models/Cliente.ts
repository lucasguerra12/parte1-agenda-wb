

import { CPF } from './CPF';
import { RG } from './RG';
import { Telefone } from './Telefone';
import { Produto } from './Produto';
import { Servico } from './Servico';

export class Cliente {
 private nome: string;
 private nomeSocial: string;
 private cpf: CPF;
 private rgs: Array<RG>;
 private dataCadastro: Date;
 private telefones: Array<Telefone>;
 private produtosConsumidos: Array<Produto> = [];
 private servicosConsumidos: Array<Servico> = [];
 private genero: string; 
 
 constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
     this.nome = nome;
     this.nomeSocial = nomeSocial;
     this.cpf = cpf;
     this.rgs = [];
     this.dataCadastro = new Date();
     this.telefones = [];
     this.genero = genero; 
 }

 public getNome(): string {
     return this.nome;
 }

 public setNome(nome: string): void {
     this.nome = nome;
 }

 public getNomeSocial(): string {
     return this.nomeSocial;
 }

 public setNomeSocial(nomeSocial: string): void {
     this.nomeSocial = nomeSocial;
 }

 public getCPF(): CPF {
     return this.cpf;
 }

 public getRGs(): Array<RG> {
     return this.rgs;
 }

 public getDataCadastro(): Date {
     return this.dataCadastro;
 }

 public getTelefones(): Array<Telefone> {
     return this.telefones;
 }

 public getProdutosConsumidos(): Array<Produto> {
     return this.produtosConsumidos;
 }

 public getServicosConsumidos(): Array<Servico> {
     return this.servicosConsumidos;
 }

 public adicionarProdutoConsumido(produto: Produto): void {
     this.produtosConsumidos.push(produto);
 }

 public adicionarServicoConsumido(servico: Servico): void {
     this.servicosConsumidos.push(servico);
 }

 public getGenero(): string {
     return this.genero;
 }

 public setGenero(genero: string): void {
     this.genero = genero;
 }
}