import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss'],
})
export class CurriculoComponent {
  printCurriculo(div: string): void {
    let divCurriculo = document.getElementById(div)?.innerHTML;

    let a = window.open('', '', 'height=500, width=500');
    a?.document.write('<html>');
    a?.document.write(
      '<body > <h2>Eduardo Barros</h2><h4>WhatsApp: 71996407566</h4> <h4>Email: barrosebs@gmail.com</h4>' +
        divCurriculo
    );
    a?.document.write(divCurriculo !== undefined ? toString() : '');
    a?.document.write('</body></html>');
    a?.print();
    a?.document.close();
  }
}
