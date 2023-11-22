import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  rolagemTop = window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.menu');
    const higth = window.pageYOffset + window.innerHeight * 0.85;
    if (higth > 1200) {
      navbar?.classList.add('rolagem');
    } else {
      navbar?.classList.remove('rolagem');
    }
  });
}
