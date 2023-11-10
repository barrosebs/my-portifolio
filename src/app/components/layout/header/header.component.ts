import { Component, OnInit } from '@angular/core';
import { expand } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuExpandido: boolean = false;
  hidden = true;
  icon = 'fa-solid fa-bars';
  constructor() {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async toggleMenu() {
    this.menuExpandido = !this.menuExpandido;
    if (this.hidden) {
      await this.delay(300);
      this.hidden = false;
      this.icon = 'fa-light fa-xmark';
    } else {
      this.hidden = true;
      this.icon = 'fa-solid fa-bars';
    }
  }
}
