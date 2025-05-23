export class Servico {
    private nome: string;
    private valor: number;
  
    constructor(nome: string, valor: number) {
      this.nome = nome;
      this.valor = valor;
    }
  
    public getNome(): string {
      return this.nome;
    }

    public setNome(nome: string): void {
      this.nome = nome;
    }

    public getValor(): number {
      return this.valor;
    }

    public setValor(valor: number): void {
  }
}