import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent {
  dataNascimento: Date = new Date('1977-2-27');
  hoje = new Date();
  calcularIdade(): number {
    const hoje = new Date();
    const nascimento = new Date(this.dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    // Verificar se o aniversário já ocorreu este ano
    if (
      hoje.getMonth() < nascimento.getMonth() ||
      (hoje.getMonth() === nascimento.getMonth() &&
        hoje.getDate() < nascimento.getDate())
    ) {
      idade--;
    }

    return idade;
  }
}
