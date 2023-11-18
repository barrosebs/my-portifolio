import { Component } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss'],
})
export class CarrosselComponent {
  currentItem = 0;

  constructor() {}

  controlClick(isClick: boolean): void {
    let items = document.querySelectorAll('.item');
    let maxItems = items.length;
    if (isClick) {
      this.currentItem -= 1;
    } else {
      this.currentItem += 1;
    }
    console.log('aqui', isClick, this.currentItem);

    if (this.currentItem >= maxItems) {
      debugger;
      this.currentItem = 0;
    }
    if (this.currentItem < 0) {
      this.currentItem = maxItems - 1;
    }
    items.forEach((item) => item.classList.remove('current-item'));
    items[this.currentItem].scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
    });
    items[this.currentItem].classList.add('current-item');
  }
}
