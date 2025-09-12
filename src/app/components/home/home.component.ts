import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {
    // Scroll event listener moved to ngOnInit for better lifecycle management
  }

  ngOnInit() {
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
