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
}
