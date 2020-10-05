import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css'],
})
export class MobileNavbarComponent implements OnInit {
  showMenu = false;
  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
