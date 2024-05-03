import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent {
  StartExperiencia: Date = new Date('2017-03-01')
  dataNascimento: Date = new Date('1977-2-27');
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
  calcularExperiencia(): number {
    const hoje = new Date();
    const experiencia = new Date(this.StartExperiencia);
    let AnoExperiencia = hoje.getFullYear() - experiencia.getFullYear();

    // Verificar se o aniversário já ocorreu este ano
    if (
      hoje.getMonth() < experiencia.getMonth() ||
      (hoje.getMonth() === experiencia.getMonth() &&
        hoje.getDate() < experiencia.getDate())
    ) {
      AnoExperiencia--;
    }

    return AnoExperiencia;

  }
}
