import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() hidden: boolean = false;
  btnSelected = false;
  item = 'home';
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  Selected(i: string): void {
    this.item = i;
    if (i !== this.item) this.btnSelected = false;
    else {
      this.btnSelected = true;
    }
  }
  header = window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.menu');
    const higth = window.pageYOffset + window.innerHeight * 0.85;
    console.log(higth);
    debugger;
    if (higth > 1200) {
      navbar?.classList.add('rolagem');
    } else {
      navbar?.classList.remove('rolagem');
    }
  });
}
