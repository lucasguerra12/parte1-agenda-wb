import * as readline from 'readline-sync';

export class Entrada {
  public receberNumero(mensagem: string): number {
    let numero = readline.questionInt(mensagem);
    return numero;
  }

  public receberTexto(mensagem: string): string {
    let texto = readline.question(mensagem);
    return texto;
  }
}