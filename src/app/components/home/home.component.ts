import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  anosExperiencia: number = 0;
  constructor() {
    // Scroll event listener moved to ngOnInit for better lifecycle management
  }

  ngOnInit() {
    const inicio = new Date(2017, 2, 1);
    const agora = new Date();
    const meses = (agora.getFullYear() - inicio.getFullYear()) * 12 + (agora.getMonth() - inicio.getMonth());
    this.anosExperiencia = Math.floor(meses / 12);

    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.menu');
      const height = window.pageYOffset + window.innerHeight * 0.85;
      if (height > 1200) {
        navbar?.classList.add('rolagem');
      } else {
        navbar?.classList.remove('rolagem');
      }
    });
  }
}
